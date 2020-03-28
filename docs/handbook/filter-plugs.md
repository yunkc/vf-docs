# 滤镜插件

滤镜插件支持shader自定义滤镜

## 前置工作

参考 [组件插件](handbook/gui-plugs.html)

## 示例

需要继承 `gui.Filter` ，参考代码如下：

``` typescript
import fragment from './fragment.glsl';
export class FilterAlpha extends gui.Filter
{
    /**
     * 构造函数不能包含任何参数，需要以set get实现
     */
    constructor(){
        super(gui.Filter.defaultFilterVertex, fragment, { uAlpha: 1 });
    }

    get alpha(): number
    {
        return this.uniforms.uAlpha;
    }

    set alpha(value)
    {
        this.uniforms.uAlpha = value;
    }
}
```

#### ./fragment.glsl 内容

```
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
```

## 使用

需要发布到网络后可配置使用,使用示例：

> 文件名与类名保持一致

``` json
// 资源路径设置
"assets": {
        "id":{
            "name": "FilterAlpha",
            "type": "js",
            "url": "http://www.xxxx.com/FilterAlpha.js"
        },
}

// VFX 使用：
组件.style.filter.FilterAlpha.alpha = 0.5; 

// json 使用
"components": {
    "id": {
        "name": "xxxx",
        "type": "Button",
        "style":{
            "filter":{
                "FilterAlpha":{
                    "alpha":0.5
                }
            }
        }
    },
}
```