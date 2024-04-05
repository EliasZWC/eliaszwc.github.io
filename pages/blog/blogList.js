// 信息储存#分类储存
const tags = {
    Literature: [
        { name: "Category", tags: [] },
        { name: "Genre", tags: [] },
        { name: "Country", tags: [] }
    ],
    History: [
        { name: "Era", tags: ["Prehistory", "Ancient", "Modern", "Contemporary"] },
        { name: "Region", tags: ["Africa", "America", "Asia", "Europe"] },
        { name: "Country", tags: ["Britain", "China", "Egypt", "France", "Germany", "India", "Iran", "Japan", "Russia", "USA"] }
    ],
    IT: [
        { name: "Direction", tags: ["Algorithm", "Android", "Security", "Test", "Web"] },
        { name: "Language", tags: ["Bash", "C", "C++", "CSS", "Go", "HTML", "Java", "JavaScript", "Kotlin", "Python", "Shell", "SQL", "XML"] },
        { name: "System", tags: ["Git", "Linux", "Windows"] }
    ],
};

// *******************************************************************************************

// 信息储存#博客信息
/* 代码博客规范是：
    {
        "title": "文章标题";
        "subject": "文章学科"
        "tag": ["文章学科", "博客方向", "博客语言", "博客系统"],
        "img": "封面图片",
        "intro": "文章简介",
        "filename": "html文件名"
    }
 */
var blogData = {
    "blogs": [
        {
            "title": "【解决】Github Pages搭建的网页访问加载缓慢",
            "subject": "IT",
            "tag": ["IT", "Web"],
            "img": "github.png",
            "intro": "使用Cloudflare的CDN服务加速网站访问进程。",
            "filename": "solve-003.html"
        },
        {
            "title": "【技术】Github环境配置指南",
            "subject": "IT",
            "tag": ["IT", "Bash", "Git"],
            "img": "github.png",
            "intro": "初次使用Github的环境配置步骤。",
            "filename": "bash-001.html"
        },
        {
            "title": "【笔记】Kotlin语言（四）——方法",
            "subject": "IT",
            "tag": ["IT", "Kotlin"],
            "img": "kotlin.png",
            "intro": "Kotlin语言笔记第四部分，认识Kotlin方法在普通类、静态类、伴生类中的声明；认识Kotlin方法参数的具体几种类型。",
            "filename": "kt-004.html"
        },
        {
            "title": "【笔记】Kotlin语言（三）——数据容器",
            "subject": "IT",
            "tag": ["IT", "Kotlin"],
            "img": "kotlin.png",
            "intro": "Kotlin语言笔记第三部分，认识数组与集合这两个Kotlin数据容器，了解其定义与其他知识。",
            "filename": "kt-003.html"
        },
        {
            "title": "【笔记】Kotlin语言（二）——数据类型",
            "subject": "IT",
            "tag": ["IT", "Kotlin"],
            "img": "kotlin.png",
            "intro": "Kotlin语言笔记第二部分，认识Kotlin数据类型，掌握数据类型的强制转换与数学运算。",
            "filename": "kt-002.html"
        },
        {
            "title": "【笔记】Kotlin语言（一）——认识Kotlin",
            "subject": "IT",
            "tag": ["IT", "Kotlin"],
            "img": "kotlin.png",
            "intro": "Kotlin语言笔记第一部分，认识Kotlin语言与预计的学习路径。",
            "filename": "kt-001.html"
        },
        {
            "title": "【笔记】MySQL数据库（三）——数据定义语言DDL",
            "subject": "IT",
            "tag": ["IT", "SQL"],
            "img": "sql.png",
            "intro": "MySQL数据库笔记第三部分，认识数据定义语言DDL，熟悉DDL的数据库操作与表结构操作。",
            "filename": "sql-004.html"
        },
        {
            "title": "【笔记】MySQL数据库（二）——数据类型",
            "subject": "IT",
            "tag": ["IT", "SQL"],
            "img": "sql.png",
            "intro": "MySQL数据库笔记第二部分，认识SQL语言中的各种数据类型。",
            "filename": "sql-003.html"
        },
        {
            "title": "【笔记】MySQL数据库（一）——认识与环境搭建",
            "subject": "IT",
            "tag": ["IT", "SQL"],
            "img": "sql.png",
            "intro": "MySQL数据库笔记第一部分，认识SQL语言语法，了解数据库的类型，安装MySQL与其图形管理工具Navicat。",
            "filename": "sql-002.html"
        },
        {
            "title": "【笔记】MySQL8.3.0社区版安装指南",
            "subject": "IT",
            "tag": ["IT", "SQL", "Windows"],
            "img": "mysql.png",
            "intro": "MySQL8.3.0社区版在Windows操作系统下的具体安装步骤。",
            "filename": "sql-001.html"
        },
        {
            "title": "【技术】基于Github Pages搭建个人博客静态网页",
            "subject": "IT",
            "tag": ["IT", "Web", "HTML", "Git"],
            "img": "github.png",
            "intro": "利用Github Pages来通过托管项目搭建静态网页。",
            "filename": "web-001.html"
        },
        {
            "title": "【技术】Python基于Chrome实现网页自动登入网址",
            "subject": "IT",
            "tag": ["IT", "Test", "Python", "Windows"],
            "img": "python.png",
            "intro": "使用Python第三方库，通过获取注册表对象使用Chrome驱动，基于webbrowser库自动登入网址。",
            "filename": "test-001.html"
        },
        {
            "title": "【笔记】C++语言基础（十）——结构体",
            "subject": "IT",
            "tag": ["IT", "C++"],
            "img": "c++.png",
            "intro": "C++语言基础笔记第十部分，了解结构体定义方式，使用结构体的指针、数组和嵌套。",
            "filename": "cpp-010.html"
        },
        {
            "title": "【笔记】C++语言基础（九）——指针",
            "subject": "IT",
            "tag": ["IT", "C++"],
            "img": "c++.png",
            "intro": "C++语言基础笔记第九部分，了解指针定义方式，认识特殊指针的各种类型，探究指针与数组、指针与函数的关系。",
            "filename": "cpp-009.html"
        },
        {
            "title": "【笔记】C++语言基础（八）——函数",
            "subject": "IT",
            "tag": ["IT", "C++"],
            "img": "c++.png",
            "intro": "C++语言基础笔记第八部分，了解函数定义方式、函数值传递方式与常见的函数形式。",
            "filename": "cpp-008.html"
        },
        {
            "title": "【笔记】C++语言基础（七）——Array数组",
            "subject": "IT",
            "tag": ["IT", "C++"],
            "img": "c++.png",
            "intro": "C++语言基础笔记第七部分，以维数划分，认识数组的定义方式与基本的算法。",
            "filename": "cpp-007.html"
        },
        {
            "title": "【笔记】C++语言基础（六）——String字符串",
            "subject": "IT",
            "tag": ["IT", "C++"],
            "img": "c++.png",
            "intro": "C++语言基础笔记第六部分，掌握String容器的初始化与String字符串常用的操作，认识String的成员函数。",
            "filename": "cpp-006.html"
        },
        {
            "title": "【笔记】C++语言基础（五）——Vector向量",
            "subject": "IT",
            "tag": ["IT", "C++"],
            "img": "c++.png",
            "intro": "C++语言基础笔记第五部分，掌握Vector向量的初始化，以及了解Vector向量常用的成员函数。",
            "filename": "cpp-005.html"
        },
        {
            "title": "【笔记】C++语言基础（四）——流程控制",
            "subject": "IT",
            "tag": ["IT", "C++"],
            "img": "c++.png",
            "intro": "C++语言基础笔记第四部分，了解作用域与块的概念，并在了解语句分类的基础上认识条件、循环、跳转三大语句。",
            "filename": "cpp-003.html"
        },
        {
            "title": "【笔记】C++语言基础（三）——运算符",
            "subject": "IT",
            "tag": ["IT", "C++"],
            "img": "c++.png",
            "intro": "C++语言基础笔记第三部分，认识各类运算符与具体分类，以及运算符的优先级别。",
            "filename": "cpp-003.html"
        },
        {
            "title": "【笔记】C++语言基础（二）——数据类型",
            "subject": "IT",
            "tag": ["IT", "C++"],
            "img": "c++.png",
            "intro": "C++语言基础笔记第二部分，认识基本数据类型，以及常量与变量的定义。",
            "filename": "cpp-002.html"
        },
        {
            "title": "【笔记】C++语言基础（一）——项目与程序结构",
            "subject": "IT",
            "tag": ["IT", "C++"],
            "img": "c++.png",
            "intro": "C++语言基础笔记第一部分，初始化与认识项目与程序结构。",
            "filename": "cpp-001.html"
        },
        {
            "title": "【解决】Ubuntu环境下更换网络下载源",
            "subject": "IT",
            "tag": ["IT", "Bash"," Linux"],
            "img": "ubuntu.png",
            "intro": "在Ubuntu环境下使用Vim编辑pip.conf文件来改变pip下载源。",
            "filename": "solve-001.html"
        },
        {
            "title": "【解决】Android Studio建立apk报错Execution failed for task ':app:checkDebugAarMetadata'",
            "subject": "IT",
            "tag": ["IT", "Android", "Kotlin", "Windows"],
            "img": "android.png",
            "intro": "Kotlin语言环境下解决Android Studio建立apk报错':app:checkDebugAarMetadata'问题。",
            "filename": "solve-002.html"
        }
    ]
};