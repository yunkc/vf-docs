# 视频 Video

::: warning ⚠️
VF Engine >= v0.5.71
:::

Video 视频播放

> src 支持 number | string

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| src | number , string |  | 设置视频源，url、
| controls | boolean | true | 设置或返回是否显示默认播放组件
| loop | boolean | false | 设置或返回视频是否应在结束时重新播放
| muted | boolean | false | 设置或返回视频是否静音
| poster | number , string |  | 设置视频初始海报
| currentTime | number |  | 设置或返回视频当前播放进度
| duration | number |  | (只读) 返回视频总长度
| volume | 0-1 | 1 | 设置或返回视频的音量 |


## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| canplaythrough | 当浏览器预计能够在不停下来进行缓冲的情况下持续播放指定的音频/视频时，会发生 canplaythrough 事件 | target |
| canplay | 浏览器可以播放媒体文件了，但估计没有足够的数据来支撑播放到结束，不需要停止缓存更多的内容 | target |
| complete | 视频上下文的呈现完成，可以播放 | target |
| ended | 视频已经播放到达结束点 | target |
| loadeddata | 视频首帧已经加载 | target |
| durationchange | duration 属性的值改变时触发 | target |


## 方法

| 事件名  | 说明 | 参数 |
| --- | --- | --- | 
| play | 开始播放视频 | () |
| pause | 暂停当前播放的视频 | () |
| requestFullScreen | 进入全屏模式 | () |
| exitFullscreen | 退出全屏模式 | () |

## 定义
``` typescript
const video: gui.Video = {
    name: "video",
    type: guiType.Video,
    src: Ids.dinoShow,
};
```
 
## 使用
``` typescript
{
id: "video",
libId: ComponentId.video,
}
```

## 示例

<iframe
     src="https://codesandbox.io/embed/videoexample-id55d?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="videoExample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>