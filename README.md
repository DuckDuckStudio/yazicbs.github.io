# 鸭鸭「カモ」 的个人网站

| 页面部署 | 检查本地路径 | 检查链接有效性 |
|---------|-------------|---------------|
| [![向 GitHub Page 部署静态内容](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/deploy.yml) | [![检查本地路径](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/check-local-paths.yml/badge.svg)](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/check-local-paths.yml) | [![检查链接有效性](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/check_url_visit.yml/badge.svg)](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/check_url_visit.yml) |

| 处理自动合并标签 | 生成 Sitemap | 依赖更新 |
|-----------------|-------------|----------|
| [![处理自动合并标签](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/handle_auto_merge_labels.yml/badge.svg)](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/handle_auto_merge_labels.yml) | [![生成 Sitemap](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/generate-sitemap.yml/badge.svg)](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/generate-sitemap.yml) | [![Dependabot Updates](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/dependabot/dependabot-updates) |

| Eslint |
|--------|
| [![Eslint](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/eslint.yml/badge.svg)](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/eslint.yml) |


如标题和仓库介绍所述，这是我的个人网站，用来随便堆一些东西，顺便练练前端。

<div id="模板"></div>

## 页面模板 / 可调用脚本 / 可调用样式
我有一些自己写的页面模板，这里列出链接:  
* [某鸭的文章页面模板(小鸡习下的html页面)](https://github.com/DuckDuckStudio/Articles/blob/main/docs/某鸭的文章页面模板.html)

同时，本仓库也提供了一些可直接调用的脚本/样式:  
* 芙芙工具箱通用样式
```html
<!-- 芙芙工具箱网页通用样式 by 鸭鸭「カモ」 -->
<link rel="stylesheet" href="https://duckduckstudio.github.io/yazicbs.github.io/Tools/Fufu_Tools/css/universal.css">
```
* 一些控制台游戏
  * 猜数字
  ```html
  <!-- 控制台猜数字 by鸭鸭「カモ」 -->
  <script type="module" src="https://duckduckstudio.github.io/yazicbs.github.io/zh_cn/js/games/guess_number.mjs"></script>
  ```
    * 简略版 - 你在[这个页面](https://duckduckstudio.github.io/yazicbs.github.io/zh_cn/index.html)的控制台上可以玩到。简略版会抛个WARN，不过你不用管。
    ```html
    <!-- 控制台猜数字简略版 by鸭鸭「カモ」 -->
    <script type="module" src="https://duckduckstudio.github.io/yazicbs.github.io/zh_cn/js/games/simplified/guess_number.mjs"></script>
    ```
* 节日  
```html
<!-- 节日庆祝 by鸭鸭「カモ」 -->
<script type="module" src="https://duckduckstudio.github.io/yazicbs.github.io/zh_cn/js/Festivals.mjs"></script>
```
* 计算(离)寒暑假还剩多少秒 - [Demo](https://duckduckstudio.github.io/yazicbs.github.io/Interesting/vacation_countdown/)
```html
<!-- (离)寒暑假还有多久 by鸭鸭「カモ」 -->
<script type="module" src="https://duckduckstudio.github.io/yazicbs.github.io/Interesting/vacation_countdown/计算_中.mjs"></script>
```

以上这些主要是我自己用。

## Q&A
### 为啥要建立这个网页？
因为我之前是学校编程社团的，就自己尝试着做了一个简易的网站。  
类似于这样的：  
```html
<html>
  <head>
    <title>xxx</title>
  </head>
  <body>
    <div>
      <h1>欢迎来到某鸭的网站</h1>
      <a href="xxx">点击进入我的bilibili主页</a>
    </div>
  </body>
</html>
```
后面又想到我的账号可能可以写一个网页来推广(最初目的)，于是便有了这个网页。  
再后来，我就渐渐的把这个网页写成了个人的网页。  

### 这个网站使用什么技术架构？
很“素”，就 HTML + CSS + TS。  
[歌单播放](https://github.com/DuckDuckStudio/yazicbs.github.io/blob/main/zh_cn/js/SongList.mts)使用 [APlayer](https://github.com/DIYgod/APlayer)，歌曲音频大多来自网易云音乐。  

### 为什么不直接用 Markdown 写文章？
我已经尝试这样做了，我用 [docsify](https://docsify.js.org/) 部署了部分 Markdown 写的文章，[~~小鸡习~~](https://duckduckstudio.github.io/Articles/)的文章就是用 Markdown 写的。  
但是 [docsify](https://docsify.js.org/) 对 SEO 似乎不太友好，我后面可能会试点其他的方法。

### 为什么仓库历史看起来怪怪的？
我为了减少仓库大小，重新上传过整个仓库，丢弃了历史提交记录。
我自己本地有留着纪念，但感觉好像也只是占空间。  
刚刚 `git log --reverse` 看了下本地的，第一个提交时间是 `Sat May 14 15:16:17 2022 +0800`。

---

<p style="text-align:right">鸭鸭「カモ」</p>
