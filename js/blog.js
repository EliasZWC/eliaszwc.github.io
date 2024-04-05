// 博客列表#渲染博客列表
function renderBlogList(blogs) {
    var blogList = document.querySelector('#blogList');
    blogList.innerHTML = ''; // 清空当前的列表
    var localPath = "./blog/";
    var imgPath = "https://cdn.jsdelivr.net/gh/eliaszwc/eliaszwc.github.io/pages/blog/blogCover/";
    var fragment = document.createDocumentFragment(); // 使用文档片段减少DOM操作

    blogs.forEach(function(blog) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var div = document.createElement("div"); // 最外层div
        var tagDiv = document.createElement("div"); // 标签承载div
        var img = document.createElement("img");
        var b = document.createElement("b");
        var p = document.createElement("p");

        div.classList.add("blogInfo"); // 命名外层div
        tagDiv.classList.add("tagDiv"); // 命名标签承载div

        a.href = `${localPath}${blog.filename}`;
        img.src = `${imgPath}${blog.img}`;
        img.alt = blog.title; // 使用博客标题作为图片的alt文本
        b.textContent = blog.title; // 加入博客标题
        p.textContent = blog.intro; // 加入博客简介
        blog.tag.forEach(function(item) { // 加入博客标签
            var tags = document.createElement("div"); // 创建tag的div元素
            tags.classList.add("tags");
            tags.textContent = item;
            tagDiv.appendChild(tags);
        });
        
        div.appendChild(b);
        div.appendChild(p);
        div.appendChild(tagDiv);
        a.appendChild(img);
        a.appendChild(div);
        li.appendChild(a);
        fragment.appendChild(li); // 先将元素添加到文档片段中
    });

    blogList.appendChild(fragment); // 一次性将所有元素添加到DOM中
}

// *******************************************************************************************

// 筛选器#初始化标签下拉列表
function initTagOptions(subject) {
    const subcategory1 = document.getElementById('subcategory1');
    const subcategory2 = document.getElementById('subcategory2');
    const subcategory3 = document.getElementById('subcategory3');

    // 如果没有选择学科（题主提到的“All Subjects”），则重置为初始状态
    if (!subject || !tags[subject]) { // subject为空或者tags没有对应的subject
        subcategory1.innerHTML = `<option value="">Subcategory1</option>`;
        subcategory2.innerHTML = `<option value="">Subcategory2</option>`;
        subcategory3.innerHTML = `<option value="">Subcategory3</option>`;
        return; // 直接返回，不执行后面的代码
    }

    // 清空现有选项并添加一个“不选择”的默认选项
    subcategory1.innerHTML = `<option value="">-${tags[subject][0].name}-</option>`;
    subcategory2.innerHTML = `<option value="">-${tags[subject][1].name}-</option>`;
    subcategory3.innerHTML = `<option value="">-${tags[subject][2].name}-</option>`;

    if (subject && tags[subject]) { // 检查subject是否存在
        tags[subject][0].tags.forEach(tag => {
            const option = new Option(tag, tag);
            subcategory1.add(option); // 确保是添加到正确的下拉列表
        });
        tags[subject][1].tags.forEach(tag => {
            const option = new Option(tag, tag);
            subcategory2.add(option);
        });
        tags[subject][2].tags.forEach(tag => {
            const option = new Option(tag, tag);
            subcategory3.add(option);
        });
    }
}

// 筛选器#筛选并渲染文章列表
function filterBlogs() {
    const selectedSubject = document.getElementById('subjectSelect').value;
    let filteredBlogs;

    if (selectedSubject) {
        const selectedTag1 = document.getElementById('subcategory1').value;
        const selectedTag2 = document.getElementById('subcategory2').value;
        const selectedTag3 = document.getElementById('subcategory3').value;
        filteredBlogs = blogData.blogs.filter(blog =>
            (!selectedSubject || blog.subject === selectedSubject) &&
            (!selectedTag1 || blog.tag.includes(selectedTag1)) &&
            (!selectedTag2 || blog.tag.includes(selectedTag2)) &&
            (!selectedTag3 || blog.tag.includes(selectedTag3))
        );
    } else {
        // 如果没有选择学科，显示所有博客
        filteredBlogs = blogData.blogs;
    }

    renderBlogList(filteredBlogs);
}

// 筛选器#初始化页面
document.addEventListener('DOMContentLoaded', function() {
    renderBlogList(blogData.blogs); // 初始时展示所有博客
    const subjectSelect = document.getElementById('subjectSelect');
    subjectSelect.addEventListener('change', function() {
        initTagOptions(this.value); // 'this.value'是当前选中的学科
    });
    initTagOptions(subjectSelect.value);
});

// *******************************************************************************************

// 搜索器
function searchClick() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const searchedBlogs = searchBlogs(searchTerm);
    renderBlogList(searchedBlogs);
}
function searchBlogs(searchTerm) {
    if (searchTerm === '') {
        return blogData.blogs; // 如果搜索词为空返回所有博客文章
    }
    return blogData.blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.tag.some(tag => tag.toLowerCase().includes(searchTerm)) || // 注意这里应为 blog.tags
        blog.intro.toLowerCase().includes(searchTerm)
    );
}