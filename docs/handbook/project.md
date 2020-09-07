# 独立项目

独立项目是指没有使用player，使用vfEngine + vfGUI创建的项目或插件项目。

## 使用 Launcher 创建实例

暂缺

## 配置CDN

`VF版本 >= v0.8.0`

### 路径设置

    vf.utils.CDNS.default = [url1,url2];
    vf.utils.CDNS.image = [url1,url2];
    vf.utils.CDNS.media = [url1,url2];

加载过程中会自动识别文件扩展名，并调用CDNS对应字段进行加载。

### 重试次数 

    vf.utils.FailureRetry[0] = 3; 

3为需要修改的重试次数

## 文件加载

`VF版本 >= v0.8.0`

    vf.utils.readFileSync

接口适用于非媒体文件加载

### 使用示例

```
async function load(){
    const urls = ['url1','url2'];
    urls.forEach(value=>{
        const data = await vf.utils.readFileSync(value, {}).catch((value) => { console.log('异常'); });
        if(data){
            console.log(data);
        }
    });
}
```

### 加载GUI模块或插件

```
async function load(){
    const cls = await vf.utils.readFileSync(url, { moduleName: '插件类名' }).catch((e: IEvent) => {
        console.log('异常'); });
    });
    if(cls){
        const plug = new cls();
    }
}

```

### 获取已经加载的GUI或插件模块
```
    const plugClass = vf.utils.getGuiModule('plugClassName');
    if(plugClass){
        return new plugClass();
    }
```

## 获取文件后缀名

`VF版本 >= v0.8.0`

    vf.utils.getExtension

## 获取设备信息

`VF版本 >= v0.8.0`

    vf.utils.getSystemInfo()

> 文档列举的并非全部，可通过控制台打印更多属性

### 获取设备名

    vf.utils.getSystemInfo().device.name

1. iPhone
1. iPod Touch
1. iPad
1. Android Device
1. Windows Computer
1. Apple Computer

> 在APP端中，获取的并非上述名称，如iPad的可能为iPad 6。

### 获取设备类型

    vf.utils.getSystemInfo().device.type

1. 模拟器：emulator
1. 移动设备：mobile
1. 平板设备：tablet
1. iPodTouch设备：media
1. 台式电脑：pc

### 获取设备版本

    vf.utils.getSystemInfo().device.version

本接口在APP端中可使用。

## 缓动动画
```
// Tween(对象)).to({ 属性: 目标值 }, 持续时间)

new vf.gui.Tween(image).to({ rotation: -85 }, 2000)
            .repeat(Infinity)[可选，重复次数]
            .easing(vf.gui.Easing.Linear.None)[可选，加速度函数]
            .yoyo(true) [可选，反转动画]
            .delay(0) [可选，延迟播放，毫秒]
            .on(vf.gui.Tween.Event.update,(obj: any) => {})[可选，动画事件]
            .start();

```

### 快速使用
```
vf.gui.Tween.to(image,{ rotation: -85 },2000).start();
```

## 事件

事件有添加，就要有卸除，避免造成泄漏，一般移除卸载onRelease方法中

点击事件类型： vf.gui.Interaction.TouchMouseEvent.xxxx
拖拽事件类型： vf.gui.Interaction.ComponentEvent.DRAG_XXXX

### 事件监听
```
const rect = new vf.gui.Rect();
rect.interactabled = true;
rect.on(vf.gui.Interaction.TouchMouseEvent.onClick, this.onClick, this);

private onClick(e: vf.gui.Interaction.InteractionEvent) {
    console.log(e.type);
}
```
### 事件移除
```
rect.off(vf.gui.Interaction.TouchMouseEvent.onClick, this.onClick, this)
```
### 移除全部事件
```
rect.offAll();
```

## 坐标转换

事件中的坐标为全局坐标，如果转换为本地坐标，可执行下面的方法：
```
private onClick(e: vf.gui.Interaction.InteractionEvent) {
    console.log(vf.gui.Utils.toLocal(e.data.global,e.target));
}
```

### 方法
vf.gui.Utils.toLocal(全局坐标，本地显示对象)
