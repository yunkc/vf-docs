# 设备陀螺仪


Deviceorientation 陀螺仪信息

> 陀螺仪需要在点击事件中触发

> 陀螺仪的访问必须为HTTPS

## 插件地址

> [//s.vipkidstatic.com/vf/plugin/device/0.0.4.js]()

## 类名
> Deviceorientation 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| WarnedUnsupported | boolean | true | 如果不支持 Deviceorientation，是否应发出警告。 |
| unlocked | boolean | true | 获取是否已在设备上解锁 |
| useCustomUnlockedButton | boolean | true | 使用自定义解锁按钮。 |


## 方法

| 方法名 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- | --- |
| start | 无 | 无 | 开始监听，如果显示被添加到舞台，会自动触发无需调用 |
| stop | 无 | 无 | 停止监听 |


## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| deviceorientation | 设备方向事件 | EventData |

## 事件回调 EventData

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| lon | number | 无 | 水平坐标。初始时的位置为 0 [0, 360] |
| lat | number | 无 | 垂直坐标。当手机竖直时，lat 为 0  [-270, 90] |
| offsetLon | number | 无 | 相对上一次回调时，水平坐标的偏移量 |
| offsetLat | number | 无 | 相对上一次回调时，垂直坐标的偏移量 |
| leftRotate | number | 无 | 向左旋转偏移量 [-180, 180] |
| rightRotate |number | 无 | 向右旋转偏移量 [-180, 180] |
| leftSlant | number | 无 | 向左倾斜偏移量 [-90, 90] |
| rightSlant | number | 无 | 向右倾斜偏移量 [-90, 90] |
| isLeft | boolean | 无 | 是否向左倾斜 |
| isRight | boolean | 无 | 是否向右倾斜 |
| forwardSlant | number | 无 | 向前倾斜偏移量 [-180, 180] |
| backwardSlant | number | 无 | 向后倾斜偏移量 [-180, 180] |
| isForward | boolean | 无 | 是否向前倾斜 |
| isBackward | boolean | 无 | 是否向后倾斜 |

## 样式

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |



> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const assets: Assets = {
  Deviceorientation: {
    type: AssetType.js,
    url: "https://s.vipkidstatic.com/vf/plugin/device/0.0.4.js",
    name: "Deviceorientation"
  }
}


const deviceorientation = {
  type: "Deviceorientation"
};

```

## 使用

```
  @this = {
    function onDeviceorientation($eventData) {
        trace($eventData);
    };
    this.on("Added", () => {
      this#device.on('deviceorientation',this.onDeviceorientation);
    });
```

## 示例

> 示例使用的编程方式，在vf中，通过配置方式会有写法差异

<iframe src="https://codesandbox.io/embed/deviceexample-eprn9?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="deviceExample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>