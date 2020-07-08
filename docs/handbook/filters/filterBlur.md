# FilterBlur

## 调整滤镜
滤镜地址:
> https://s.vipkidstatic.com/vf/plugin/FilterBlur/0.0.1.js

滤镜名
> BlurFilter

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| blur | number | 2 | 模糊程度 |
| strength | number | 8 | 模糊强度 |
| resolution | number > 0 | 1 | 模糊分辨率,不能为0 |
| kernelSize | 5,7,9,11,13,15 | 5 | 模糊块大小,只能为列表中显示的值 |
| quality | number | 4 | 模糊质量 |



## 示例

<iframe
     src="https://codesandbox.io/embed/filterblur-3bswo?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="filterblur"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>