# 接口

引擎创建后，可获取的相关周期函数以及可调用API

::: tip 提示💡
如引擎版本大于 engine >= 0.5.5 可在引擎完成初始化后，立即跳转场景，无需加载首个场景。
```
player.play(url);
player.switchToSceneId(sceneId); // switchToSceneIndex(index)
```
:::

## 周期函数

### 日志与错误时的回调
onError(evt: IEvent): void;

### 初始化完成
onInit(): void;

### 数据初始化完成（资源加载完成）
onReady(): void;

### 场景创建开始
::: tip 提示💡
engine >= 0.5.5
:::
onSceneCreate(): void;


### 场景创建完成
onSceneLoad(): void;

### 消息
onMessage(msg: IEvent): void;

### 卸载时触发
onDispose(): void;

## API

### 播放（播放地址|播放数据|恢复播放）
play(src?: any): void;

### 播放携带动态数据
playData(src?: any, data:any): void;

### 卸载

> 如果参数为true，卸载canvas标签

dispose(boolean?: boolean): void;

### 暂停
pause(): void;

### 恢复
resume(): void;

### 重置
reset(): void;

### 发送消息
message(msg: IEvent): void;

### 切换下一个场景
switchToNextScene(transition?: ITransitionData): void;

### 切换上一个场景
switchToPrevScene(transition?: ITransitionData): void;

### ID切换场景
switchToSceneId(sceneId: string, transition?: ITransitionData): void;

### 索引切换场景
::: tip 提示💡
engine >= 0.5.5
:::
switchToSceneIndex(index: number, transition?: ITransitionData): void;
