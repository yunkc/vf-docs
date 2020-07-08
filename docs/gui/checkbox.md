# 单/复选框 CheckBox

CheckBox 设置单选或多选

> 单选与复选框使用同一个组件只是皮肤不同，多选多了设置分组属性


## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| value |string |  | 设置值 |
| text |string |  | 设置显示文字 |
| checkGroup | string |  | 设置分组，如果是单选，无需设置 |
| checked |boolean | false | 设置选中状态 |
| up | number,string |  | 设置鼠标弹起图片 |
| down | number,string |  | 设置鼠标按钮图片 |
| move | number,string | | 设置鼠标移动时图片 |
| disabled | number,string |  | 设置不可用时图片 |
| upAndSelected | number,string |  | 设置选中时鼠标弹起图片 |
| downAndSelected | number,string |  | 设置选中时鼠标按钮图片 |
| moveAndSelected | number,string | | 设置选中时鼠标移动时图片 |
| disabledAndSelected | number,string |  | 设置选中时不可用图片 |

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
|  CHANGE | checked属性改变时触发 | target |



## 样式

> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const checkBox: gui.CheckBox = {
    name: "checkBox",
    type: guiType.CheckBox,
    up: Asset.up,
    down: Asset.down,
    move: Asset.move,
    disabled: Asset.disabled,
    upAndSelected: Asset.up,
    downAndSelected: Asset.down,
    moveAndSelected: Asset.move,
    disabledAndSelected: Asset.disabled,
};
```

## 使用
``` typescript
{
id: "checkBox1",
libId: ComponentId.checkBox,
checkGroup : "group1",
text: "复选框1",
style: {
        width:25,
        height:25
    }
}

{
id: "checkBox2",
libId: ComponentId.checkBox,
checkGroup : "group1",
text: "复选框2",
style: {
        width:25,
        height:25
    }
}
```

## 示例

> 可点击左上角菜单，查看其他定义类

<iframe
     src="https://codesandbox.io/embed/checkbox-c3msy?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="checkbox"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>