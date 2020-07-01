# FilterReflection

## 调整滤镜
滤镜地址:
> https://s.vipkidstatic.com/vf/plugin/FilterReflection/0.0.1.js

滤镜名
> ReflectionFilter 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| alpha | vf.Point array | [1,1] | 开始和结束的反射透明度 |
| amplitude | vf.Point array | [0,20] | 波的起止振幅 |
| boundary | number | 0.5 | 反射点的垂直位置，默认为50%（中间）较小的数字产生较大的反射，较大的数字产生较小的反射。 |
| mirror | boolean | true | 是否倒影 |
| time | boolean | true | 滤镜应用次数 |
| waveLength | array | [30, 100] | 波长 |

## 示例

<iframe
     src="https://codesandbox.io/embed/reflectionfilter-eckfv?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="ReflectionFilter"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>