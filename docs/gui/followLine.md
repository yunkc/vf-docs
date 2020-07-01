# 画线板 FollowLine

FollowLine 画线板，可以擦除以及重置。 

> 如果需要网络通信同步画线，还可以输出经过处理的压缩数据。

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| lineColor | number | 0x000000 |  设置线条颜色  |
| source | string | string[] |  | 设置数据,需要网络同步时 |
| role | S,T | T | 设置角色 |
| isErasing | boolean | false | 设置开启擦除模式 |
| isPause | boolean | fasle | 设置暂停，当与拖拽发生互斥时可设置 |

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
|  COMPLETE | 完成一次画线时 | event,target,data |

``` typescript 
data = operate + role + lineId + '|' + data;
export const enum Operate {
    add = '1',
    remove = '2',
    clear = '3',
};
```

## 样式

> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const followLine: gui.FollowLine = {
    name: "followLine",
    type: guiType.FollowLine
};
```

## 使用
``` typescript
{
    id: "followLine",
    libId: ComponentId.followLine,
    role: "T",
    style:{
        width: 300,
        height:200,
        backgroundColor: '#ffffff';
    }
}
```

## 示例

> 示例使用的编程方式，在vf中，通过配置方式会有写法差异

> `运行 ⌘ + Enter` 查看修改后的效果

> [弹出](https://vipkid-edu.github.io/vf-gui/play/#example/TestFollowLine)

<iframe
     src="https://codesandbox.io/embed/followlineexample-sr9f2?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="followLineExample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>