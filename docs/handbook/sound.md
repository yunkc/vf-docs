# 声音
播放声音需要使用动作脚本 详见 action.md[](./action.md)文档

1. 播放声音
```
@this = {
    this.on("Add", () => {
        // 第一个参数是声音素材的id，支持变量
        // 第二个参数是音轨 trackId，相同的trackId同时只能播放一个声音
        // 第三个参数是可选参数，用来使用原生api播放声音，参数必须是类型：
        // {
        //     trackId?: string;
        //     useNative?: boolean; 
        //     mode?: 'sound' | 'effect';
        // }
        playSound("sound1", 1, {useNative: true,mode: 'sound'}); 
    });
}
```

2. 暂停声音
```
@this = {
    this.on("Add", () => {
        // 第一个参数是声音素材的id，支持变量
        // 第二个参数是音轨 trackId，相同的trackId同时只能播放一个声音
        pauseSound("sound1", 1); 
    });
}
```

3. 恢复暂停声音
```
@this = {
    this.on("Add", () => {
        // 第一个参数是声音素材的id，支持变量
        // 第二个参数是音轨 trackId，相同的trackId同时只能播放一个声音
        resumeSound("sound1", 1); 
    });
}
```

#### 理解声音的播放
在实际使用中，我们有时需要同时播放多个声音，有时需要在播放一个声音时立刻停止其他的声音。
为了实现这种效果，我们引入音轨的概念。可以理解声音是跑在音轨上的。一个音轨只能同时播放一个声音。
如果一个音轨播放下一个声音，当前的声音就会停止。 音轨在vfx中用trackId表示。
如果想同时播放多个声音就用多个音轨去播放。
如果想播放一个声音时立刻停止其他声音，就用同一个音轨去播放。