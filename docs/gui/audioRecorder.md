# 录音组件  AudioRecorder


AudioRecorder  录音组件,支持录音、获取blob、获取原始buffer、播放录音、获取音量、获取波形数据
(如需语音评测与语音识别功能，请使用Evaluater组件，详情请钉钉@杨啸 @子夜）

## 库信息
库地址:
> https://s.vipkidstatic.com/vf/plugin/AudioRecorder/0.0.1.js

类名
> AudioRecorder 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| blob | Blob | 无 | 返回编码为wav后的blob |
| buffer | Float32Array | 无 | 返回录音的原始数据 |
| volume | number | 无 | 返回录音的实时音量 |
| byteTimeDomainData | Unit8Array | 无 | 返回录音的实时波形时域数据，长度为2048 |

## 方法

| 方法名 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- | --- |
| start | 无 | 无 | 开始录音 |
| stop | 无 | 无 | 停止录音 |
| play | 无 | 无 | 播放录音 |


## 事件

| 事件名  | 说明 | 参数 | 使用 |
| --- | --- | --- | ---- |
| onError | 错误信息 | error, info | recorder.on('onError', (error, info) => {})|

## 样式

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |



> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const assets: Assets = {
    [Ids.audioRecorder]:{
        type: AssetType.JS,
        url: "//s.vipkidstatic.com/vf/plugin/AudioRecorder/0.0.1.js",
        name: "AudioRecorder",
    }
}

const audioRecorder = {
    type: 'AudioRecorder',
    name: 'AudioRecorder',
}
```

## 使用
```typescript
const root: gui.Custom = {
    type: guiType.CUSTOM,
    interactabled: false,
    children: [
        {
            id: 'audioRecorder',
            libId: Ids.audioRecorder,
        }
    ]
};
```
## 示例

> 示例使用的编程方式，在vf中，通过配置方式会有写法差异

> `运行 ⌘ + Enter` 查看修改后的效果

<!-- > [弹出](https://codesandbox.io/embed/textchoice-ezggp?fontsize=14&hidenavigation=1&theme=dark) -->
>
<iframe src="https://codesandbox.io/embed/audiorecorderexample-0ws0i?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="AudioRecorderExample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

