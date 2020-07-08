# 拖动

开启拖动 `dragOption.draggable = true` 后，有接收拖动事件能力。

> 自定义组件 `custom` 需实例化时设置`dragOption`属性。 

## dragOption参数

#### 拖动
| 属性名 | 类型 | 说明 |
| --- | --- | --- | 
|  draggable | boolean | 开启拖动 |
|  dragContainer | DisplayObject| 设置拖动时父容器，并非目标容器 |
|  dragRestrictAxis | x,y | 限制拖动轴 |
|  dragBoundary | boolean | 限定移动边界，父级 |
|  dragBounces | boolean | 开启回弹 |
|  dropGroup | string | 设置分组，拖动目标时设置  |
|  droppable | boolean | 开启掉落接收 |
|  dragMoveCursor | string | 拖拽移动时鼠标样式 |
|  actionData | string | 当前操作数据 |

> 设置 `droppable = true` 后，可接收拖动组件，接收必须为`custom`。

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
|  DRAG_START | 拖动开始时触发 | event,target |
|  DRAG_MOVE | 拖动中触发 | event,target |
|  DRAG_END | 拖动结束，未移动到目标触发 | event,target |
|  DRAG_TARGET | 拖动结束，移动到目标触发 | event,target |
|  DROP_TARGET | 有组件被拖入后触发 | event,target |
|  DRAG_START_BEFORE | 拖动开始前触发 | event,target |
|  DRAG_END_BEFORE | 拖动结束前触发 | event,target |

> DRAG_START，DRAG_MOVE，DRAG_END，DRAG_TARGET 事件会触发并改变 `actionData` 值。

> 通过传送与设置 `actionData` 值达到多端同步操作。

## 开启拖动

``` json
"components": {
        "source": {
            "id": "source",
            "name": "text",
            "type": "Label",
            "dragOption":{
                "draggable": true,
                "dropGroup": "group1"
            }
            
        }
}
```

## 接收拖动

``` json
"components": {
        "target": {
            "id": "target",
            "name": "text",
            "type": "custom",
            "dragOption":{
                "droppable": true,
                "dropGroup": "group1"
            },
            "children": []
            
        }
}
```

## 监听

``` typescript
this#0.on('DRAG_START', this.onDragStart);

function onDragStart($event, $target) {

}

```

## 示例


> 示例使用的编程方式，在vf中，通过配置方式会有写法差异

> `运行 ⌘ + Enter` 查看修改后的效果

> [弹出](https://vipkid-edu.github.io/vf-gui/play/#example/TestDrag)

<iframe
     src="https://codesandbox.io/embed/dragexample-eul9l?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height: 720px; border:0; border-radius: 4px; overflow:hidden;"
     title="dragExample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

