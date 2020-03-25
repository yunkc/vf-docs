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
    type: guiType.slider,
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

> 示例使用的编程方式，在vf中，通过配置方式会有写法差异

> `运行 ⌘ + Enter` 查看修改后的效果

> [弹出](https://vipkid-edu.github.io/vf-gui-docs/play/#example/TestSlider)

<iframe src="https://vipkid-edu.github.io/vf-gui-docs/play/#example/TestSlider" height="500" width="100%"></iframe>