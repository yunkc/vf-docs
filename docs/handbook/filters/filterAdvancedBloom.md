# FilterAdvancedBloom

## 调整滤镜
滤镜地址:
> https://s.vipkidstatic.com/vf/plugin/FilterAdvancedBloom/0.0.1.js

滤镜名
> AdvancedBloomFilter 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| bloomScale | number | 1 | 调整滤镜的强度。值越高，亮度越强。 |
| blur | number | 2 | 模糊属性的强度 |
| brightness | number | 1 | 亮度越低，值越小亮度越细微。 |
| kernels | number | 4 | 设置滤镜的内核大小 |
| pixelSize | number | 1 | 像素大小 |
| quality | number | 4 | 质量 |
| resolution | number | 1 | 分辨率 |
| threshold | number | 0.5 | 定义多少色差才能影响滤镜。 |


## 示例

<iframe
     src="https://codesandbox.io/embed/advancedbloomfilter-p4605?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="advancedbloomfilter"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>