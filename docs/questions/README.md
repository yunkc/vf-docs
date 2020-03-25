# 常见问题

## json中的宽高应该设置多少
> json中顶层属性width,height为设计尺寸，按美术规格填写。

## json中怎么绑定显示组件
> 有些组件需要绑定显示组件，比如画线，可以通过设置其 source = 'this#child#child' 形式，source类型为字符串。

## 接入slider后无法画线
> 不需要点击鼠标与触摸的组件，可设置"enabled":false。 一般禁用背景以及面积较大的组件，禁用后此区域没有其他显示组件即可画线。

## 信令发送后，显示错误
> 可能引擎创建未完成，推荐在接收到信令历史消息后，延迟120毫秒尝试。

## 互动课件中 -signal 与 -kb 文件的区别
> 主要是声音的区别，可参考 http://wiki.vipkid.com.cn/pages/viewpage.action?pageId=72442337 ， http://wiki.vipkid.com.cn/pages/viewpage.action?pageId=76428181