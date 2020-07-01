
# FilterColorMatrix

## 调整滤镜
滤镜地址:
> https://s.vipkidstatic.com/vf/plugin/ColorMatrix/0.0.3.js

滤镜名
> ColorMatrixFilter 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| _blackAndWhite | boolean | undefined | 黑白化 |
| _sepia | boolean | undefined | 深褐色 |
| _brightness | 0-1 | undefined | 明亮的 |
| _greyscale | 0-1 | undefined | 色阶 |
| _hue | 0-1 | undefined | 色调 |
| _contrast | 0-1 | undefined | 对比度 |
| _saturate | 0-1 | undefined | 饱和度 |
| _negative | boolean | undefined | 反色 |
| _technicolor | boolean | undefined | 彩色 |
| _polaroid | boolean | undefined | 宝丽来 |
| _toBGR | boolean | undefined | toBGR |
| _kodachrome | boolean | undefined | kodachrome |
| _browni | boolean | undefined | 布朗尼 |
| _vintage | boolean | undefined | 古董 |
| _night | 0-1 | undefined | 夜视 |
| _predator | 0-1 | undefined | 捕食者 |
| _lsd | 0-1 | undefined | 迷幻 |
| _reset | boolean | undefined | 重置,设置该属性会清除其他所有效果 |


> 该滤镜效果只要设置了对应的属性值即生效. 取消效果设置 _reset值即可;

## 示例

<iframe
     src="https://codesandbox.io/embed/filtercolormatrix-st202?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="filtercolormatrix"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>