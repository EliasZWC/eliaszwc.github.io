1.0.1版本更新如下

# 一、项目结构更新

## （一）pages目录

1. 将blog目录下的文件分到了不同子目录，blogCover用于储存博客文章封面，blogJS用于储存博客JS文件，blogImg作为博客图床，blogPage用于储存转换为html文件的md博客文章图片
2. 增加了Resource页、About页和Contact页

## （二）images目录

1. 删除了images目录的scienceCover目录
2. 将images目录的顶层图片重新整理为background、header、icon、link、word等多个子目录
3. 删除了无用的filterBoard.png、right_black.png、rightButton.png
4. 将知识导图的源文件复制了一份到scienceBranch目录

## （三）js目录

1.

# 二、HTML更新

1. 删除了“知识”页面尾部的轮播图HTML结构
2. 更改网页子标签为Home、Knowledge、Resource、About、Contact五个部分，并修改侧边栏介绍
3. 使用cdn加速图片资源访问路径
4. 增加了页脚
5. 增加了关于页
6. 增加了联系页

# 三、CSS更新

1. 删除了“知识”页面尾部的轮播图CSS修饰
2. 通过更改CSS修饰，将“知识”页面“人类知识体系”部分修改为黑底白字风格
3. 增加了关于页
4. 增加了博客文章目录CSS修饰

# 四、JavaScript更新

1. 联系页使用了EmailJS服务设置发送
2. 博客文章增加了目录创建与渲染功能