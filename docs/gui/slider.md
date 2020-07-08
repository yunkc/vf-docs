# 滑动条 Slider


Slider 滑动条/进度条

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| maxValue | number | 100 | 设置最大值 |
| minValue | number | 0 | 设置最小值 |
| thumb | number,string |  | 设置滑动条背景图片 |
| track | number,string |  | 设置滑动条手柄图片 |
| tracklight | number,string |  | 设置滑动条进度图片 |
| value | number,string |  | 设置不可用时图片 |
| vertical | boolean | false | 设置设置垂直，设置后需要调整宽度与高度 |


## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
|  CHANGE | value发生改变时 | event,target,value,lastValue |
|  CHANGEING | value持续改变时 | event,target,true|false |

## 样式

> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const slider: gui.Slider = {
    name: "slider",
    type: guiType.Slider,
    thumb: Asset.thumb,
    track: Asset.track,
    tracklight: Asset.tracklight,
};
```

## 使用
``` typescript
{
id: "slider",
libId: ComponentId.slider,
vertical: false,
style: {
    width: 300,
    height: 10
}
}
```


## 示例

> 可点击左上角菜单，查看其他定义类

<iframe
     src="https://codesandbox.io/embed/slider-oru5t?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="slider"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>