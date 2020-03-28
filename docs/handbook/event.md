# 事件

事件分三种，自定义事件，系统事件，动画中的事件

#### 自定义事件

自定义事件是在动作脚本中使用的自定义事件，详见 [动作脚本VFX文档](action.md#add)

#### 动画中的事件

动画中的事件，定义在事件时间轴里，详见 [动画文档](./animation.md) 中 动画中的事件部分


#### 系统事件

系统事件是vf引擎用来和外界沟通的桥梁

系统事件的定义：
``` typescript
export default interface IEvent {
    code: string;
    level: EventLevel;
    data: any;
    target?: any;
    message?: string;
    type?: string;
}
```
事件的level：
``` typescript
export const enum EventLevel {
    /**
     * 状态
     */
    STATUS = 'status',

    /**
     * 命令
     */
    COMMAND = 'command',

    /**
     * 警告
     */
    WARNING = 'warning',

    /**
     * 错误
     */
    ERROR = 'error',

    /**
     * 原生
     */
    NATIVE = 'native',
    // ...
}
```
