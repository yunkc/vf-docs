---
home: true
heroImage: logo_x3.png
heroText: 互动引擎
tagline: Welcome to vf.js
actionText: 快速上手 →
actionLink: /getstart/introduction
features:
- title: 高性能、非常快
  details: 为互动教学倾力打造, 使用它可快速创建最富表现力画面、多端便捷交互与运行时极致效率!
- title: 教学 + 互动
  details: 聚焦在线教育，以最优的使用流程和极简的操作步骤提升互动课程生产的品质&效率。
- title: 灵活、易用
  details: 以JSON语言描述和跨平台SDK支持, 让各教育机构都能直接使用或快速的集成到自身系统中。
footer: MIT Licensed | Copyright © 2020-present VIPKID EDU Front-end Technology Team.
---

### 安装

### NPM
```
  npm i @vf.js/launcher
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
  player.play('data.json');
});

```

::: warning 注意
VF 引擎是面向`使用者`与`编辑器`友好的，对于互动场景开发者建议直接使用 [vf-cli](/getstart/introduction.md) 通过 typescript 来编写交互场景。
:::
