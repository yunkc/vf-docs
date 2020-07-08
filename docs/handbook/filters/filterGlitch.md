# FilterGlitch

## 调整滤镜
滤镜地址:
> https://s.vipkidstatic.com/vf/plugin/FilterGlitch/0.0.1.js

滤镜名
> GlitchFilter 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| average | boolean | false | 是否随机分布 |
| blue | vf.Poing Array | [1,1] | 蓝色通道 |
| direction | number | 0 | 方向 |
| fillMode | number | 0 | 填充模式 |
| green | vf.Poing Array | [1,1] | 绿色通道 |
| minSize | number | 1 | 分片最小限制 |
| offset | number | 100 | 最大分块限制 |
| offsets | Array | [1,1,1] | 手动设置置换位图的自定义切片偏移量，这是从-1到1的值的集合。更改最大偏移值设置偏移 |
| red | vf.Poing Array | [1,1] | 红色通道 |
| seed | 0-1 | 1 | 随机种子 |
| sizes | Array | [1,1,1] | 手动自定义置换位图的切片大小（高度） |
| slices | number | 5 | 切片数 |


## 示例

<iframe
     src="https://codesandbox.io/embed/glitchfilter-8hrsi?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="GlitchFilter"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>