# 资源
图片、字体、音频、视频、纹理描述、SVG、脚本等资源文件，每个资源对应一个url。例如：jpg的图片，mp3音频文件。
``` json
"assets": {
    "0":{
        "id": 0,
        "name": "bg-homework_frame",
        "type": "image",
        "url": "assets/select1/bg-homework_frame.png"
    },
}
```
资源在数据中的assets节点下，assets是一个map，key是id， 值是一个object，类型如下
``` typescript
interface IAsset {
    id?: string;
    name?: string;
    type: AssetType;
    url: string;
}
```
type 支持一下几种类型
``` typescript
const enum AssetType {
    IMAGE = 'image', // 图片
    SHEET = 'sheet', // 雪碧图
    SVG = 'svg', // svg图
    FONT = 'font', //字体
    AUDIO = 'audio', // 音频
    VIDEO = 'video', // 视频
    JS = 'js', // 脚本
}
```
### 实例
在数据格式中直接写资源
``` json
{
    "name": "STA01",
    "version": "0.2.9",
    "width": 800,
    "height": 640,
    "fps": 24,
    "scaleMode": "showAll",
    "loadMode": "all",
    "baseUrl": "/test/data/",
    "assets": {
        "0":{
            "id": 0,
            "name": "bg-homework_frame",
            "type": "image",
            "url": "assets/select1/bg-homework_frame.png"
        },
        "1":{
            "id": 1,
            "name": "bg-homework",
            "type": "image",
            "url": "assets/select1/bg-homework.png"
        },
        "2":{
            "id": 2,
            "name": "btnsound1",
            "type": "image",
            "url": "assets/select1/btnsound1.png"
        },
        "3":{
            "id": 3,
            "name": "btnsound2",
            "type": "image",
            "url": "assets/select1/btnsound2.png"
        },
        "4":{
            "id": 4,
            "name": "btnsound3",
            "type": "image",
            "url": "assets/select1/btnsound3.png"
        },
        "5":{
            "id": 5,
            "name": "btnsound4",
            "type": "image",
            "url": "assets/select1/btnsound4.png"
        },
        "6":{
            "id": 6,
            "name": "titleBg",
            "type": "image",
            "url": "assets/select1/titleBg.png"
        },
        "7":{
            "id": 7,
            "name": "soundicon",
            "type": "image",
            "url": "assets/select1/soundicon.png"
        },
        "8":{
            "id": 8,
            "name": "soundicon2",
            "type": "image",
            "url": "assets/select1/soundicon2.png"
        },
        "9":{
            "id": 9,
            "name": "test",
            "type": "sound",
            "url": "assets/select1/test.mp3"
        },
        "10":{
            "id": 10,
            "name": "btnbg",
            "type": "image",
            "url": "assets/select1/btnbg.png"
        },
        "11":{
            "id": 11,
            "name": "pen1",
            "type": "image",
            "url": "assets/select1/pen1.png"
        },
        "12":{
            "id": 12,
            "name": "pen2",
            "type": "image",
            "url": "assets/select1/pen2.png"
        },
        "13":{
            "id": 13,
            "name": "compute1",
            "type": "image",
            "url": "assets/select1/compute1.png"
        },
        "14":{
            "id": 14,
            "name": "compute2",
            "type": "image",
            "url": "assets/select1/compute2.png"
        },
        "15":{
            "id": 15,
            "name": "whichone",
            "type": "sound",
            "url": "assets/select1/whichone.mp3"
        },
        "16":{
            "id": 16,
            "name": "next",
            "type": "image",
            "url": "assets/select1/next.png"
        },
        "17":{
            "id": 17,
            "name": "startbg",
            "type": "image",
            "url": "assets/cover/startbg.png"
        },
        "18":{
            "id": 18,
            "name": "ship",
            "type": "image",
            "url": "assets/cover/ship.png"
        },
        "19":{
            "id": 19,
            "name": "ship2",
            "type": "image",
            "url": "assets/cover/ship2.png"
        },
        "20":{
            "id": 20,
            "name": "blink",
            "type": "image",
            "url": "assets/cover/blink.png"
        },
        "21":{
            "id": 21,
            "name": "blink2",
            "type": "image",
            "url": "assets/cover/blink2.png"
        },
        "22":{
            "id": 22,
            "name": "blink3",
            "type": "image",
            "url": "assets/cover/blink3.png"
        }
    }
}
```
在ts2json工具中添加assets

![assets](../assets/ts2json_assets.png)
在assets.ts文件中
``` typescript
import {AssetImage} from "./store";
import {Assets} from '../types/IVFTemplate'

const assets = {
    [AssetImage.Page0]: {
        type: Assets.type.image,
        name: AssetImage.Page0.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/9ed039523d3b4a57b28816516937bb80.jpg?imageView2/2/w/946/format/webp'
    },
    [AssetImage.Page1]: {
        type: Assets.type.image,
        name: AssetImage.Page1.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/30520126b4bb45179fe59ee2a60ffbce.jpg?imageView2/2/w/946/format/webp'
    },
    [AssetImage.Page2]: {
        type: Assets.type.image,
        name: AssetImage.Page2.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/23c393e29c31464c893854be27a06b00.jpg?imageView2/2/w/946/format/webp'
    },
    [AssetImage.Page3]: {
        type: Assets.type.image,
        name: AssetImage.Page3.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/a01c7e4959f74efa9df2f8486742880d.jpg?imageView2/2/w/946/format/webp'
    },
    [AssetImage.Page4]: {
        type: Assets.type.image,
        name: AssetImage.Page4.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/025f90085e73444fbd87cfb83e47a4d2.jpg?imageView2/2/w/946/format/webp'
    },
    [AssetImage.Page5]: {
        type: Assets.type.image,
        name: AssetImage.Page5.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/c75fca4377a84c749cf98af09b291a96.jpg?imageView2/2/w/946/format/webp'
    },
    [AssetImage.Page6]: {
        type: Assets.type.image,
        name: AssetImage.Page6.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/30addbe510f1461e99c04469415df3e8.jpg?imageView2/2/w/946/format/webp'
    },
    [AssetImage.Page7]: {
        type: Assets.type.image,
        name: AssetImage.Page7.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/d4b4b9d7cd624411833eec5aa27741f3.jpg?imageView2/2/w/946/format/webp'
    },
    [AssetImage.Page8]: {
        type: Assets.type.image,
        name: AssetImage.Page8.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/c7fe486254f24e87963bdaa68f96bf3e.jpg?imageView2/2/w/946/format/webp'
    },
    [AssetImage.Page9]: {
        type: Assets.type.image,
        name: AssetImage.Page9.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/7d56ae6279ca4e7a816f2e59db584a43.jpg?imageView2/2/w/946/format/webp'
    },
    [AssetImage.Page10]: {
        type: Assets.type.image,
        name: AssetImage.Page10.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/e1e6c98a5cb145c688517a8221668ec5.jpg?imageView2/2/w/946/format/webp'
    },
    [AssetImage.Page11]: {
        type: Assets.type.image,
        name: AssetImage.Page11.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/89b2ddbcb700422f85fe703c4485f8b6.jpg?imageView2/2/w/946/format/webp'
    },
    [AssetImage.Page12]: {
        type: Assets.type.image,
        name: AssetImage.Page12.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/dc9bbf38aeb440a2af8bcecd0f9b55b0.jpg?imageView2/2/w/946/format/webp'
    },
    [AssetImage.Page13]: {
        type: Assets.type.image,
        name: AssetImage.Page13.toString(),
        url: 'https://teacher-media.vipkid.com.cn/resource/34f6ce19ce604b57ad49d05c7a23d7fe.jpg?imageView2/2/w/946/format/webp'
    },

}

export default assets
```