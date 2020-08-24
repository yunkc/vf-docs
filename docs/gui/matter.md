# 物理引擎 Matter


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
        gravityScale: 1
    },
    bodies: [
            {
                id: 0,
                shape: ShapeEnum.rectangle,
                width: 200, 
                height: 32,
                displayObject: 'this#rect',
                x: 200,
                y: 200,
                isStatic: true
            },
            {
                id: 1,
                shape: ShapeEnum.rectangle,
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
                shape: ShapeEnum.circle,
                radius: 10,
                displayObject: 'this#circle',
                x: 160,
                y: 210,
                group: -5
            }
    ],
    constraints: [
            {
                ids: [301],
                bodies: [0, 2],
                stiffness: 1,
                pointBX: -50,
                pointBY: 0,
                length: 0
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

