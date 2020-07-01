# FilterGodray

## 调整滤镜
滤镜地址:
> https://s.vipkidstatic.com/vf/plugin/FilterGodray/0.0.1.js

滤镜名
> GodrayFilter 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| angle | number | 30 | 发光角度 |
| center | vf.Point Array | [0,0] | 光源中心 |
| gain | 0-1 | 0.5 | 光强 |
| lacunarity | number | 2.5 | 光束内隙 |
| parallel | boolean | true | 平行发光 |
| time | number | 0 | 应用次数 |

## 示例

<iframe
     src="https://codesandbox.io/embed/godrayfilter-2l8e5?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="GodrayFilter"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>