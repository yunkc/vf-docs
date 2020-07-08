# 文本选择插件 TextChoice


TextChoice 可实现文本混排类选择题模板

## 库信息
库地址:
> https://s.vipkidstatic.com/vf/plugin/TextChoice/0.0.1.js

类名
> TextChoice 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| config |any |  | 插件配置 |
| checkResult |boolean | false | 验证结果|
## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| OPTION_CHANGE | 选中选项回调 | event,target,data |
| COMPLETE | 答题完成回调 | event,target,data |
| RESULT | 验证结果回调 | event,target,data |

## 样式

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |



> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const assets: Assets = {
    [Ids.textChoice]:{
        type: AssetType.JS,
        url: "//s.vipkidstatic.com/vf/plugin/TextChoice/0.0.2.js",
        name: "TextChoice",
    }
}

const textChoice = {
    type: 'TextChoice',
    name: 'TextChoice',
    config: {
        containerWidth: 1000,                 //组件容器宽度
        labelStyle: {
            lineHeight: 60,                       //行高
            fontSize: 30,                         //文本字号
            color: 0,                      //文本颜色
            fontFamily: 'Arial',                       //文本字体
        },
        textSelectedColor: 0x5161bb,          //文本选中时的颜色
        optionBackgroundColor: 0xe9ecfe,      //选项线条背景色
        optionBoardColor: 0x7487ef,           //选项选中时的颜色
        optionPaddingX: 0,                   //选项水平间隔
        optionPaddingY: 15,                   //选项框竖直间隔
        optionBoardLineWidth: 2,              //选项选中时线宽
        optionRightColor: 0x00ff00,           //选项正确颜色
        optionWrongColor: 0xff0000,           //选项错误颜色
        optionRightIcon: Ids.right,                 //选项判定正确图标
        optionWrongIcon: Ids.wrong,                 //选项判定错误图标
        optionRightMissingIcon: Ids.right_miss,     //选项判定miss图标
        optionIconSize: 15,                                    //图标尺寸
        optionType: "single",                                  //选项类型，single-单选   multiple-多选   radio-选项互斥
        targetOption: {
            "text": "hello world, {} is a TextFillBlanks example. hello world, this {} a TextFillBlanks example. ",
            "key": "0"
        },                   //目标属性
        selectOption: [
            {
                "text": "this",
                "key": "0"
            },
            {
                "text": "is",
                "key": "1"
            }]                  
            //选项属性
    }
```

## 使用
```typescript
const root: gui.Custom = {
    type: guiType.CUSTOM,
    interactabled: false,
    children: [
        {
            id: 'textChoice',
            libId: Ids.textChoice,
            y: 200
        }
    ],
    // 用 VFX 编写的可执行逻辑，文档请见 https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/aciton.md
    actionList: `
        @this = {
            this.on("Add", () => {
                //选项选中
                this#textChoice.on("OPTION_CHANGE", this.onOptionChange);
                //答题完成
                this#textChoice.on("COMPLETE", this.onComplete);
                //答题结果
                this#textChoice.on("RESULT", this.onResult);
            });
            function onOptionChange($target, $data){   
                trace($target);
                trace($data);
            };
            function onComplete(){
                //选择完成，提交验证
                this#textChoice.checkResult = true;
            };
            function onResult($target, $data){
                //验证结果
                trace('result');
                trace($data);
            };
         
        }
    `
};
```
## 示例

> 示例使用的编程方式，在vf中，通过配置方式会有写法差异

> `运行 ⌘ + Enter` 查看修改后的效果

> [弹出](https://codesandbox.io/embed/textchoice-ezggp?fontsize=14&hidenavigation=1&theme=dark)
>
<iframe
     src="https://codesandbox.io/embed/textchoiceexample-8dy4v?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="textChoiceExample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

