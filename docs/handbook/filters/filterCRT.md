# FilterCRT

## 调整滤镜
滤镜地址:
> https://s.vipkidstatic.com/vf/plugin/FilterCRT/0.0.1.js

滤镜名
> CRTFilter 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| curvature | number | 1 | 交错线弯曲，数值越大弯曲越多 |
| lineContrast | number | 0.25 | 交错线对比度 |
| lineWidth | number | 1 | 交错线宽度 |
| noise | 0-1 | 0 | 躁点 |
| noiseSize | number | 0 | 躁点尺寸 |
| seed | number | Math.random() | 躁点生成种子 |
| time | number | 0 | 用于设置交错线的动画 |
| verticalLine | boolean | false | 垂直线为true，水平线为false |
| vignetting | number | 0 | 渐晕效果的半径越小，值越小产生的渐晕越小 |
| vignettingAlpha | number | 0 | 渐晕效果的透明度 |
| vignettingBlur | number | 0 | 渐晕效果的模糊度 |


## 示例

<iframe
     src="https://codesandbox.io/embed/crtfilter-g0q98?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="CRTFilter"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>