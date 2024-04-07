// 轮播图
function carousel() {
    let slideIndex = 0;
    showSlides(slideIndex);

    function showSlides(n) {
        const slides = document.querySelectorAll("#slides img");
        const dots = document.querySelectorAll(".dot");
        const carouselWidth = document.getElementById('carousel').offsetWidth;
        const slideWidth = slides[0].offsetWidth + (window.innerWidth * 0.01); // 图片宽度加上间距

        // 计算应该移动的距离，使得图片居中
        const offset = (carouselWidth - slideWidth) / 2 - (slideWidth * n);

        // 设置slides的transform属性
        document.getElementById("slides").style.transform = `translateX(${offset}px)`;

        // 更新导航点状态
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        if(dots[slideIndex]) { // 检查是否存在对应的dot，防止越界
            dots[slideIndex].className += " active";
        }
    }

    window.moveSlide = function (n) {
        slideIndex = n;
        showSlides(slideIndex);
    }

    // 自动调整轮播图大小和位置
    window.addEventListener('resize', function() {
        showSlides(slideIndex);
    });
}

carousel();
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