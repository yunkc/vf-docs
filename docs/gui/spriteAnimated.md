# 序列帧 SpriteAnimated

SpriteAnimated 序列图动画，支持数组形式设置，或通过TexturePacker等工具生成等，导出时可选pixi

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| animationSpeed | number | 0.1 |  设置动画播放速度  |
| animationName | string | default | 设置要播放的动画名 |
| src | Texture[],Spritesheet |  | 设置动画源 |
| loop | boolean | false | 设置循环播放 |
| loopCount | number | 0| 设置循环播放次数，0为不限制 |
| playing | boolean | false | 获取是否播放中 |
| anchorX | number | 0| 设置内部偏移 |
| anchorY | number | 0 | 设置内部偏移 |
| autoPlay | boolean | false | 设置自动播放 |
| isPlay | boolean | | 设置播放或暂停 |


## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
|  LOOP | 循环完成时 | event,target |
|  COMPLETE | 动画播放完成时 | event,target |
|  CHANGE | 动画名改变时 | event,target,animationName|

## 样式

> [基础样式](/handbook/style.html#样式)

## 定义
``` typescript

const PlayAudio: gui.SpriteAnimated = {
    name: "PlayAudio",
    type: guiType.SpriteAnimated,
    src: Asset.AudioAnimaltion,
};

```

## 使用
``` typescript
{
    id: "PlayAudio",
    libId: ComponentId.PlayAudio,
    x: 441,
    y: 20,
    loop: true,
    loopCount: 2,
    animationSpeed: 0.05,
    animationName: "play1",
    isPlay: false
}
```

## Spritesheet json 

``` json
 {"frames": {

	"1_role2-sheet0.png":
	{
		"frame": {"x":254,"y":1,"w":255,"h":391},
		"rotated": false,
		"trimmed": true,
		"spriteSourceSize": {"x":19,"y":3,"w":255,"h":391},
		"sourceSize": {"w":274,"h":394},
		"anchor": {"x":0.478102,"y":0.997462}
	},
	"1_role2-sheet1.png":
	{
		"frame": {"x":1,"y":1,"w":251,"h":394},
		"rotated": false,
		"trimmed": true,
		"spriteSourceSize": {"x":0,"y":0,"w":251,"h":394},
		"sourceSize": {"w":274,"h":394},
		"anchor": {"x":0.485401,"y":0.997462}
	},
	"1_role2-sheet2.png":
	{
		"frame": {"x":511,"y":1,"w":251,"h":391},
		"rotated": false,
		"trimmed": true,
		"spriteSourceSize": {"x":0,"y":3,"w":251,"h":391},
		"sourceSize": {"w":274,"h":394},
		"anchor": {"x":0.485401,"y":0.997462}
	}},
"animations": {
	"play1": ["1_role2-sheet0.png"],
	"play2": ["1_role2-sheet1.png","1_role2-sheet2.png"]
},
"meta": {
	"app": "https://www.codeandweb.com/texturepacker",
	"version": "1.0",
	"image": "1_role2.png",
	"format": "RGBA8888",
	"size": {"w":763,"h":396},
	"scale": "1",
	"smartupdate": "$TexturePacker:SmartUpdate:8d0d27b919b4fda6822284d52e1d67cd:c415d34ddf0629ae063141aa6244f453:ad483e3d8905e1e227b0a04d222a3ac4$"
}
}
```


## 示例

> 可点击左上角菜单，查看其他定义类

<iframe
     src="https://codesandbox.io/embed/spriteanimated-jem36?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents.ts&theme=dark"
     style="width:100%; height:720px; border:0; border-radius: 4px; overflow:hidden;"
     title="spriteanimated"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>