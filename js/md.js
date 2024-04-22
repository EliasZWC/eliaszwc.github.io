// 目录滑动
function tocCreater() {
    var rightbar = document.querySelector('#rightbar');
    var headerBottom = document.querySelector('#header').getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.scrollHeight;
    var scrollPosition = window.scrollY;

    if (headerBottom <= 0) {
        if (scrollPosition + windowHeight >= documentHeight - 15 * windowHeight / 100) {
            rightbar.style.position = 'fixed';
            rightbar.style.bottom = '50vh';
            rightbar.style.margin = '-48vh 0 0 76vw';
        } else {
            rightbar.style.position = 'fixed';
            rightbar.style.bottom = 'auto';
            rightbar.style.margin = '-48vh 0 0 76vw';
        }
    } else {
        rightbar.style.position = 'absolute';
        rightbar.style.bottom = 'auto';
        rightbar.style.margin = '2vh 0 0 76vw';
    }
}
window.addEventListener('load', tocCreater); // 加载时初始化
window.addEventListener('scroll', tocCreater); // 滚动时监听
// *******************************************************************************************
// 渲染目录
function tocRender() {
    // 选择所有的标题元素
    var headerElements = document.querySelectorAll('h2, h3, h4, h5, h6');
    var tocContainer = document.createElement('ul');

    // 循环遍历所有的标题元素
    headerElements.forEach(function(headerElement, index) {
        // 创建一个 li 元素
        var listItem = document.createElement('li');
        // 创建锚点
        var anchor = document.createElement('a');
        anchor.textContent = headerElement.textContent;
        // 生成一个唯一的ID并将其分配给锚点
        var uniqueID = 'toc-anchor-' + index; // 可以使用任何方法生成唯一ID
        anchor.href = '#' + uniqueID;
        // 将锚点添加到 li 元素中
        listItem.appendChild(anchor);
        // 为标题元素赋予相同的唯一ID
        headerElement.id = uniqueID;

        // 为列表项添加相应的类名，根据其标签名称
        var tagName = headerElement.tagName.toLowerCase();
        var className = 'toc-' + tagName;
        listItem.classList.add(className);

        // 将 li 元素添加到目录容器中
        tocContainer.appendChild(listItem);
    });

    // 将目录容器添加到页面中合适的位置
    var tocContainerElement = document.querySelector('#toc');
    tocContainerElement.appendChild(tocContainer);
}
window.addEventListener('load', tocRender);