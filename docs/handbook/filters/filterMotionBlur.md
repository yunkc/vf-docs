# FilterMotionBlur

## 调整滤镜
滤镜地址:
> https://s.vipkidstatic.com/vf/plugin/FilterMotionBlur/0.0.1.js

滤镜名
> MotionBlurFilter 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| kernelSize | number | 5 | 应用块大小,只能是大于5的奇数 |
| offset | number | 0 | 强度 |
| velocity | vf.Point Array | [0,0] | 动态模糊中心点 |


## 示例

<iframe
     src="https://codesandbox.io/embed/motionblurfilter-eqrgj?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="MotionBlurFilter"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>