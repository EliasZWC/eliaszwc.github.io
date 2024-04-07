
// 渲染器#渲染博客列表
function renderresourceList(resources) {
    var resourceList = document.querySelector('#resourceList');
    resourceList.innerHTML = ''; // 清空当前的列表
    var localPath = "./resource/resourcePage/";
    var imgPath = "https://cdn.jsdelivr.net/gh/eliaszwc/eliaszwc.github.io/pages/resource/resourceCover/";
    var fragment = document.createDocumentFragment(); // 使用文档片段减少DOM操作

    resources.forEach(function(resource) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var div = document.createElement("div"); // 最外层div
        var tagDiv = document.createElement("div"); // 标签承载div
        var img = document.createElement("img");
        var b = document.createElement("b");
        var p = document.createElement("p");

        div.classList.add("resourceInfo"); // 命名外层div
        tagDiv.classList.add("tagDiv"); // 命名标签承载div

        a.href = `${localPath}${resource.filename}`;
        img.src = `${imgPath}${resource.img}`;
        img.alt = resource.title; // 使用资源标题作为图片的alt文本
        b.textContent = resource.title; // 加入资源标题
        p.textContent = resource.intro; // 加入资源简介
        resource.tag.forEach(function(item) { // 加入资源标签
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

    resourceList.appendChild(fragment); // 一次性将所有元素添加到DOM中
}

// 博客列表#初始渲染全部列表
renderresourceList(resourceData.resources);