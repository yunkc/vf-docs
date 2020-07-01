# 输入文本 TextInput


TextInput 可接收文字输入

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| text |string |  | 设置或获取输入文字 |
| placeholder | string |  | 设置或获取预览文字 |
| maxLength | string |  | 设置或获取最大可输入字符 |
| restrict | RegExp | | 设置输入检测的正则 |
| up | number,string |  | 设置鼠标弹起图片 |
| down | number,string |  | 设置鼠标按钮图片 |
| move | number,string | | 设置鼠标移动时图片 |
| disabled | number,string |  | 设置不可用时图片 |

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |

## 样式

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| color | number | 0x26272e | 设置字体颜色 |
| fontFamily | string , string[] |  | 设置字体，如果是外部字体，需要先嵌入 |
| fontSize | number | 25 | 设置字体大小 |

> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const textInput: gui.TextInput = {
    name: "textInput",
    type: guiType.TextInput,
    up: Asset.up,
    down: Asset.down,
    move: Asset.move,
    disabled: Asset.disabled,
};
```

## 使用
``` typescript
{
id: "textInput",
libId: ComponentId.textInput,
placeholder: "输入文本...",
style: {
    width: 300,
    height: 30
}
}
```

## 示例

> 可点击左上角菜单，查看其他定义类

<iframe
     src="https://codesandbox.io/embed/textinput-f54b2?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="textInput"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>