# 文字 Label

Label 可以绘制一段文本

> 手动换行使用 `\n`

> 当文本容器设置宽高后，文字默认会根据文本容器宽高居中.

> 当文本容器设置宽高后，可通过 style.textAlign 进行文字位置调整

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| text |  string | '' | 要绘制的文本内容 |
| resolution |  number | '' | 文字绘制分辨率，一般不需要设置 |

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
|  CHANGE | text属性改变时触发 | target |

## 样式

(style属性)

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| color |  number , number[] | 0xfffff0 | 设置字体颜色，16进制，如果是数组会有过渡效果 |
| letterSpacing | number |  | 设置字符间距 |
| wordWrap | boolean | false | 设置自动换行 |
| wordWrapWidth | number |  | 设置换行宽度，多行文本 |
| textAlign | ‘left‘ , ‘right‘ , ‘center‘ | center | 设置对齐方式 多行文本 |
| lineHeight | number |  | 设置行高，多行文本 |
| fontFamily | string , string[] |  | 设置字体，如果是外部字体，需要先嵌入 |
| fontSize | number | 22 | 设置字体大小 |
| fontStyle | ‘normal" , ‘italic‘ , ‘oblique‘ | normal |设置文字或字体斜体样式 |
| fontVariant | ‘normal‘ , ‘small-caps‘ | normal | 设置普通或小型大写字母字体 |
| fontWeight |  ‘normal’ , 'bold' , 'bolder' , 'lighter' , number  | normal | 设置字体粗细 |
| padding |  number  |  | 设置填充值 |
| stroke |  string , number  |  | 设置描边颜色 |
| strokeThickness |  number  | 0 | 设置描边笔触粗细 |
| dropShadow |  boolean  | false | 设置投影 |
| dropShadowAlpha |  boolean  | false | 设置投影alpha值  |
| dropShadowAngle |  number  | 0 | 设置投影角度 |
| dropShadowBlur |  number  | 0 | 设置投影模糊半径 |
| dropShadowColor |  number  | 0x000000 | 设置投影填充色 |
| dropShadowDistance |  number  | 5 | 设置投影深度 |
| breakWords |  boolean  | true | 设置词换行 |

> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const label: gui.Label = {
    name: "label",
    type: guiType.Label,
};
```

## 使用
``` typescript
{
id: "label",
libId: ComponentId.label,
text: "这是一段文本",
style: {
        fontSize: 24,
        fontWeight: Style.FontWeight.bold,
        fontFamily: "centuryGothic",
        wordWrap: true,
        wordWrapWidth: 384,
        color: 0x000000,
        lineHeight: 29
    }
}
```

## 示例

> 可点击左上角菜单，查看其他定义类

<iframe
     src="https://codesandbox.io/embed/label-dsnqr?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="label"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>