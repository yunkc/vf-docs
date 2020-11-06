# svg渐变组件 svgPasition

SVGPasition 可以实现SVG渐变

## 库信息
库地址:
> https://s.vipkidstatic.com/vf/plugin/SVGPasition/0.0.1.js

类名
> SVGPasition 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| from |  string | '' | 起始svg |
| to |  string | '' | 终止svg |
| duration |  number | 1000 | 持续时间 |
| mustSvgData |  boolean | false | 是否update回调参数为svg格式 (如果与pathGraphics混合使用则推荐false，解析效率更高) |
| easing |  | vf.gui.Easing.Linear.None | 渐变函数 |
| onStart | function |  | 开始播放回调 |
| onUpdata | function |  | 播放帧回调（当前path参数） |
| onEnd | function |  | 结束播放回调 |

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| onStart |  |  |
| onUpdata | 帧刷新 | path |
| onEnd |  |  |

## 方法

| 方法名  | 说明 | 参数 |
| --- | --- | --- | 
| play | 动画开始 | () |
| release | 销毁 | () |

## 定义
``` typescript
const SVGPasition: gui.SVGPasition = {
    name: "SVGPasition",
    type: guiType.SVGPasition,
};
```

## 使用
``` typescript
{
id: "SVGPasition",
libId: ComponentId.SVGPasition,
}
```

## 示例
 <iframe src="https://codesandbox.io/embed/svgpasitionexample-609y8?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="svgPasitionExample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>