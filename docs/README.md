---
home: true
heroImage: /logo_x3.png
heroText: 互动引擎
tagline: Welcome to vf.js
actionText: 快速上手 →
actionLink: /getstart/
features:
- title: 高效、易用
  details: 通过优化与结合最快速、轻量的渲染方案及脏刷新的应用，让每次互动体验发挥到极致。
- title: 教学+互动
  details: 聚焦在线教育，以提升互动教学课程生产力为目标，以最少的配置或代码实现互动教学资源的制作。
- title: 开源、免费
  details: 基于MIT开源协议的VF引擎，及配套脚手架与工具，可以让您自由的使用vf.js来创作或共建在线互动教学资源。  
footer: MIT Licensed | Copyright © 2020-present VIPKID EDU Front-end Technology Team.
---

### 使用过程像数 1, 2, 3 一样容易

``` js {10}
// 1.配置实例
const container = document.getElementById("vf-container");
const option = {
    bgcolor: '0xffffff',
    src: 'https://s.vipkidstatic.com/vf/IC019/index.json',
    wmode : 'transparent',
    scaleMode: 'showAll'
}
// 2.新建实例
const vf = new VF(container, option);
vf.addListener('status', (evt)=>{
    if(evt.code == 'api is ready') {
        // ...调用vf接口
    }
})
// 3.启动实例
vf.play();
```

::: tip 提示：
VF默认使用WebGL2渲染，初始化时检测到低端设备或不支持的浏览器会自动降级为Canvas2d。
:::
