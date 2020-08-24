# 文本选择插件 TextChoice


Matter  轻量级物理引擎

## 库信息
库地址:
> https://s.vipkidstatic.com/vf/plugin/Matter/0.0.1.js

类名
> Matter 

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| options |WorldOptions |  | 物理世界参数 |
| bodies |BodyOptions[] |  | 要添加到物理世界的刚体数组|
| constraints |ConstraintOptions[] |  | 刚体之间的约束|

## 方法

| 方法名 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- | --- |
| newBody |options: BodyOptions / BodyOptions[] | Body[] | 新增一个或多个body |
| newConstraint |options: ConstraintOptions | ConstraintOptions[] | 新增一个或多个约束 |
| getBodyById |id:number | Body | 获取body |
| removeBodyById |id:number | 无 | 删除body|
| removeConstraintById |id:number | 无 | 删除约束|
| stack | x: number, y: number, rows: number, columns: number, option: BodyOptions, color?: number, src?: number/string/vf.Texture | 无 | 批量生成body|
| emitBodies | x: number, y: number, num: number, rate: number, option: BodyOptions, color?: number, src?: number/string/vf.Texture | 无 | 按一定频率生成body|
| cloth | x: number, y: number, width: number, height: number, stiffness: number, src: number/string/vf.Texture| 无 | 生成一块软体布|

## 事件

| 事件名  | 说明 | 参数 | 使用 |
| --- | --- | --- | ---- |
| collisionStart | 刚体开始碰撞回调 | bodyA bodyB | matter.world.on('collisionStart', (bodyA, bodyB)){}|
| collisionEnd | 刚体结束碰撞回调 | bodyA bodyB | matter.world.on('collisionEnd', (bodyA, bodyB)){}|

## 样式

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |



> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript
const assets: Assets = {
    [Ids.matter]:{
        type: AssetType.JS,
        url: "//s.vipkidstatic.com/vf/plugin/Matter/0.0.1.js",
        name: "Matter",
    }
}

const matter = {
    type: 'Matter',
    name: 'Matter',
    options:{
            positionIterations: 6,  //(选填)执行每个更新的位置迭代次数.值越高仿真效果越好，性能为代价 
            velocityIterations: 4, // (选填)执行每个更新的速度迭代次数。值越高，仿真的质量越高，性能为代价
            constraintIterations: 2,// (选填)执行每个更新的约束迭代次数.值越高仿真效果越好，性能为代价
            enableSleeping: false,     //(选填)是否支持休眠
            timestamp: 0,  //(选填)更新时间戳
            timeScale: 1,  //(选填)时间缩放比例
            gravityX: 0; //(选填)重力x轴分量
            gravityY: 1, //(选填)重力y轴分量
            gravityScale: 0.001, //(选填)重力缩放
            mouseConstraint: false //(选填)鼠标干预
    },
    bodies: [
            {
                id: 0,
                shape: 'rectangle',  //  (必填)形状 --rectangle, circle, polygon, vertices
                width: 200,          // (必填)刚体宽度
                height: 32,          //(必填)刚体高度
                displayObject: 'this#rect',  //(必填)显示对象
                x: 200,    //(必填)坐标x
                y: 200,    //(必填)坐标y
                isStatic: true,  //(选填)是否静态刚体
                isSensor: false,  //(选填)是否传感器，传感器只感知碰撞，不做碰撞拦截
                restitution: 0, //(选填)弹力
                friction: 0.001, //(选填)摩擦力
                frictionStatic: 1, //(选填)静摩擦
                frictionAir: 0.01,  //(选填)空气摩擦（空气浮力）
                group: -1,  // (选填)碰撞分组
                mask: 0xffffff,  //(选填)碰撞掩码
                category: 1, //(选填)碰撞类别
                collision: true, //(选填)是否开启碰撞检测
                density: 0.001,  //(选填)密度
                forceX: 0, //(选填)x轴受力
                forceY: 0, //(选填)y轴受力
                torque: 0, //(选填)转向力（扭矩）
                timeScale: 1  //(选填)时间缩放
            },
            {
                id: 1,
                shape: 'rectangle',
                width: 1000,
                height: 20,
                displayObject: 'this#title',
                isStatic: true,
                angle: 0.1,
                x: 300,
                y: 500
            },
            {
                id: 2,
                shape: 'circle',  //(必填)圆
                radius: 10,       //(必填)刚体半径
                displayObject: 'this#circle',
                x: 160,
                y: 210,
                group: -5
            },
            {
                id: 3,
                shape: 'polygon',  //(必填)正多边型
                radius: 10,
                sides: 5,  //(必填)正多边型边数
                displayObject: 'this#circle',
                x: 160,
                y: 210,
                group: -5
            }
    ],
    constraints: [
            {
                ids: [301],      //(必填)约束的id数组
                bodies: [0, 2],  //(必填)约束的body数组， 分别表示bodyA、bodyB，如果多余2个，则表示两两之前互相约束
                stiffness: 1,    //(必填)约束力  1-完全约束
                pointAX: -50,    //(选填)bodyA约束点相对于锚点的偏移
                pointAY: 0,      //(选填)bodyA约束点相对于锚点的偏移
                pointBX: -50,    //(选填)bodyB约束点相对于锚点的偏移
                pointBY: 0,      //(选填)bodyB约束点相对于锚点的偏移
                length: 0        //(选填)约束的长度
            }
    ]
```

## 使用
```typescript
const root: gui.Custom = {
    type: guiType.CUSTOM,
    interactabled: false,
    children: [
        {
            id: 'matter',
            libId: Ids.matter,
        }
    ]
};
```
## 示例

> 示例使用的编程方式，在vf中，通过配置方式会有写法差异

> `运行 ⌘ + Enter` 查看修改后的效果

<!-- > [弹出](https://codesandbox.io/embed/textchoice-ezggp?fontsize=14&hidenavigation=1&theme=dark) -->
>
<iframe src="https://codesandbox.io/embed/matterexample-forked-egr1w?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="matterExample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

