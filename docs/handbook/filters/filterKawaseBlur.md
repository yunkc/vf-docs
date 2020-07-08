# FilterKawaseBlur

## 调整滤镜
滤镜地址:
> https://s.vipkidstatic.com/vf/plugin/FilterKawaseBlur/0.0.1.js

滤镜名
> KawaseBlurFilter 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| blur | number | 4 | 模糊程度,必须大于0 |
| kernels | Array\<number\> | [0] | 模糊块大小 |
| pixelSize | Array\<number\> | [1,1] | 模糊像素尺寸 |
| quality | number | 3 | 模糊质量 |


## 示例

<iframe
     src="https://codesandbox.io/embed/kawaseblurfilter-st4m8?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="kawaseblurfilter"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>