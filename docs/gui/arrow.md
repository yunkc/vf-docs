# 箭头 Arrow

Arrow 可绘制箭头

> 不设置 lineWidth 或 color 图形不可见

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| radius | number | 0 | 设置圆角 |
| lineColor | number | 0 | 设置边框颜色 |
| lineWidth | number | 0 | 设置边框宽度 |
| lineType | "full" , "dash" | "full" | 虚线or实线 |
| fullArrow | boolean | | 设置箭头填充 |
| anchorX | 0-1 |  | 设置内部X坐标 |
| anchorY | 0-1 |  | 设置内部Y坐标 |

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |

## 样式

> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const arrow: gui.Arrow = {
    name: "arrow",
    type: guiType.Arrow,
    color:0xffffff,
    lineColor: 0xff00cc,
    lineWidth: 1,
    radius:10
};
```

## 使用
``` typescript
{
id: "arrow",
libId: ComponentId.arrow,
style: {
    width: 100,
    height: 100
}
}
```

## 示例

> 可点击左上角菜单，查看其他定义类

<iframe src="https://codesandbox.io/embed/arrowexample-bq9gs?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="arrowExample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>