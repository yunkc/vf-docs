# 交互

组件开启交互后`interactabled = true`，有接收用户鼠标点击或触摸事件的能力。

自定义组件默认开启，其他组件默认关闭。 关闭交互会对性能提升有帮助。


## 开启交互

``` json
"components": {
        "0": {
            "id": 0,
            "name": "text",
            "type": "Label",
            "interactabled": true
        }
}
```

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
|  click | 点击触发，按下到弹起 | event,target |
|  press | 点击触发，按下或弹起| event,target,bool |
|  hover | 鼠标移入或移出时 | event,target,bool |
|  down | 按下（不推荐） | event,target |
|  up | 弹起（不推荐） | event,target |
|  move | 移动（不推荐） | event,target |

> press 第三个参数true时为鼠标按下，false弹起。

> hover 第三个参数true时为移入，false移出。

## 监听

``` typescript
this#0.on('hover', this.onHover);

function onHover($event, $target, $bool) {
  print($bool);
}

```

> 监听事件后，不用时注意移除事件。
