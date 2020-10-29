# 组件插件

目前插件可以分为两类，扩充组件、扩充滤镜。

## 前置工作

1. 克隆项目 `git clone https://github.com/vipkid-edu/vf-gui-plug.git`;

1. 安装 vs code 

1. 安装 vs code 插件 Live Server (也可以安装其他http服务软件)

1. 项目目录执行 npm i

1. packages 目录中建立相关 ts 文件 , 参考 `TestButton` 示例 , `src/index`中的类名要与目录名一致, 区分大小写。

1. 修改 config.json 中的配置为你的目录名 , 设置后建议重新启动 `vs code` ,避免引用错误

1. 执行 npm run dev 开启编译监听

1. 执行 npm run test 开启测试项目编译监听

1. vs code 中，选择 index.html 右键，选择 open with Live Server 启动服务


## 示例

需要继承 `gui.DisplayObject` 或其子类， 具体的写法可参考常用组件。 如，我们希望给Button组件扩充一个设置图标功能，参考代码如下：

``` typescript
export class ButtonIcon extends gui.Button{

    /**
     * 构造函数不能包含任何参数，需要以set get实现
     */
    public constructor() {
        super();
        this.icon = new gui.Image(); 
        this.container.addChild(this.icon); //容器
    }

    public readonly icon: gui.Image;
    private _iconSrc:string = '';

    public get iconSrc() {
        return this._iconSrc;
    }
    public set iconSrc(value) {
        this._iconSrc = value;
        this.icon.src = value;
        this.invalidateSize();
        this.invalidateDisplayList(); //触发更新显示列表
    }

    /** * 更新显示列表 */
    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void {
        super.updateDisplayList(unscaledWidth,unscaledHeight);
        this.icon.x = 100;
        this.icon.y = 100;
    }

    public release(){
        super.release();
        const icon = this.icon;
        if(icon && icon.parent){
            icon.parent.removeChild(icon).destroy();
        }
        this.offAll();
    }
}
```

## 使用

需要发布到网络后可配置使用,使用示例：

> 文件名与类名保持一致

``` json
// 资源路径设置
"assets": {
        "id":{
            "name": "ButtonIcon",
            "type": "js",
            "url": "http://www.xxxx.com/ButtonIcon.js"
        },
}

// gui 自定义组件创建
"components": {
    "id": {
        "name": "xxxx",
        "type": "ButtonIcon",
        "iconSrc": "./assets/icon.png"
    },
}
```