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
``` ts
const textInput: gui.TextInput = {
    name: "textInput",
    type: guiType.textInput,
    up: Asset.up,
    down: Asset.down,
    move: Asset.move,
    disabled: Asset.disabled,
};
```

## 使用
``` ts
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

> 示例使用的编程方式，在vf中，通过配置方式会有写法差异

> `运行 ⌘ + Enter` 查看修改后的效果

> [弹出](https://vipkid-edu.github.io/vf-gui-docs/play/#example/TestTextInput)

<iframe src="https://vipkid-edu.github.io/vf-gui-docs/play/#example/TestTextInput" height="500" width="100%"></iframe>