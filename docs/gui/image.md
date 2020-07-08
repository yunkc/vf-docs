# 图片 Image

Image 绘制图片

> src 支持 number | string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| src | number , string , Texture |  | 设置图片源，url、vf资源id、Base64 |
| anchorX | 0-1 |  | 设置图片的内部X坐标 |
| anchorY | 0-1 |  | 设置图片的内部Y坐标 |
| fillMode | no-repeat , repeat , scale | no-repeat | 设置图片的填充模式 |
| scale9Grid | number[] |  | 设置矩形区域，它定义图片的四个缩放区域 `[左,右,上,下]`。 scale模式 |


## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
|  COMPLETE | 图片加载完成时触发 | target |

## 样式

> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const image: gui.Image = {
    name: "image",
    type: guiType.Image,
    fillMode: "scale",
    scale9Grid: [20, 20, 20, 20],
    src: Asset.SelectedBoard,
};
```

## 使用
``` typescript
{
id: "image",
libId: ComponentId.image,
style: {
    width: 430,
    height: 100
}
}
```

## 示例

> 可点击左上角菜单，查看其他定义类

<iframe
     src="https://codesandbox.io/embed/image-g4eec?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="image"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>