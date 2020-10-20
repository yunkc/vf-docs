# 弹出框 alert

Alert 弹出框组件，支持自定义样式(图片或颜色值)


## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| title | string |  | 弹出框标题 |
| content | string |  | 弹出框内容 |
| icon | number , string , Texture |  | 弹出框图标 |
| buttons | string[] |  | 弹出框按钮数组 |
| imgButtons | ButtonInfo{btnNormal,btnHover,btnPressed,text}[] |  | 弹出框图形按钮数组 |
| autoShow | boolean | false | 弹出框自动显示 |
| textAlign | string | left | 文本对齐方式  left-左对齐   center-居中对齐 |
| duration | number | 0 | 弹出框持续时间，到时间后自动关闭 |
| autoRelease | boolean | false | 弹出框关闭时是否自动释放 |
| buttonWidth | number | 80 | 弹出框中按钮默认宽度 |
| buttonHeight | number | 30 | 弹出框中按钮默认高度 |
| maskColor | number | 0 | 弹出框背景遮罩层颜色 |
| maskOpacity | number | 0 | 弹出框背景遮罩层透明度 |
| background | number , string , Texture |  | 弹出框自定义背景框图片|
| btnNormal | number , string , Texture |  | 弹出框自定义normal状态按钮图片|
| btnHover | number , string , Texture |  | 弹出框自定义hover状态按钮图片|
| btnPressed | number , string , Texture |  | 弹出框自定义pressed状态按钮图片|
| backgroundColor | number | 0xeeeeee | 弹出框自定义背景框颜色|
| titleColor | number | 0 | 弹出框标题文字颜色|
| contentColor | number | 0x333333 | 弹出框内容文字颜色|
| btnColors | number[] |  | 弹出框按钮颜色|
| btnTextColors | number[] |  | 弹出框按钮文本颜色|


## 方法
| 函数名 | 参数 | 函数返回值 | 说明 |
| show | 无 | 无 | 显示弹出框 |
| close | 无 |  无 | 关闭弹出框 |


## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
|  CLICKBUTTON | 点击按钮 | target, index |
|  SHOWED | 弹出框显示 | target |
|  CLOSED | 弹出框关闭 | target |

## 样式

> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const alert: gui.Alert = {
    title: 'title',
    content: 'this is content',
    icon: 1,
    duration: 3000,
    buttons = ['ok', 'cancel'],
    autoShow: true
};
```

## 使用
``` typescript
{
id: "alert",
libId: ComponentId.alert
}
```

## 示例

> 可点击左上角菜单，查看其他定义类

<iframe src="https://codesandbox.io/embed/alertexample-klw6y?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="alertExample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>