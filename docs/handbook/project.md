# 独立项目

独立项目是指没有使用player，使用vfEngine + vfGUI创建的项目或插件项目。

## 使用 Launcher 创建实例

1. 安装依赖包

    ```
    npm i @vf.js/launcher --save-dev
    ```

1. 配置 `tsconfig.json` 中的 types 字段,增加 vf 相关库
    ```
    "types": [
        "@vf.js/vf",
        "@vf.js/gui",
    ],      
    ```

1. index.html 中引入 launcher.min.js 或代码中 `import { createVF } from launcher`
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>vf-engine</title>
    </head>
    <body>
        <script src='node_modules/@vf.js/launcher/dist/launcher.js'></script>
        <div id="vfApp" style="width: 100%; height: 100%; position: absolute;margin:0;overflow: hidden;"></div>
    </body>
    <script type="module">
        createVF({
            container: document.getElementById("vfApp"),  // 需要放置的容器
            debug: true,
            showFPS: false,
            resolution: window.devicePixelRatio || 1,
            exclude:['player'], // 必填
            width:1366, // 设计尺寸
            height:768, // 设计尺寸
            // libs:["./dist/main.js"], // 你项目编译后的入口文件,需申明全局变量，如 `Main`, 也可通过其他方式引入，此处可不写。
        }, function (engine) {

            // 示例 1
            const label = new vf.gui.Label();
            label.text = "hello world";
            label.style.justifyContent = 'center';
            label.style.alignContent = 'center';
            label.style.fontSize = 34;
            engine.uiStage.addChild(label);

            // 示例 2， 通过独立文件 main.js
            // var main = new Main(engine);
            // 初始化你的项目，engine 中的类型为 EngineAPI. 具体查看 'node_modules/@vf.js/launcher/launcher.d.ts
        });

    </script>

    </html>

    ```
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
            .start();//计算delay的播放
            //.play(); //立即播放 忽略delay

```

### 快速使用
```
vf.gui.Tween.to(image,{ rotation: -85 },2000).start();
```

## 时间轴动画
``` js
// TimeLine().to(对象，持续时间，{ 属性: 目标值 },放置时间轴位置(毫秒))

let timeLine = new vf.gui.TimeLine({
            repeat: 2, [可选，重复次数吗，-1为无限循环，默认为0]
            paused: false,[可选，初始是否暂停，默认为false]
            delay: 0,[可选，延迟播放，毫秒]
            yoyo: true,[可选，反转时间轴]
            easing:vf.gui.Easing.Linear.None,[可选，每个子动画默认加速度函数]
            onStart: () => {},[可选，时间轴正向开始播放回调]
            onRepeat: () => {},[可选，时间轴循环播放回调] 
            onComplete: () => {},[可选，非无限循环播放完成回调]
            onReverseComplete: () => {},[可选，非无限循环播放逆向完成回调]
            onUpdate: () => {}[可选，时间轴帧播放回调]
            onStartParams:null,[可选]
            onRepeatParams:null,[可选]
            onCompleteParams:null,[可选]
            onReverseCompleteParams:null,[可选]
            onUpdateParams:null,[可选]
        }).to(image, 1000, {
                x: 200, ease: vf.gui.Easing.Linear.None,
                onStart: () => {},[可选，正向开始播放回调]
                onUpdate: () => {},[可选，帧播放回调]
                onComplete: () => {},[可选，正向播放完成回调]
                onReverseComplete: () => {},[可选，逆向播放完成回调]
                onStartParams:null,[可选]
                onUpdateParams:null,[可选]
                onCompleteParams:null,[可选]
                onReverseCompleteParams:null,[可选]
            }, 0)
            .to(image, 500, { alpha: 0 }, 1000)
            .to(image1, 500, {
                y: 800, ease: vf.gui.Easing.Cubic.InOut,
                onUpdate: function () {}
            }, 1000)
            .to(image, 500, { x: 500 }, 1500)
            .to(image2, 1000, { x: 500 }, 2000)
            .to(image2, 2000, { y: 800 }, 1500)
            .to(image1, 2000, { scaleX: 0.5 }, 4000);

```
``` js
    //播放
    timeLine.play();
    //跳转（不改变当前播放状态）
    timeLine.seek(1000);
    //逆向播放
    timeLine.reverse();
    //暂停
    timeLine.pause(); 或 timeLine.addPause(3000, callBack, callBackParams)
    //卸载
    timeLine.release();
    timeLine = null;
```

## 路径动画
``` js
    const p = "M60 171Q58 181 54 193Q26 255 16 277Q22 349 32 371Q10 457 66 477"; //svg格式 M：moveto L：lineto Q：二次贝塞尔曲线 C：三次贝塞尔曲线
    const p1 = new vf.gui.NumberFrame(); 
    p1.time = 0;    //时间戳
    p1.ease = vf.gui.Easing.Quartic.InOut; //p1到p2的移动线性函数
    p1.value = 0;   //起始值   （0，1）
    const p2 = new vf.gui.NumberFrame();
    p2.ease = vf.gui.Easing.Quartic.In;//p2到p3的移动线性函数
    p2.time = 1000;
    p2.value = 0.8;
    const p3 = new vf.gui.NumberFrame();
    p3.time = 3000;
    p3.value = 1;
    // pa.totalTime = 30000;
    const path = vf.gui.Animation.play("path", //动画类型
                                        sprite, //对象
                                        { frames: [p1, p2, p3], loop: false, path: p }, //参数
                                        -1, //路径动画此参数无效
                                        () => { //loop === false时的完成回调
                                            console.log("播放完成");
                                        });
    //销毁
    path.release(); //或者 vf.gui.Animation.releaseAll();  清除所有动画

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

全局 to 本地
```
vf.gui.Utils.toLocal(全局坐标，本地显示对象)
```

本地 to 全局
```
vf.gui.Utils.toGlobal(本地坐标，本地显示对象)
```
