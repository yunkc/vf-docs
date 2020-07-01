# 音频 Audio

Audio 音频播放

> src 支持 number | string | arrayBuffer | 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| src | number , string , arrayBuffer |  | 设置图片源，url、vf资源id、Base64、arrayBuffer |
| autoplay | boolean | false | 加载完成后是否自动播放 |
| loop | boolean | false | 设置或返回音频是否应在结束时重新播放 |
| playbackRate | number | 1 | 属性设置或返回音频的当前播放速度 |
| volume | 0-1 | 1 | 设置或返回音频的音量 |


## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| canplaythrough | 当浏览器预计能够在不停下来进行缓冲的情况下持续播放指定的音频/视频时，会发生 canplaythrough 事件 | target |
| play | 当音频已开始或不再暂停时 | target |
| pause | 当音频已暂停时 | target |
| timeupdate | 当目前的播放位置已更改时 | target |
| ended | 当目前的播放列表已结束时 | target |
| dispose | 当在音频发生错误时 | target |


## 方法

| 事件名  | 说明 | 参数 |
| --- | --- | --- | 
| play | 开始播放音频 | (time?: number, offset?: number, length?: number) [time] X秒后开始播放声音。默认情况下立即停止 [offset] - 声音的开始偏移值  [length] - 声音持续时间 |
| stop | 开始播放音频 | (time?: number) [time] X秒后停止声音。默认情况下立即停止 |
| pause | 暂停当前播放的音频 | () |
| dispose | 销毁当前音频对象 | () |

## 定义
``` typescript
const audio: gui.Audio = {
    name: "audio",
    type: guiType.Audio,
    src: Ids.dinoSay,
};
```

## 使用
``` typescript
{
id: "audio",
libId: ComponentId.audio,
}
```

## 示例

<iframe
     src="https://codesandbox.io/embed/audio-7bqb7?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="Audio"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>