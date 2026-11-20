/* A Klein bottle, lifted into four dimensions and turned.
   The figure eight immersion is sampled as points, given a fourth coordinate,
   folded slowly in the (x,w) plane, spun like a turntable and viewed in
   perspective. Drag to turn it by hand. */

(() => {
  const canvas = document.querySelector('[data-manifold]');
  if (!canvas) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ctx = canvas.getContext('2d', { alpha: true });

  const A = 2.0;
  const N_U = 200;
  const N_V = 64;

  const xs = new Float32Array(N_U * N_V);
  const ys = new Float32Array(N_U * N_V);
  const zs = new Float32Array(N_U * N_V);
  const ws = new Float32Array(N_U * N_V);

  let k = 0;
  for (let i = 0; i < N_U; i++) {
    const u = (i / N_U) * Math.PI * 2;
    for (let j = 0; j < N_V; j++) {
      const v = (j / N_V) * Math.PI * 2;
      const cu = Math.cos(u);
      const su = Math.sin(u);
      const r = A + Math.cos(u / 2) * Math.sin(v) - Math.sin(u / 2) * Math.sin(2 * v);
      xs[k] = r * cu;
      ys[k] = r * su;
      zs[k] = Math.sin(u / 2) * Math.sin(v) + Math.cos(u / 2) * Math.sin(2 * v);
      ws[k] = 0.9 * Math.cos(u / 2) * Math.sin(v);
      k++;
    }
  }

  let w = 0;
  let h = 0;
  let accent = '166, 187, 240';

  function readAccent() {
    const raw = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    const m = raw.match(/^#?([0-9a-f]{6})$/i);
    if (m) {
      const n = parseInt(m[1], 16);
      accent = `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
    }
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = Math.max(1, Math.round(rect.width));
    h = Math.max(1, Math.round(rect.height));
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  const TILT = 0.62;
  const CAM = 8.4;

  let spin = 0.7;
  let fold = 0.0;
  let userSpin = 0;
  let userPitch = 0;
  let targetSpin = 0;
  let targetPitch = 0;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;

  const o = { x: 0, y: 0, d: 0 };

  function project(px, py, pz, pw, cFold, cSpin, cPitch, scale, cx, cy) {
    // fold in the (x,w) plane
    const cf = Math.cos(cFold);
    const sf = Math.sin(cFold);
    const x = px * cf - pw * sf;
    const y = py;
    const z = pz;

    // turntable around the vertical axis
    const cs = Math.cos(cSpin);
    const ss = Math.sin(cSpin);
    const X = x * cs - y * ss;
    const Y = x * ss + y * cs;

    // tilt the camera
    const cp = Math.cos(cPitch);
    const sp = Math.sin(cPitch);
    const depth = Y * cp - z * sp;
    const up = Y * sp + z * cp;

    const k = CAM / (CAM + depth);
    o.x = cx + X * k * scale;
    o.y = cy - up * k * scale;
    o.d = Math.max(0, Math.min(1, 0.5 - depth / 9));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const cSpin = spin + userSpin;
    const cPitch = TILT + userPitch;
    // wide screens: the whole form sits on the right.
    // narrow screens: half of the form, bleeding off the right edge.
    const narrow = w < 700;
    const scale = narrow ? w * 0.38 : Math.min(w, h) * 0.2;
    const cx = narrow ? w * 0.78 : w * 0.74;
    const cy = narrow ? h * 0.62 : h * 0.5;

    ctx.strokeStyle = `rgba(${accent}, 0.13)`;
    ctx.lineWidth = 1;
    for (let i = 0; i < N_U; i += 12) {
      ctx.beginPath();
      for (let j = 0; j < N_V; j++) {
        const idx = i * N_V + j;
        project(xs[idx], ys[idx], zs[idx], ws[idx], fold, cSpin, cPitch, scale, cx, cy);
        if (j === 0) ctx.moveTo(o.x, o.y);
        else ctx.lineTo(o.x, o.y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    for (let idx = 0; idx < xs.length; idx++) {
      project(xs[idx], ys[idx], zs[idx], ws[idx], fold, cSpin, cPitch, scale, cx, cy);
      const d = o.d;
      const size = 0.7 + d * 2.0;
      ctx.fillStyle = `rgba(${accent}, ${(0.08 + d * 0.78).toFixed(3)})`;
      ctx.fillRect(o.x, o.y, size, size);
    }
  }

  let raf = 0;
  let visible = true;

  function tick() {
    if (!dragging) {
      spin += 0.0032;
      fold += 0.0016;
    }
    userSpin += (targetSpin - userSpin) * 0.1;
    userPitch += (targetPitch - userPitch) * 0.1;
    draw();
    if (!reduce) raf = requestAnimationFrame(tick);
  }

  canvas.addEventListener('pointerdown', (e) => {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    targetSpin += (e.clientX - lastX) * 0.006;
    targetPitch += (e.clientY - lastY) * 0.004;
    lastX = e.clientX;
    lastY = e.clientY;
  });

  const endDrag = () => { dragging = false; };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);

  readAccent();
  resize();
  draw();

  if (!reduce) {
    const io = new IntersectionObserver((entries) => {
      const now = entries[0].isIntersecting;
      if (now && !visible) {
        visible = true;
        raf = requestAnimationFrame(tick);
      } else if (!now && visible) {
        visible = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);
    raf = requestAnimationFrame(tick);
  }

  window.addEventListener('resize', () => {
    resize();
    draw();
  });
})();
