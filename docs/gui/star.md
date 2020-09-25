# 星形 Star

Star 可绘制星型或正多边形

> 不设置 lineWidth 或 color 矩形不可见

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| innerRadius | number | 0.5 | 设置内外半径比值 |
| triangleNum | number | 5 | 设置角数 |
| lineColor | number | 0xffffff | 设置边框颜色 |
| lineWidth | number | 0 | 设置边框宽度 |
| lineType | "full" , "dash" | "full" | 虚线or实线 |
| color | number | | 设置填充色 |
| anchorX | 0-1 |  | 设置内部X坐标 |
| anchorY | 0-1 |  | 设置内部Y坐标 |

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |

## 方法
| 函数名 | 参数 | 函数返回值 | 说明 |
| drawGraph |  |  | 绘制图形 |
| release |  |  | 销毁 |

## 样式

> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const star: gui.Star = {
    name: "star",
    type: guiType.Star,
    color:0xffffff,
    lineColor: 0xff00cc,
    lineWidth: 1,
    radius:10
};
```

## 使用
``` typescript
{
id: "star",
libId: ComponentId.star,
style: {
    width: 100,
    height: 100
}
}
```

## 示例

> 可点击左上角菜单，查看其他定义类

<iframe
     src="https://codesandbox.io/embed/star-sk5wu?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="star"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>