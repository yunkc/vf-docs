# 组件

> 组件是对资源的进一步包装，组件分为基础UI组件，动画组件，媒体组件，npm组件，矢量绘制组件，自定义组件，六大类。

1. 基础组件：包含容器，表格，图片，按钮，单选框，连线，文本等多种UI组件。[Link](/gui/label.md)
2. 动画组件：包含龙骨动画，序列图动画，粒子动画三种动画组件。
3. 媒体组件：包含视频播放，音频播放，麦克风等媒体相关的组件。
4. 外部组件：根据组件规则定制的外部插件。[Link](/handbook/gui-plugs.html)
5. 矢量绘制组件：包含svg组件和绘制组件两种。
6. 自定义组件：组件 + 动画 + 动作行为 = 自定义组件。 自定义组件是一个容器，可以放置所有类型的组件。自定义组件包含动画数据，动作行为脚本数据，和内部变量数据。

## 组件数据的定义
``` typescript
export interface IComponent {
    id: string;
    name: string;
    type?: ComponentType;
    resourceIds?: number[];
    libId?: number;
}
```
## 组件的类型
``` typescript
export const enum ComponentType {
    Custom = 'custom',
    Rect = 'Rect',
    Text = 'Label',
    Image = 'Image',
    Slider = 'Slider',
    Circle = 'Circle',
    Button = 'Button',
    CheckBox = 'CheckBox',
    TextInput = 'TextInput',
    ScrollBar = 'ScrollBar',
    Evaluater = 'Evaluater',
    FollowLine = 'FollowLine',
    ConnectLine = 'ConnectLine',
    SpriteAnimated = 'SpriteAnimated',
    Tracing = 'Tracing',
    Video = 'Video',
    TextChoice = 'TextChoice',
    TextFillBlanks = 'TextFillBlanks',
}
```
> 类型文档并不能即时更新，如果有新的组件，可直接填写相关类型

## 组件数据实例
``` json
"components": {
        "0": {
            "id": 0,
            "name": "text",
            "type": "Label",
            "style": {
                "color": "#a08269",
                "fontSize": 15
            }
        }
}
```

## 自定义组件 
只有自定义组件可以有动画数据和动作脚本数据。只有自定义组件可以作为场景。

关于动画数据，详见 [**动画文档**](animation.md)。

关于动作脚本数据，详见 [**VFX文档**](action.md)。

一个自定义组件的例子：
``` json
"32": {
    "id": 32,
    "name": "page0",
    "type": "custom",
    "children": [
        {
            "id": 320,
            "libId": 300,
            "name": "pageLeft",
            "visible": true,
            "scaleX": 0.5,
            "scaleY": 0.5,
            "x": 0,
            "y": 0
        },
        {
            "id": 321,
            "libId": 301,
            "name": "pageRight",
            "visible": true,
            "scaleX": 0.5,
            "scaleY": 0.5,
            "x": 473,
            "y": 0
        },
        {
            "id": 322,
            "libId": 333,
            "name": "pageBgL",
            "visible": true,
            "scaleX": 1,
            "scaleY": 1,
            "x": 0,
            "y": 500
        },
        {
            "id": 323,
            "libId": 333,
            "name": "pageBgR",
            "visible": true,
            "scaleX": 1,
            "scaleY": 1,
            "x": 916,
            "y": 500
        },
        {
            "id": 324,
            "libId": 0,
            "name": "pageL",
            "visible": true,
            "text": "1",
            "scaleX": 1,
            "scaleY": 1,
            "x": 8,
            "y": 504
        },
        {
            "id": 325,
            "libId": 0,
            "name": "pageR",
            "visible": true,
            "text": "1",
            "scaleX": 1,
            "scaleY": 1,
            "x": 923,
            "y": 504
        }
    ],
    "props": {
        "91": {
            "id": 91,
            "describe": "leftImg",
            "type": "number",
            "value": 0
        },
        "92": {
            "id": 92,
            "describe": "rightImg",
            "type": "number",
            "value": 0
        },
        "93": {
            "id": 93,
            "describe": "leftImgPage",
            "type": "number",
            "value": 0
        },
        "94": {
            "id": 94,
            "describe": "rightImgPage",
            "type": "number",
            "value": 0
        }
    },
    "actionList": [{"type":11,"name":"setPageIndex","execute":[{"type":6,"express":[[4,["324"],"text"],[5,"="],[1,[],"93"]]},{"type":6,"express":[[4,["325"],"text"],[5,"="],[1,[],"94"]]}]},{"type":11,"name":"initPage","execute":[{"type":6,"express":[[1,[],"91"],[5,"="],[1,[-1],"2"]]},{"type":6,"express":[[1,[],"92"],[5,"="],[1,[-1],"2"],[5,"+"],[0,1]]},{"type":6,"express":[[1,[],"93"],[5,"="],[1,[-1],"2"],[5,"+"],[0,1]]},{"type":6,"express":[[1,[],"94"],[5,"="],[1,[-1],"2"],[5,"+"],[0,2]]},{"type":6,"express":[[4,["320"],"src"],[5,"="],[1,[],"91"]]},{"type":6,"express":[[4,["321"],"src"],[5,"="],[1,[],"92"]]},{"type":12,"target":[],"name":"setPageIndex"}]},{"type":11,"name":"flipPageNext","execute":[{"type":6,"express":[[1,[-1],"3"],[5,"="],[5,"!"],[1,[-1],"3"]]},{"type":7,"execute":[{"type":8,"condition":[[1,[-1],"3"],[5,"=="],[0,true]],"execute":[{"type":18}]},{"type":10,"execute":[{"type":19}]}]}]},{"type":11,"name":"flipPagePrev","execute":[{"type":6,"express":[[1,[-1],"3"],[5,"="],[5,"!"],[1,[-1],"3"]]},{"type":7,"execute":[{"type":8,"condition":[[1,[-1],"3"],[5,"=="],[0,true]],"execute":[{"type":18,"transition":{"type":"pageFlipLeft","duration":2000}}]},{"type":10,"execute":[{"type":19,"transition":{"type":"pageFlipLeft","duration":2000}}]}]}]},{"type":11,"name":"nextPage","execute":[{"type":6,"express":[[1,[-1],"2"],[5,"="],[1,[-1],"2"],[5,"+"],[0,2]]},{"type":12,"target":[],"name":"flipPageNext"},{"type":12,"target":[],"name":"setPageIndex"}]},{"type":11,"name":"prevPage","execute":[{"type":6,"express":[[1,[-1],"2"],[5,"="],[1,[-1],"2"],[5,"-"],[0,2]]},{"type":12,"target":[],"name":"flipPagePrev"},{"type":12,"target":[],"name":"setPageIndex"}]},{"type":11,"name":"restart","execute":[{"type":6,"express":[[1,[-1],"2"],[5,"="],[0,0]]},{"type":12,"target":[],"name":"flipPagePrev"},{"type":12,"target":[],"name":"setPageIndex"}]},{"type":13,"event":"Add","target":[],"execute":[{"type":12,"target":[],"name":"initPage"}]},{"type":13,"event":"nextPage","target":[],"global":true,"execute":[{"type":12,"target":[],"name":"nextPage"}]},{"type":13,"event":"prevPage","target":[],"global":true,"execute":[{"type":12,"target":[],"name":"prevPage"}]},{"type":13,"event":"restart","target":[],"global":true,"execute":[{"type":12,"target":[],"name":"restart"}]}]
}
```

## 基础组件(gui)

除自定义组件外，其他类型的组件都由gui库来实现

查阅[常用组件](/gui/label.md)