# 滚动条 ScrollBar

ScrollBar 滚动条组件

> 在使用json方式时，source绑定方式为字符串形式，如 `source = "this#id"`

> 开启后，支持触摸滑动，如果不需要显示滚动条可以设置 `visible = false`

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| thumb | string |  | 滚动条图 |
| track | string |  | 滚动条背景图，一般无需设置 |
| width | number,string |  | 滚动条宽度 |
| height | number,string | | 滚动条高度 |
| vertical | boolean | true | 设置滚动条方向 |
| source | string|custom | true | 设置要绑定的容器 |

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
|  CHANGE | value发生改变时 | event,target,value,lastValue |
|  CHANGEING | value持续改变时 | event,target,true|false |

## 样式

> [基础样式](/handbook/style.html#样式)


## 定义
``` typescript
const scrollBar: gui.ScrollBar = {
    name: "scrollBar",
    type: guiType.ScrollBar,
    thumb: Asset.thumb,
    width: 20,
    height: 100,
    vertical: true,
};
```

## 使用
``` typescript
scene:{
    name: "scene",
    type: "custom",
    children: [
        {
            "id": 1,
            "libId": "001",
            "name": "custom - content",
            "x": 0,
            "y": 0,
            "width":300,
            "height":40
        },
        {
            "id": 2,
            "libId": "scrollBar",
            "name": "scrollBar",
            "x": 20,
            "y": 0,
            "source":"this#1"
        }
    ]
}
```

## 示例

> 可点击左上角菜单，查看其他定义类

<iframe
     src="https://codesandbox.io/embed/scrollbar-kdoqy?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="scrollbar"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
