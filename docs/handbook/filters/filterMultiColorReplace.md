# FilterMultiColorReplace

## 调整滤镜
滤镜地址:
> https://s.vipkidstatic.com/vf/plugin/FilterMultiColorReplace/0.0.1.js

滤镜名
> MultiColorReplaceFilter 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| epsilon | number | 0.05 | 替换容差 |
| replacements | array | [[0xffffff,0xffffff],[0xffffff,0xffffff]] | 要替换的两组颜色 每个数组的第一位是原始颜色, 后一位是目标颜色, 只支持两组颜色替换 |

## 示例

<iframe
     src="https://codesandbox.io/embed/multicolorreplacefilter-mmvx9?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="MultiColorReplaceFilter"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>