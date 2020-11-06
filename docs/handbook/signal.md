# 同步

vf引擎内置同步系统，可避免同步逻辑的处理。

## 开启同步

APP创建后，可通过设置uiStage的syncInteractiveFlag属性开启同步

``` js
    this.uiStage.syncInteractiveFlag = true // 开启
```

## 组件设置
``` js
    let img = new vf.gui.Image();
    img.interactabled = true;  //开启事件监听, 默认值为false
    img.id = 'img1';  //设置唯一id，默认值为‘’
    img.syncabled = true;  //组件开启同步，为false时，组件的事件不参与同步，即不会发送信令。默认值为true
    img.resumeabled = true;  //组件开启恢复时事件，为false时，恢复状态下组件不触发历史信令中的交互事件。默认值为true
```

## 发送同步数据

监听onMessage接口获取同步数据。

``` js
    createVF({container:document.getElementById("vf-container")},player=>{
        player.onMessage = vfData => {
            if(vfData.code === 'syncEvent'){
                // 发送同步数据 vfData 到服务器
            }
        }
    });

```

## 接收同步数据

通过服务器接收同步数据后调用`sendToStage`方法通知引擎

``` js
    createVF({container:document.getElementById("vf-container")},player=>{
        player.sendToStage({level:'command',code:'syncEvent', data:服务器传来的vfData数据});
    });

```

## 是否同步触发的操作

在常规`点击`,`拖拽`等事件中，可通过参数`signalling`判断是否为同步操作。

``` js
    rect.on(vf.gui.Interaction.ComponentEvent.DRAG_START, (rect1: vf.gui.Rect, event:any) => {
        if(event.signalling){
            // 同步驱动的操作
        }
    }, this);
```

## 使用VFX音频同步

``` js
var #soundData = {};
$soundData.assetId = $Id;
$soundData.trackId = 1;
$soundData.signalling = true;
```

## 自定义事件同步

发送 `sendCustomEvent` 事件

``` js
//vfx
system.emit('sendCustomEvent',data);

//js
this.stage.syncManager.sendCustomEvent({
    code: code,
    level: 'command',
    data: data
})
```

接收 `receiveCustomEvent` 事件

``` js
//vfx
system.on('receiveCustomEvent',this.onCustomEvent);

//js
this.stage.on('receiveCustomEvent', data =>{
    console.log(data.data);
});
```

## 发送心跳

主要目的用于恢复时，将时间对齐到最后一个时间点，而不是最后一条操作的时间，解决如果最后一条操作触发了动画，恢复时动画会播放的问题。一般在场景退出前(翻页前)调用。
```
syncManager.sendHeartEvent()
```

## 自动心跳
vf引擎同步木块默认开启自动心跳，以便维持一个自动执行的状态。自动心跳每0.5s发送一次，默认发送10次。触发机制为:
1.场景加载成功后，默认发送心跳
2.场景恢复历史状态后，默认发送心跳
3.场景中有点击（鼠标按下、鼠标抬起）操作时，默认发送心跳
```
syncManager.autoHeartEvent = false; //关闭自动心跳
```

## 注意事项

1. 凡是需要输入操作的组件，也就是`interactable=true`的组件，都需要一个`唯一`的`id`，否则无法同步。
1. 事件回调方法两个参数：（target,event）,其中event.signalling标识是否为信令触发，如果有需求，业务上以此变量来做分区。
2. 不能使用js原生的时间和日期函数，如setTimeout，setInterval，new Date（）等。可使用vf.gui.Scheduler.setTimeout, vf.gui.Scheduler.setInterval, vf.gui.Scheduler.setEnterFrame代替。