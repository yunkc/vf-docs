# 粒子 Particles


Particles 可实现丰富的粒子效果

## 插件地址

> [https://s.vipkidstatic.com/vf/plugin/Particles/0.0.1.js]()

## 类名
> Particles 

## 编辑器

> [在线粒子编辑工具](https://vipkid-edu.github.io/vf-docs/particle)

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| sourceData | number , string |  | 设置数据源
| sourceImage | number , string |  | 设置图片
| autoPlay | boolean | false | 是否自动播放


## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| particles_start | 开始播放时，触发 |  |
| particles_complete | 完成指定播放时间后，触发 |  |


## 方法

| 事件名  | 说明 | 参数 |
| --- | --- | --- | 
| play | 播放，参数-1为始终播放，不传参数读取默认配置中参数 | (number `|` undefined) |
| pause | 暂停 | () |
| stop | 停止 | () |


## 资源

```json
assets:{
    "Particles": {
        "type": "js",
        "url": "https://s.vipkidstatic.com/vf/plugin/Particles/0.0.1.js",
        "name": "Particles"
    },
    "Particles_json": {
        "type": "json",
        "url": "https://vipkid-edu.github.io/vf-gui/play/assets/firecrackerCaidai.json",
        "name": "Particles_json"
    },
    "Particles_png": {
        "type": "image",
        "url": "https://vipkid-edu.github.io/vf-gui/play/assets/firecrackerCaidai.png",
        "name": "Particles_png"
    }
}

```

## 定义
``` typescript
const ParticlesStyle: gui.Particles = {
  type: 'Particles',
};
```
 
## 使用
``` typescript
{
    id: "particles1",
    libId: Ids.particles,
    sourceData: 'Particles_json',
    sourceImage: 'Particles_png',
    autoPlay: true
}
```

## 示例

<iframe
     src="https://codesandbox.io/embed/particles-ub4hq?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="Particles"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>