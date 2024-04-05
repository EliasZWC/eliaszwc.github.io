
// *******************************************************************************************

// 左侧边栏#显示左侧边栏
function showLeftbar(id) {
    var leftbar = document.getElementById(id);
    var hide = document.querySelector('.hide')
    leftbar.style.left = '0';
    leftbar.scrollTop = 0;
    hide.style.left = '63vw';
}
// 左侧边栏#收起左侧侧边栏
function hideLeftbar() {
    // 获取所有类名为 'sidebar' 的元素
    var leftbars = document.querySelectorAll('.leftbar');
    for (var i = 0; i < leftbars.length; i++) {
        leftbars[i].style.left = '-110%';
    }
    var hide = document.querySelector('.hide');
    hide.style.left = '-100%';
}

// *******************************************************************************************

// 转换标签层级
function toggleTab() {
    var pages = document.querySelectorAll('.pages')
    for(let i = 0;i < arguments.length; i++) {
        pages[i].style.zIndex = arguments[i];
    }
}

// *******************************************************************************************

// 轮播图
function Carousel(container) {
    this.slideIndex = 0;
    this.timer = null;
    this.slides = document.querySelector(container).querySelectorAll('.slides img');
    this.dots = document.querySelector(container).querySelectorAll('.dot');

    this.showSlides = () => {
        clearTimeout(this.timer);
        
        if (this.slideIndex >= this.slides.length) { this.slideIndex = 0; }
        this.slides.forEach((slide, index) => {
            slide.style.transition = 'transform 0.5s ease-in-out'; // 添加平滑的过渡效果
            slide.style.transform = `translateX(-${this.slideIndex * 100}%)`;
        });
        this.dots.forEach(dot => dot.classList.remove('active'));
        if (this.dots[this.slideIndex]) {
            this.dots[this.slideIndex].classList.add('active');
        }
        
        this.slideIndex++;
        this.timer = setTimeout(this.showSlides, 20000);
    };

    this.currentSlide = (n) => {
        this.slideIndex = n - 1;
        clearTimeout(this.timer);
        this.showSlides();
    };
}