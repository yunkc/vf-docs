---
home: true
heroImage: logo_x3.png
heroText: 互动引擎
tagline: Welcome to vf.js
actionText: 快速上手 →
actionLink: /getstart/introduction
features:
- title: 高效、易用
  details: 通过优化与结合最快速、轻量的渲染方案及脏刷新的应用，让每次互动体验发挥到极致。
- title: 教学+互动
  details: 聚焦在线教育，以提升互动教学课程生产力为目标，以最少的配置或代码呈现互动教学场景。
- title: 开源、免费
  details: 基于MIT开源协议的VF引擎，及配套脚手架与工具，可以让您自由的使用vf.js来创作或共建在线互动教学资源。  
footer: MIT Licensed | Copyright © 2020-present VIPKID EDU Front-end Technology Team.
---

### 安装

### NPM
```
  npm i @vf.js/launcher --save-dev
```

#### CDN Script
```
<script src="http://unpkg.com/@vf.js/launcher/dist/launcher.min.js"></script>
```

### 使用过程像数 1, 2, 3 一样容易

``` js {10}

// 1. ES6方式引入，CDN Script方式不需要写
import {createVF} from '@vf.js/launcher';

// 2.设置插入页面的div容器
createVF({container:document.getElementById("vf-container")},player=>{
  // 3.启动实例
  vf.play('data.json');
});

```

::: warning 注意
VF 引擎是面向`使用者`与`编辑器`友好的，对于互动场景开发者建议直接使用 [vf-cli](/getstart/introduction.md) 通过 typescript 来编写交互场景。
:::
