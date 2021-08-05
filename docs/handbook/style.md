# 属性与样式

属性与样式是组件最基本的成员，此处列举的所有组件可用。 每个组件还可能存在一些自有的属性与样式，参考[常用组件](/gui/label.html)。

设置style的相关属性会覆盖属性`x,y,scaleX,scaleY,alpha`,如果没有布局需求，可不设置style。

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name |string |  | 自定义名字 |
| uuid |number |  | 唯一id |
| x | number | 0 | 设置x坐标,通过style.top会覆盖x |
| y | number | 0 | 设置y坐标,通过style.left会覆盖y  |
| scaleX | number | 1 | 设置缩放 |
| scaleY | number | 1 | 设置缩放  |
| alpha | number | 1 | 设置透明度  |
| interactabled | boolean | false | 开启交互事件流，具体可参考点击章节 |
| interactive | boolean | false | interactabled = true 后，当前对象是否可以交互 |
| interactiveChildren | boolean | true | 开启对象子元素交互 |
| enabled | boolean | true | 禁止当前对象与子对象交互，设置enabled后，interactive* 失效 |
| visible | boolean | true | 对象显示或隐藏 |
| blendMode | BLEND_MODES |  | 设置混合模式 |
| dragOption | BaseDrag |  | 拖动设置，具体可参考拖动章节,[参考示例](/handbook/drag.html) |
| filterBlur | number |  | 设置模糊强度，更多滤镜，参考插件-滤镜 |
| filterGrayscale | number |  | 设置灰度，更多滤镜，参考插件-滤镜 |
| style | number,string |  | 设置对象的样式与布局，参考样式属性 |
| hitArea | object | 设置点击热区{x,y,width,height,type} | 设置热区(按钮无效) [参考示例](/handbook/style.html#hitarea)|

## 样式

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| top | number,string |  | 设置定位元素的上外边距边界与其容器上边界之间的偏移 |
| left | number,string |  | 设置定位元素左外边距边界与其容器左边界之间的偏移 |
| right | number |  | 设置定位元素右外边距边界与其容器右边界之间的偏移 |
| bottom | number |  | 设置定位元素下外边距边界与其容器下边界之间的偏移 |
| width | number |  | 设置或读取元素的宽度 |
| height | number |  | 设置或读取元素的高度 |
| scaleX | number | 1 | 缩放 |
| scaleY | number | 1 | 缩放 |
| skewX | number | 1 | 设置元素水平拉伸扭曲（角度） |
| skewY | number | 1 | 设置元素垂直拉伸扭曲（角度） |
| rotate | number | 0 | 设置元素旋转 （角度） |
| rotation | number | 0 | 设置元素旋转 （角度） |
| pivotX | number | 0 | 轴点 像素值 |
| pivotY | number | 0 | 轴点 像素值 |
| alpha | number | 1 | 表示指定对象的 Alpha 透明度值。有效值为0（完全透明）～ 1（完全不透明） |
| justifyContent | flex-start，flex-end，center |  |  在容器里面的水平位置（左中右） |
| alignContent | flex-start，flex-end，center | 0 | 在容器里面的垂直位置（上中下）  |
| tint | number | 0 | 调整元素的色调，取消设置0xFFFFFF |
| visible | boolean | true | 设置隐藏元素 |
| visibility | boolean | true |  设置隐藏元素 |
| backgroundColor | number |  | 设置元素背景色 |
| backgroundRadius | number | 0 | 设置元素背景圆角 |
| backgroundImage | string,Texture |  | 设置元素背景图像 |
| backgroundPositionX | number | 0 | 设置元素背景图像X轴位置 |
| backgroundPositionY | number | 0 | 设置元素背景图像Y轴位置 |
| backgroundSize | number[] |  | 设置 backgroundImage 后， 规定背景图像的尺寸。 [width,height] |
| backgroundRepeat |  no-repeat,repeat,no-repeat | no-repeat | 设置 backgroundImage 后，设置是否及如何重复背景图像。 |
| backgroundAlpha | number | 1 | 设置元素透明度 |
| maskImage | string,DisplayObject |  | 设置遮罩图,矢量图形需设置其颜色属性后生效 |
| maskPosition | number[] |  | 设置遮罩图位置 [x,y] |
| maskSize | number[] |  | 设置遮罩大小 |
| filter |  any | | 设置滤镜，自定义滤镜 |
| cursor |  string | | 设置鼠标样式，需开启`interactabled`,[参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor) |
| minWidth | number |  | 设置元素的最小宽度 |
| maxWidth | number |  | 设置元素的最大宽度 |
| maxHeight | number |  |  设置元素的最小高度 |
| minHeight | number |  | 设置元素的最大高度 |
| display | none,block,grid | block | 规定元素的显示类型。布局模式。 一般不设置 |
| position | absolute,fixed,static | absolute | 规定元素的定位类型，一般不设置|
| gridTemplateColumns | number[] | string[] | [string, number, number] |  | 基于 网格列的维度，去定义网格线的名称和网格轨道的尺寸大小 |
| gridColumnGap | number |  | 设置列间距  |
| gridTemplateRows | number[] | string[] | [string, number, number] |  | 基于 网格行的维度，去定义网格线的名称和网格轨道的尺寸大小  |
| gridRowGap | number |  |设置行间距 |
| fillColor |  number , number[] | `[r,g,b,a]或[[r,g,b,a],[r,g,b,a]]` | 设置字体或图形填充颜色，可以是二维数组渐变色 |
| fillGradientType | 0 , 1 | 0 | 设置字体或图形线性渐变方向，0垂直，1水平 |
| fillGradientStops |  number[]  |  | 设置字体或图形线性渐变颜色截止比例   (数组元素区间0~1  不填默认均匀分布) |

> 
> display = 'grid' 模式下，子节点会忽略left,top,right，bottom,width,height等

> display = 'none' 模式下，忽略其他所有style

> 使用方式 buton.style.top = 100  

### 网格

#### gridTemplateColumns与gridTemplateRows 设置方式：

方式一 [80,90,100]|["30%","40%","30%"] 第一列（行）宽度80，第二列（行）宽度，第三列（行）宽度100

方式二 ["repeat",3,100] 三列（行），宽度都为100像素    

## 混合模式枚举

```
enum BLEND_MODES {
    NORMAL,
    ADD,
    MULTIPLY,
    SCREEN,
    OVERLAY,
    DARKEN,
    LIGHTEN,
    COLOR_DODGE,
    COLOR_BURN,
    HARD_LIGHT,
    SOFT_LIGHT,
    DIFFERENCE,
    EXCLUSION,
    HUE,
    SATURATION,
    COLOR,
    LUMINOSITY,
    NORMAL_NPM,
    ADD_NPM,
    SCREEN_NPM,
    NONE,
    SRC_IN,
    SRC_OUT,
    SRC_ATOP,
    DST_OVER,
    DST_IN,
    DST_OUT,
    DST_ATOP,
    SUBTRACT,
    SRC_OVER,
    ERASE,
    XOR
}
```

## hitArea

```  
img.x = 100  
img.hitArea.x = 0  
img.hitArea.y = 0  
img.hitArea.width = 100  
img.hitArea.height = 100  
img.hitArea.type = 'ellipse' or 'rect' 
```

## cursor

```
img.style.cursor = 'wait'
```