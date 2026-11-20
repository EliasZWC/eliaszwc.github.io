# 个人网站（Elias Zhang）

单页入口 + 四个子页，纯黑，无顶部导航，无博客。封面是一枚旋转的克莱因瓶。

静态站点，没有框架和构建依赖；只有知识页和它的 markdown 之间有一个小脚本。

## 怎么打开

双击 `index.html`。子页只能从首页进入，子页左上角是 `← Home`。页面之间带淡入淡出。

## 目录

| 路径 | 说明 |
| --- | --- |
| `index.html` | 首页：封面、关于、研究、知识、工具、联系 |
| `research.html` | 研究：11 篇论文，最新发表的在前 |
| `knowledge.html` | 知识：四门类 20 学科 146 分支，由 markdown 生成 |
| `tools.html` | 工具：Livolog、Scholarius、Termetron |
| `about.html` | 关于：简介、事实、书单 |
| `contact.html` | 联系：学术邮箱、个人邮箱、表单 |
| `design.html` | 方案说明 |
| `content/knowledge.md` | 知识地图的唯一来源 |
| `build-knowledge.mjs` | 读取上面的 md，重写 `knowledge.html` 里的区块 |
| `js/i18n.js` 四语词典与切换逻辑
| `css/` `js/` `assets/` `fonts/` | 样式、脚本、标志、字体 |
| `shots/` `compare/` | 逐页截图与改版对照 |

## 改知识地图

编辑 `content/knowledge.md`，然后：

```
node build-knowledge.mjs
```

标题级别就是分类级别：一级是门类，二级是学科，三级是分支，四级是子分支。脚本会重算首页和知识页上的学科数与分支数。

## 字体

- 英文标题：Instrument Serif
- 封面名字：Saira Stencil One（子集，只含 Elias Zhang 这几个字母）
- 正文：Inter；等宽：JetBrains Mono
- 中文：现在用 ZCOOL 小薇（OFL，已子集到站内用字）

中文现在用汉仪金陵刻经：从本机安装的字体子集化出 `fonts/jinling-kejing.woff2`（129 KB，976 字），随站自托管。这是商业字体，若仓库公开，请确认你的授权允许网页嵌入；不想公开就把这个 woff2 移出仓库，改用 local() 命中本机安装的版本。

## 已知待办

1. ORCID、小红书、Hugging Face 的链接现在指向首页，需要真实地址
3. 双语：两份页面还是同页切换

## 语言

右上角的圆球图标打开语言菜单：English、中文、Français、日本語。选择存在 localStorage，刷新后保持。

文案在 `js/i18n.js` 里，键是英文原文，缺翻译时自动回退英文。已翻译：标题、导航、按钮、说明文字、工具与研究条目描述、页脚、题词。仍保留英文的：论文标题（原发表语言）与知识页 146 个分支名（分类术语）。
