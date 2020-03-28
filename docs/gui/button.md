# 按钮 Button

Button 可设置状态皮肤的交互按钮

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| text |string |  | 设置按钮文字 |
| up | number,string |  | 设置鼠标弹起图片 |
| down | number,string |  | 设置鼠标按钮图片 |
| move | number,string | | 设置鼠标移动时图片 |
| disabled | number,string |  | 设置不可用时图片 |

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
|  hover | 移入或移出 | event,target,true|false |
|  press | 弹起或按下 | event,target,true|false |
|  click | 点击 | event,target |
|  up | 弹起 | event,target |
|  down | 按下 | event,target |
|  move | 移动 | event,target |

## 样式

> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const button: gui.Button = {
    name: "button",
    type: guiType.button,
    up: Asset.up,
    down: Asset.down,
    move: Asset.move,
    disabled: Asset.disabled,
};
```

## 使用
``` typescript
{
id: "button",
libId: ComponentId.button,
text: "按钮1",
style: {
    width: 430,
    height: 100
}
}
```

## 示例

> 示例使用的编程方式，在vf中，通过配置方式会有写法差异

> `运行 ⌘ + Enter` 查看修改后的效果

> [弹出](https://vipkid-edu.github.io/vf-gui/play/#example/TestButton)

<iframe src="https://vipkid-edu.github.io/vf-gui/play/#example/TestButton" height="500" width="100%"></iframe>
