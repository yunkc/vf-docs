# 连线 ConnectLine

ConnectLine 连线，可以作为连线题,通过简单绑定源组件与目标组件，即可完成连线，无需关心中间过程。

> 连线可能需要绑定其他组件，如果是VFX中，可以通过设置 `this#connectLine.source = 'this#component';` , 注意值为字符串，查找的路径是为当前组件的父级。

> autoPlay = true时，组件在设置source,target,sourcePostion,targetPostion后自动触发画线，线条从source->target.

> autoPlay = false时，设置source,target,sourcePostion,targetPostion后不会触发画线，需调用 play.

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| play | 1,2 | 1 |  设置`1`触发画线，线条从source->target。设置`2`线条从target->source  |
| autoPlay | boolean | true | 设置自动画线 |
| source | DisplayObject,string |  | 设置源 |
| sourcePostion | LinePostion | | 设置源位置或偏移坐标 |
| target | DisplayObject,string |  | 设置目标 |
| targetPostion | LinePostion | | 设置目标位置或偏移坐标 |
| lineColor | number | 0| 设置线条颜色 |
| lineWidth | number | 1 | 设置线条宽度 |
| isAnimation | boolean | false | 设置触发连线时，是否有动画 |
| isClear | boolean | | 设置清除画线,设置true|false都会执行清除 |

> 类型 LinePostion = "leftTop" | "centerTop" | "rightTop" | "leftCenter" | "center" | "rightCenter" | "leftBottom" | "centerBottom" | "rightBottom" | number[]

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
|  COMPLETE | 画线完成时 | event,target |

## 样式

> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const ConnectLine: gui.ConnectLine = {
    name: "ConnectLine",
    type: guiType.ConnectLine,
    autoPlay: false,
    lineColor: 0x4FD164,
    lineWidth: 5,
    isAnimation: true,
    sourcePostion: [195,59],
    targetPostion: [7, 50]
};
```

## 使用
``` typescript
{
    id: "connectLine1",
    libId: ComponentId.ConnectLine
}
```

## VFX 
``` typescript
this#connectLine1.source = 'this#optionsImg#img';
this#connectLine1.target = 'this#optionsText#txt';
this#connectLine1.isAnimation = $isAnimation;
if($type == 'img'){
    this#connectLine1.play = 2;
}
else{
    this#connectLine1.play = 1;
};
```


## 示例

> 可点击左上角菜单，查看其他定义类

<iframe
     src="https://codesandbox.io/embed/connectline-2rs7e?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="connectline"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>