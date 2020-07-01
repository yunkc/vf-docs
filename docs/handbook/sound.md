# 声音
- 声音使用音轨来播放。
- 一个音轨同一时间只能播放一个声音。
- 如果一个音轨同时播放第二个声音，当前的声音就会停止播放。
- 如果想同时播放多个声音就用多个音轨去播放。
- 如果想播放一个声音时立刻停止其他声音，就用同一个音轨去播放。
- 音轨在VFX中用trackId表示。


## 播放声音
- 播放声音调用方法playSound。 该方法包含配置对象
    + assetId 声音素材的id，支持变量
    + trackId 音轨id，相同的trackId同时只能播放一个声音，关于音轨参考[声音文档](sound.md)
    + time 声音开始播放的延迟时间
    + offset 声音开始播放的偏移位置，进度
    + length 要播放声音的长度
    + mode 标注声音的类型，默认sound。
> 如果音频类型为useNative，不支持`time`,`offset`,`length`.
    
参数类型：

``` typescript 
    {
        assetId: number | any[];
        trackId: string;
        time?: number;
        offset?: number;
        length?: number;
        mode?: 'sound' | 'effect';
    }

```
使用：
``` typescript
@this = {
    this.on("Add", () => {
        this#play.on('click',() => {
            playSound({assetId:1, trackId:1});
        });
    });
}
```

## 暂停声音
- 暂停声音调用方法pauseSound， 该方法包含两个参数
    + assetId 声音素材的id，支持变量
    + trackId 音轨id，相同的trackId同时只能播放一个声音，关于音轨参考[声音文档](sound.md)
``` typescript
@this = {
    this.on("Add", () => {
        pauseSound({assetId:1, trackId:1}); 
    });
}
```

## 恢复暂停声音
- 恢复暂停声音调用方法resumeSound， 该方法包含两个参数
    + assetId 声音素材的id，支持变量
    + trackId 音轨id，相同的trackId同时只能播放一个声音，关于音轨参考[声音文档](sound.md)
``` typescript
@this = {
    this.on("Add", () => {
        resumeSound({assetId:1, trackId:1}); 
    });
}
```

## 扩展声音组件
如果需要细致的操控音频能力，可参考常用组件 [音频](/gui/audio) 。


## 示例

<iframe
     src="https://codesandbox.io/embed/systemsound-ut62j?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="systemSound"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
</iframe>

