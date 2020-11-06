# 富文本 RichLabel

RichLabel 可以绘制一段样式不同的文本

## 库信息
库地址:
> https://s.vipkidstatic.com/vf/plugin/RichLabel/0.0.4.js

类名
> RichLabel 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| textFlow |  string | '' | 要绘制的富文本内容 |

## 解析支持属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| color |  number , number[] | 0xffffff | 设置字体颜色，16进制，如果是数组会有过渡效果 |
| fontSize | number | 22 | 设置字体大小 |
| fontFamily |  string | Arial | 设置字体，如果是外部字体，需要先嵌入 |
| fontStyle | ‘normal" , ‘italic‘ , ‘oblique‘ | normal |设置文字或字体斜体样式 |
| fontWeight |  ‘normal’ , 'bold' , 'bolder' , 'lighter' , number  | normal | 设置字体粗细 |
| stroke |  string , number  |  | 设置描边颜色 |
| strokeThickness |  number  | 0 | 设置描边笔触粗细 |
| letterSpacing | number | 0 | 设置字符间距 |
| dropShadow |  boolean  | false | 设置投影 |
| dropShadowAlpha |  number  | 1 | 设置投影alpha值  |
| dropShadowAngle |  number  | PI / 6 | 设置投影角度 |
| dropShadowBlur |  number  | 0 | 设置投影模糊半径 |
| dropShadowColor |  number  | 0x000000 | 设置投影填充色 |
| dropShadowDistance |  number  | 5 | 设置投影深度 |
| href |  string  | "" | 事件 |

## 方法
| 函数名 | 参数 | 函数返回值 | 说明 |
| release |  |  | 销毁 |

## 样式

(style属性)

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| color |  number , number[] | 0x000000 | 设置字体颜色，16进制，如果是数组会有过渡效果 |
| letterSpacing | number | 0 | 设置字符间距 |
| textAlign | ‘left‘ , ‘right‘ , ‘center‘ | left | 设置对齐方式 多行文本 |
| verticalAlign | ‘top‘ , ‘middle‘ , ‘bottom‘ | top | 设置垂直对齐方式 |
| lineHeight | number |  | 设置行高，多行文本 |
| fontSize | number | 22 | 设置字体大小 |

> [基础样式](/handbook/style.html#样式)

> 手动换行使用 `\n`

> 当文本容器设置宽高后，文字默认会根据文本容器宽高居中.

> 当文本容器设置宽高后，可通过 style.textAlign 进行文字位置调整

## 定义
``` typescript
const assets: Assets = {
    [Ids.richLabel]:{
        type: AssetType.JS,
        url: "//s.vipkidstatic.com/vf/plugin/RichLabel/0.0.2.js",
        name: "RichLabel",
    }
}
```

## 示例

> 可点击左上角菜单，查看其他定义类

   <iframe src="https://codesandbox.io/embed/richlabelexample-ocnb8?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="richLabelExample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>