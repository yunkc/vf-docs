# 动画
动画就是组件属性随时间的变化。动画数据中包含了时间轴数据和帧数据。动画数据和组件数据分离，通过组合的方式表示动画，可以更灵活方便的制作动画。
::: tip 提示
- 动画使用的时间单位是帧，不是秒！
- 每帧的时间由配置文件中的fps属性设置，fps表示每秒多少帧。
- 如果不设置fps， 默认的fps是30， 它表示一秒钟是30帧， 一帧相当于 1/30 = 33.33（毫秒）
:::
## 数据定义
- 动画数据的定义：
``` typescript
export interface IAnimation {
    name: string;
    duration?: number;
    autoPlay?: boolean;
    loop?: boolean;
    children: { [id: string]: ISubAnimation };
}
```
- 子动画数据的定义：
``` typescript
export interface ISubAnimation {
    duration?: number;
    loop?: boolean;
    timelines: ITimeline[];
}
```
- 时间轴数据的定义：
``` typescript
export interface ITimeline {
    type: TimelineType;
    loop?: boolean;
    frames: IFrame[];
}
```
- 时间轴的类型：
``` typescript
export const enum TimelineType {
    X = 'x',
    Y = 'y',
    SCALE_X = 'scaleX',
    SCALE_Y = 'scaleY',
    ROTATION = 'rotation',
    COLOR = 'color',
    ALPHA = 'alpha',
    VISIBLE = 'visible',
    TEXT = 'text',
    PROGRESS = 'progress',
    SKEW_X = 'skewX',
    SKEW_Y = 'skewY',
    PLAY = 'play',
    VOLUME = 'volume',
    ENABLED = 'enabled',
    FITERBLUR = 'filterBlur',
    EVENT = 'event',
}
```
- 帧数据的定义：
``` typescript
export interface IFrame {
    frame: number;
    value: any;
    curve?: number[];
}
```

## 创建动画

现在我们来创建一个动画，让图片动起来。
1. 创建一个自定义组件， 自定义组件的children中有一个id是loadingBar的图片。
2. 给这个图片加一个动画
3. 给组件加一个animations节点，如下：

``` json
"animations":[
    {
        "name": "default",
        "duration": 60,
        "autoPlay": true,
        "loop": false,
        "children": {
            "loadingBar": {
                "duration": 60,
                "loop": false,
                "timelines": [
                    {
                        "type": "x",
                        "loop": false,
                        "frames": [
                            {
                                "frame": 0,
                                "curve": [16],
                                "value": 100
                            },
                            {
                                "frame": 60,
                                "value": 200
                            }
                        ]
                    }
                ]
            }
        }
    }
]
```
## 动画数据解析
- 动画只能加在自定义组件中。
- animations节点
    + name 是动画的名称，在一个组件可以存在多个动画，每个动画的名称是唯一的。
    + duration 表示动画的持续时间，单位是帧。
    + autoPlay 表示是否在加入舞台时就自动播放这个动画，如果一个组件包含多个动画，只能有一个动画的autoPlay为true。
    + loop表示是否循环播放。 如果loop是ture，当动画到达最后一帧时会跳到第一帧，所以当loop是true时，动画播放完毕后不会停留在最后一帧上。
    + children 里面包含了这个组件中所有子组件的动画的时间轴信息。所以动画只能加在组件的孩子上，不能加到组件自己身上。
- child节点
    + child用键值对表示。
    + 每个child中的动画也有 duration， loop的属性，它作用的范围是这个child内。
    + timelines表示每个属性的变化，一个属性的变化是一个timeline。
- timeline节点
    + timeline中 type表示变化的属性。并不是所有的属性都可以有timeline，只有部分属性可以有。具体哪些属性可以有参见《时间轴的类型》。
    + timeline中也有loop属性，它的作用范围在这一个timeline内。
    + frames表示 在某一时间点上，该属性变化的数值。
- frame节点
    + frame中 frame表示时间点，单位是帧。
    + curve表示变化的缓动曲线，具体含义见后面的表格《动画曲线的类型》。
    + value 表示在这一时间点该参数的值。

- 总体上，这一段表示，该组件有一个叫‘default’的动画，这段动画有2秒钟（因为fps是30，表示一秒钟是30帧，整段动画是60帧，就是2秒种），图片loadingBar的x坐标从100 变化到200， 变化是先快后慢。（由curve属性控制）
- 这里loop有多个，duration也有多个，通过灵活的组合可以让动画呈现不同的效果。后面《理解duration和loop》的部分有更详细的解释。
- 如果想让动画播放完毕后停留在最后的状态，所有的loop都必须是false。



## 可以添加动画的属性

属性|值类型|含义|备注
--|:--:|:--:|:--:
x | number | x坐标
y | number | y坐标
scaleX | number | x方向缩放
scaleY | number | y方向缩放
rotation | number | 旋转
color | number | 颜色
alpha | number |不透明度 | 0是全透明，1是不透明
visible | boolean |是否可见
text | string | 文本  | 仅在Label组件中使用
progress | number | 进度 | 仅在Label组件中使用，用于制作打字机效果
enabled | boolean | 是否可点击
filterBlur | number | 模糊程度
event | striing | 事件

## 缓动曲线
- 缓动曲线的数据是一个数组[],数组只包含一个数字，就是缓动曲线的type。
之所以设计成数组，是为了以后支持自定义的贝塞尔曲线。如果是贝塞尔曲线，数组就会包含多个数字。
- 缓动曲线表示变化的快慢，缓动曲线的数据写在帧上，
当一个帧上有缓动曲线时，它表示：从这一帧到下一帧之间变化的缓动曲线，如果该帧是最后一帧，那么缓动曲线不起作用。
- 并不是所有的帧都支持缓动曲线，不是连续变化的属性的时间轴不支持缓动曲线，例如visible属性，event属性 text属性不支持缓动曲线。
- 例如  Linear（type是1）表示线性变化，就是匀速运动；EaseOutQuad（type是2） 表示先快后慢。

### 动画曲线的类型

类型|type|备注
--|:--:|:--:
None | 0 | 无效果，突变
Linear | 1 | 线性变化
EaseOutQuad | 2 | 淡出
EaseInQuad | 3 | 淡入
EaseInOutQuad | 4 |淡入淡出
EaseInCubic | 5
EaseOutCubic | 6
EaseInOutCubic | 7
EaseInQuart | 8
EaseOutQuart | 9
EaseInOutQuart | 10
EaseInQuint | 11
EaseOutQuint | 12
EaseInOutQuint | 13
EaseInSine | 14
EaseOutSine | 15
EaseInOutSine | 16
EaseInExpo | 17
EaseOutExpo | 18
EaseInOutExpo | 19
EaseInCirc | 20
EaseOutCirc | 21
EaseInOutCirc | 22
EaseOutBounce | 23
EaseInBack | 24
EaseOutBack | 25
EaseInOutBack | 26
Elastic | 27
EaseOutElastic | 28
EaseOutElasticTmp | 29
SwingFromTo | 30
SwingFrom | 31
SwingTo | 32
Bounce | 33
BouncePast | 34
EaseFromTo | 35
EaseFrom | 36
EaseTo | 37
Sinusoidal | 38
Reverse | 39
Wobble | 40
Spring | 41

## 动画实例
1.创建一个从左到右的移动动画
``` json
"animations":[
    {
        "name": "default",
        "duration": 60,
        "autoPlay": true,
        "loop": false,
        "children": {
            "loadingBar": {
                "duration": 60,
                "loop": false,
                "timelines": [
                    {
                        "type": "x",
                        "loop": false,
                        "frames": [
                            {
                                "frame": 0,
                                "curve": [1],
                                "value": 100
                            },
                            {
                                "frame": 60,
                                "value": 200
                            }
                        ]
                    }
                ]
            }
        }
    }
]
```
2.创建一个从上到下的移动动画
``` json
"animations":[
    {
        "name": "default",
        "duration": 60,
        "autoPlay": true,
        "loop": false,
        "children": {
            "loadingBar": {
                "duration": 60,
                "loop": false,
                "timelines": [
                    {
                        "type": "y",
                        "loop": false,
                        "frames": [
                            {
                                "frame": 0,
                                "curve": [1],
                                "value": 100
                            },
                            {
                                "frame": 60,
                                "value": 200
                            }
                        ]
                    }
                ]
            }
        }
    }
]
```
3.创建一个从左上到右下的移动动画
``` json
"animations":[
    {
        "name": "default",
        "duration": 60,
        "autoPlay": true,
        "loop": false,
        "children": {
            "loadingBar": {
                "duration": 60,
                "loop": false,
                "timelines": [
                    {
                        "type": "x",
                        "loop": false,
                        "frames": [
                            {
                                "frame": 0,
                                "curve": [1],
                                "value": 100
                            },
                            {
                                "frame": 60,
                                "value": 200
                            }
                        ]
                    },
                    {
                        "type": "y",
                        "loop": false,
                        "frames": [
                            {
                                "frame": 0,
                                "curve": [1],
                                "value": 100
                            },
                            {
                                "frame": 60,
                                "value": 200
                            }
                        ]
                    }
                ]
            }
        }
    }
]
```
## 理解duration和loop
- loop
    + loop表示是否是循环动画，当loop是ture时，时间轴永远也不会停留在最后一帧，当时间轴走到最后一帧时会立刻跳转到第一帧。
        例如：
        ``` json
        {
            "type": "y",
            "loop": true,
            "frames": [
                {
                    "frame": 0,
                    "curve": [1],
                    "value": 100
                },
                {
                    "frame": 60,
                    "value": 200
                }
            ]
        }
        ```
    + 在这段时间轴动画中，y属性的值永远也不会等于200，当帧数走到60时，会跳到第0帧的位置，此时y属性是100

    + 在一段动画的配置中，有三个节点，animation节点，child节点和 timeline节点，animation节点包含一个或者多个child节点，一个child节点包含多个timeline节点。这三个节点都可以有自己的loop属性。它们管控的范围不一样。

- duration
    + duration表示这段动画的长度，单位是帧。如果不指定duration，那么duration就是帧的最大长度。

    + 在一段动画的配置中，有三个节点，animation节点，child节点和 timeline节点，animation节点包含一个或者多个child节点，一个child节点包含多个timeline节点。这三个节点中只有animation节点和child节点可以指定duration，timeline的长度由里面包含的帧决定。 
    + 如果child节点不指定duration。那么这个child的长度是它包含的timline节点中长度最大的那个决定。 
    + 如果animation节点不指定duration，那么这个animation的长度由它包含的child节点中长度最大的那个决定。

- 通过duration和loop的组合使用可以配置出丰富的动画效果。

    例如：做一个小车从左到右移动的动画，车身从左到右，车轮子不停转动，我们可以把车轮子设置成循环动画，车身的的动画设置为非循环动画，如下
    ``` json
    "animations": [
        {
            "name": "default",
            "duration": 120,
            "autoPlay": true,
            "loop": false,
            "children": {
                "车身": {
                    "duration": 120,
                    "loop": false,
                    "timelines": [
                        {
                            "type": "x",
                            "loop": false,
                            "frames": [
                                {
                                    "frame": 0,
                                    "curve": [1],
                                    "value": 0
                                },
                                {
                                    "frame": 60,
                                    "value": 200
                                }
                            ]
                        }
                    ]
                },
                "轮子": {
                    "duration": 30,
                    "loop": true,
                    "timelines": [
                        {
                            "type": "rotation",
                            "loop": false,
                            "frames": [
                                {
                                    "frame": 0,
                                    "curve": [1],
                                    "value": 0
                                },
                                {
                                    "frame": 30,
                                    "value": 360
                                }
                            ]
                        }
                    ]
                },
            }
        }
    ]
    ```
    + 这里轮子的动画是loop是true，它的动画只需要30帧即可，整体的动画是120帧，轮子会在这120帧中，循环播放，循环4次。
    + 如果轮子的动画的loop是false，为了达到相同的效果，轮子的动画长度也得是120帧，这样就会增加轮子动画的帧数据。
    + 通过loop和duration的组合可以减少数据，提高效率，提高灵活性。请仔细体会这两个属性的妙处。

## 多个动画
- 动画节点是个数组，可以包含多个动画，动画有个autoPlay属性，如果一个动画的autoPlay属性是true的话，当这个组件添加上舞台上时，就会自动播放这个动画。
- 如果有多个动画的autoPlay都是true的话，就会只播放第一个autoPlay是true的动画。
- 如果没有一个动画的autoPlay属性是true的话，就不播放任何动画。
- 如果包含多个动画的话，想要播放不同的动画，可是使用[动作脚本](action.md#跳转动画)的gotoPlay语句进行控制。

## 动画中的事件

- 当组件的一个动画播放完毕时，组件会抛出AnimationComplete事件，如果动画是一个循环动画，每循环一次会抛出AnimationLoopComplete事件
此外用户还可以添加事件时间轴。
- 更多事件相关参见[事件文档](event.md)

## 事件时间轴

- 在一个自定义组件的动画中，可以给事件添加一个时间轴，用来在当动画播放到某一帧时抛出事件，再由[VFX](action.md#添加监听)监听事件后执行一定的逻辑。
- 事件时间轴的的数据必须加在children节点下，一个动画只能添加一个，id必须是‘event’。
- event节点下可以添加一个或者多个时间轴，只能添加类型是event的时间轴。 
- event时间轴不能添加loop属性。
- event时间轴的帧上的帧数据是一个数组，这表示同一时间可以抛出多个事件。
- 数组中的每一项是一个有{type:string, data？:any}结构的对象。
- type表示事件的类型，data表示事件的数据，也可以没有数据。
- 更多事件相关参见[事件文档](event.md)。
- 一个事件时间轴的例子：
``` json
"animations":[
    {
        "name": "default",
        "duration": 60,
        "autoPlay": true,
        "loop": false,
        "children": {
            "loadingBar": {
                "duration": 60,
                "loop": false,
                "timelines": [
                    {
                        "type": "x",
                        "loop": false,
                        "frames": [
                            {
                                "frame": 0,
                                "curve": [1],
                                "value": 100
                            },
                            {
                                "frame": 60,
                                "value": 200
                            }
                        ]
                    }
                ]
            },
            "event": {
                "duration": 60,
                "timelines": [
                    {
                        "type": "event",
                        "frames": [
                            {
                                "frame": 20,
                                "value": [{"type":"myEvent", "data":"myEvent"},
                                            {"type":"hisEvent", "data":"hisEvent"}]
                            }
                        ]
                    },
                    {
                        "type": "event",
                        "frames": [
                            {
                                "frame": 60,
                                "value": [{"type":"thisEvent", "data":"thisEvent"},
                                            {"type":"thatEvent", "data":"thatEvent"}]
                            }
                        ]
                    }
                ]
            }
        }
    }
]
```

## 路径动画

::: warning ⚠️
VF Engine >= v0.5.71
:::

可沿着一条曲线或直线运动,数据格式：

增加`type`为`path`的timeline , path属性是一个字符串，格式是 svg 中 path 的 d属性 

* M 表示MoveTo 
* L 表示LineTo， 
* Q表示二次贝塞尔曲线 
* C 表示三次贝塞尔曲线

[path的格式可参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths)

注意 路径动画和`x` , `y`轴的动画有冲突，两个不可同时使用。

path的timeline中的frame的值是0-1之间 表示路径的开始和结束。

```
"timelines": [
      {
          "type": "path",
          "path": "M 60 171 Q 58 181 54 193 Q 26 255 16 277",
          "loop": true,
          "frames": [
              {
                  "frame": 0,
                  "curve": [1],
                  "value": 0
              },
              {
                  "frame": 600,
                  "value": 1.0
              }
          ]
      },
]
```
### 动画路径示例

> 可点击左上角菜单，查看其他定义类

<iframe
     src="https://codesandbox.io/embed/pathanimationexample-bhxc5?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="pathAnimationExample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



## 动画模板

::: warning ⚠️
VF Engine >= v0.5.71
:::

在某些课件中，许多图片具有相同的动画，之前的格式，一个动画需要写好多遍，引入动画模板
可以在动画模板中定义一组动画，在其他组件中使用，可以达到一次定义多次使用的目的。

数据格式 增加 animationTemplate 节点。类型是 {[id: string]: ISubAnimation};

动画的数据修改
之前 
export interface IAnimation {
    name: string;
    duration?: number;
    autoPlay?: boolean;
    loop?: boolean;
    children: { [id: string]: (ISubAnimation) };
}
修改后
export interface IAnimation {
    name: string;
    duration?: number;
    autoPlay?: boolean;
    loop?: boolean;
    children: { [id: string]: (ISubAnimation | string) };
}

IAnimation中的children 即可以是动画的定义，也可以是一个动画模板的名字

### 动画模版示例

> 建设中
