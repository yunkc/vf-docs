# 配置选项

## 配置样例

``` js
// 1.配置实例
const option = {
    container: document.getElementById("vf-container"),
    bgcolor: '0xffffff',
    wmode : 'transparent',
    scaleMode: 'showAll'
}

// 2.新建实例
createVF(option,player=>{
  // 3.启动实例
  vf.play('https://cdn.*******.com/vf/IC019/index.json');
});

```

## 配置可选项

| 属性 | 类型 | 默认值 | 描述 |
| ------ | ------ | ------ | ------ |
| container | HTMLElement | document.element | 要包含VF的父级容器 |
| id | string | auto | VF实例的唯一标示，默认会自动生成 |
| src | string |  | 模板的数据或模板路径 |
| scaleMode | string | showAll | showAll ， noScale ， cover ， contain |
| wmode | string | transparent | 显示模式, transparent透明  |
| bgcolor | string |  | 背景色，wmode非transparent时生效 |
| frameRate | number | 30 | 帧率 |
| width | number | 0 | 默认100%撑满容器宽度 |
| height | number | 0 | 默认100%撑满容器高度 |
| debug | boolean | false | 调试模式 |
| libs | array |  | 关联的库，设置后会自动加载相关js文件 |
| language | 设置语言 | string |  ["en-us", "zh-cn", "ja-JP", ....] |
| vfvars | object |  | 外部自定义参数。 |
| ------ | ------ | ------ | ------ |
| play | boolean | true | 是否自动播放。 |
| loop | boolean | false | 是否循环播放。 |
| menu | boolean | true | 显示右键菜单。 |
| resolution | number | 1 | 设置解析度，一般 `window.devicePixelRatio || 1` |
| quality | string |  | 显示质量 |
| logAdvancedTrace | boolean | false | 显示堆栈调用跟踪日志 |

## 适配选项

1. noScale 不对内容进行任何缩放，保持原始的1:1比例。如果播放器窗口比内容小，则可能进行一些裁切。
1. showAll 非溢出居中，显示全部内容。水平或垂直“两侧”可能会不够宽而留有黑边。
1. contain 非溢出，显示全部内容，水平或垂直“一侧”方向有黑边。
1. cover 溢出居中，某些部分也许无法显示在播放器视口。

## 扩展

vfvars 可自定义参数，vf默认使用了`cdns`,`plugs`字段。

#### cdns

可配置资源域名,可只配`default`，其他域名为预留，为了更好加速CDN设置。资源加载失败会下标递增重试。

```
{
    default: [
        'https://cdn1.***.com/',
        'https://cdn2.***..com/',
    ],
    image: [
        'https://image.***.com/',
        'https://image.***.com/',
    ],
    media: [
        `https://media.***.com/`,
        'https://media.***.com/',
    ],
    wx: [
        'https://wx.***.com/',
        'https://wx.***.com/',
    ],
}
```

#### plugs

内部使用，忽。