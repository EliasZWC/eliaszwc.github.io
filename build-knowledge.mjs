// Build the knowledge page from content/knowledge.md.
// Usage: node build-knowledge.mjs

import fs from 'node:fs';
import path from 'node:path';

const root = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const mdPath = path.join(root, 'content', 'knowledge.md');

const lines = fs.readFileSync(mdPath, 'utf8').split(/\r?\n/);

const tree = [];
let domain = null;
let field = null;
let branch = null;

for (const raw of lines) {
  const line = raw.trim();
  if (!line || line.startsWith('<!--') || line.startsWith('-->')) continue;
  const m = line.match(/^(#{1,4})\s+(.+)$/);
  if (!m) continue;
  const level = m[1].length;
  const name = m[2].trim();

  if (level === 1) {
    domain = { name, fields: [] };
    tree.push(domain);
    field = null;
    branch = null;
  } else if (level === 2 && domain) {
    field = { name, branches: [] };
    domain.fields.push(field);
    branch = null;
  } else if (level === 3 && field) {
    branch = { name, children: [] };
    field.branches.push(branch);
  } else if (level === 4 && branch) {
    branch.children.push(name);
  }
}

if (!tree.length) {
  console.error('no headings found in', mdPath);
  process.exit(1);
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fieldCount = tree.reduce((n, d) => n + d.fields.length, 0);
const branchCount = tree.reduce((n, d) => n + d.fields.reduce((m, f) => m + f.branches.length, 0), 0);

function domainsBlock({ interactive, flat }) {
  const items = tree
    .map((d, di) => {
      const chips = d.fields
        .map((f, fi) =>
          interactive
            ? `<button class="field" data-field="${esc(f.name)}" data-domain="${esc(d.name)}" aria-pressed="${di === 0 && fi === 0}">${esc(f.name)}</button>`
            : `<span class="field">${esc(f.name)}</span>`
        )
        .join('\n            ');
      return `        <div class="domain">
          <div>
            <div class="domain__name">${esc(d.name)}</div>
            <div class="domain__meta">${String(d.fields.length).padStart(2, '0')} fields</div>
          </div>
          <div class="fields">
            ${chips}
          </div>
        </div>`;
    })
    .join('\n');
  return `      <div class="domains"${flat ? ' style="border-top:0"' : ''}>\n${items}\n      </div>`;
}

function inject(file, start, end, block) {
  const p = path.join(root, file);
  const s = fs.readFileSync(p, 'utf8');
  const re = new RegExp(`(${start})[\\s\\S]*?(${end})`);
  if (!re.test(s)) {
    console.error(`markers not found in ${file}`);
    process.exit(1);
  }
  fs.writeFileSync(p, s.replace(re, `$1\n${block}\n      $2`));
}

const json = JSON.stringify(tree).replace(/</g, '\\u003c');
inject(
  'knowledge.html',
  '<!-- atlas:start -->',
  '<!-- atlas:end -->',
  `${domainsBlock({ interactive: true, flat: false })}\n\n      <script type="application/json" id="atlas-data">${json}</script>`
);

inject('index.html', '<!-- atlas-home:start -->', '<!-- atlas-home:end -->', domainsBlock({ interactive: false, flat: true }));

console.log(`knowledge: ${tree.length} domains, ${fieldCount} fields, ${branchCount} branches`);
