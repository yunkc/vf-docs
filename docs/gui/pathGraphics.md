# 路径绘制 PathGraphics

PathGraphics 可绘制路径

> 不设置 lineWidth 或 color 图形不可见

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| lineColor | number | 0xffffff | 设置边框颜色 |
| lineWidth | number | 0 | 设置边框宽度 |
| lineType | "full" , "dash" | "full" | 虚线or实线 |
| color | number | | 设置填充色 |
| path | string |  | 路径 |
| beginPort | number | 0 | 起始端形态 0:无 1:空心圆 2:实心圆 3:空心矩形 4:实心矩形 5:空心箭头 6:实心箭头 7:线 |
| endPort | number | 0 | 终端形态 同beginPort | 

::: warning ⚠️
[path格式参考路径动画](https://vipkid-edu.github.io/vf-docs/handbook/animation.html#%E8%B7%AF%E5%BE%84%E5%8A%A8%E7%94%BB)
:::

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |

## 方法
| 函数名 | 参数 | 函数返回值 | 说明 |
| drawGraph |  |  | 绘制图形 |

## 样式

> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const star: gui.PathGraphics = {
    name: "pathGraphics",
    type: guiType.PathGraphics,
    color:0xffffff,
    lineColor: 0xff00cc,
    lineWidth: 1,
    beginPort:1,
    endPort:2,
    path:"M60 171Q58 181 54 193Q26 255 16 277Q22 349 32 371Q10 457 66 477Q256 495 264 485Q214 371 178 315Q106 203 104 189Q118 117 122 107Q144 99 152 97Q264 151 300 189Q310 283 288 305Q220 321 198 309Q162 255 172 227Q284 193 358 199Q608 261 644 277Q662 379 642 411Q450 419 390 407Q336 353 328 301Q390 165 438 139Q602 123 656 141Q820 379 814 425Q670 489 604 491Q430 441 392 415Q366 317 380 271Q516 189 580 177Q712 221 740 257Q788 495 760 583Q634 677 584 679Q426 647 368 629Q100 485 80 457Q48 407 46 391Q94 311 136 291Q490 307 552 333Q626 433 614 531Q492 603 436 607Q216 519 148 475Q122 389 142 359Q322 287 368 279Q428 281 430 283Q446 299 450 301";
};
```

## 使用
``` typescript
{
id: "pathGraphics",
libId: ComponentId.pathGraphics,
}
```

## 示例

> 可点击左上角菜单，查看其他定义类