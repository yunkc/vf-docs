# 笔画教学 Tracing


Tracing 可引导用户学习写字或字母

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| width |number | 0 | 组件宽度 |
| height |number | 0 | 组件高度 |
| mode |number | 0 | 设置模式（0-笔画检测  1-教学模式  2-自动播放  3-严格模式  4-填充模式） |
| traceSprite |string,number,Texture |  | 文字图|
| renderBgSprite |string,number,Texture |  | 渲染背景图，设置后渲染模式为镂空模式|
| tracePoints |point[][] |  | 文字笔画轨迹点,二维数组|
| debug |boolean|  | 开启debug|
| lineWidth |number| 10 | 笔画宽度|
| lineColor |number| 0xff0000 | 笔画颜色|
| lineOpacity |number |  | 笔画透明度|
| lineTexture |string | number |  | 笔触位图|
| precision |number| 20 | 检测精度|

## 方法
| 方法名 | 参数 | 返回值 | 说明 |
| setData | data:string |  | 设置笔画，字符串类型，一般用于笔画的双端同步|

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| CHANGE | 完成一个笔画绘制 | target,data |
| COMPLETE | 全部绘制完成(填充模式完成每个点都会触发) | target,data |

## 样式

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |



> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const tracing: gui.Tracing = {
  type: guiType.Tracing,
  debug: true,
  traceSprite: AssetId.fan,
  renderBgSprite: AssetId.maskBg,
  tracePoints: tracePoints,
  lineTexture: AssetId.maskBg,
  mode: 0
};
```

## 使用
``` typescript
      {
      id: "tracing1",
      libId: Ids.tracing,
      x: 0,
      y: 100,
      width: 260,
      height: 260
    }
```

## 示例

> 示例使用的编程方式，在vf中，通过配置方式会有写法差异

> `运行 ⌘ + Enter` 查看修改后的效果

> [弹出](https://vipkid-edu.github.io/vf-gui/play/#example/TestTracing)

<iframe
     src="https://codesandbox.io/embed/tracingexample-8m5ry?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="tracingExample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>