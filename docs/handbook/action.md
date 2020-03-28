# VFX(动作脚本)
- VFX是VF引擎的脚本语言，使用类js语法，表达VF引擎中交互部分的逻辑。
- VFX只能运行在vf-cli工具中， 不能直接运行在VF引擎中。
- vf-cli把VFX编译成actionList，actionList运行在VF引擎中。
- VFX是对VF数据中的actionList中的进一步抽象，可以极大简化交互逻辑的编写工作。

## 使用方式
- 使用vf-cli工具，直接把VFX写在vf数据中的actionlist节点下。由vf-cli工具把VFX编译成actionList
- 如果用户希望手写actionList，可以参考下表《actionList支持的命令和VFX的对应表》 中 actionlist的那一列的写法。

## 层级结构
- 在VFX中第一个大括号内包围的语句是第一层，也叫顶层。
- 顶层中的语句如果有大括号的，这个大括号中包围的语句是第二层，其他以此类推。
- VFX中顶层和其他层的执行逻辑不同
    + 顶层中的语句，每一条语句都会执行，一般起生命周期作用的语句 或一些定义的语句，
    + 顶层中的语句不会等上一条语句执行完毕，就会立刻执行下一条语句。
    + 其他层的语句顺序执行，只有当上一条语句执行完毕后，才执行下一条语句；
- 一个层级说明的例子：
``` typescript
actionList: `
    @this = {
        // 这里是第一层，也叫顶层。
        this.on("Add", () => {
            // 这里是第二层
            trace("Hello, world");
        });
    }
`
```

## 创建交互
- 创建一个自定义组件， 只有自定义组件才能加交互
- 给组件加一个actionList节点，如下：

``` typescript
actionList: `
    @this = {
        this.on("Add", () => {
            trace("Hello, world");
        });
    }
`
```

- 每个actionList必须以@this开头；
- 每一句代码必须以分号结束；
- 这段VFX表示：当组件准备添加到舞台上时，在控制台输出 "Hello, world"。




## 动作脚本对应表

<table>
    <thead>
    <tr>
        <th>type</th>
        <th style="text-align: center;">actionList</th>
        <th style="text-align: center;">VFX</th>
        <th style="text-align: center;">备注</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Print</td>
        <td>
<pre class="language-json">
{
    "type": 0,
    "value":"Hello, world"
}
</pre>
        </td>
        <td style="text-align: center;">trace("Hello, world");</td>
        <td style="text-align: center;">在控制台输出信息</td>
    </tr>
    <tr>
        <td>Add</td>
        <td>
<pre class="language-json">
{
    "type": 1,
    "execute":[]
}
</pre>
        </td>
        <td style="text-align: center;">this.on("Add",()=&gt;{});</td>
        <td style="text-align: center;">当组件将要添加到舞台上时，执行</td>
    </tr>
    <tr>
        <td>Added</td>
        <td>
<pre class="language-json">
{
    "type": 2,
    "execute":[]
}
</pre>
        </td>
        <td style="text-align: center;">this.on("Added",()=&gt;{});</td>
        <td style="text-align: center;">当组件添加到舞台上之后，执行</td>
    </tr>
    <tr>
        <td>Remove</td>
        <td>
<pre class="language-json">
{
    "type": 3,
    "execute":[]
}
</pre>
        </td>
        <td style="text-align: center;">this.on("Remove",()=&gt;{});</td>
        <td style="text-align: center;">当组件将要移除舞台时，执行</td>
    </tr>
    <tr>
        <td>SetProperty</td>
        <td>
<pre class="language-json">
{
    "type": 4,
    "target": [ 403, 46, 43 ],
    "property": "text",
    "value": "item3"
}
</pre>
        </td>
        <td style="text-align: center;">this#403#46#43.text="item3";</td>
        <td style="text-align: center;">设置组件的属性</td>
    </tr>
    <tr>
        <td>Click</td>
        <td>
<pre class="language-json">
{
    "type": 5,
    "target": [ 403, 46, 43 ],
    "execute":[]
}
</pre>
        </td>
        <td style="text-align: center;">this#403#46#43.on('click', ()=&gt;{});</td>
        <td style="text-align: center;">当点击组件时执行</td>
    </tr>
    <tr>
        <td>Express</td>
        <td>
<pre class="language-json">
{
    "type": 6,
    "express": [ [ 1, [ 403 ], 91 ],[ 5, "=" ],[ 0, "item2" ] ]
}
</pre>
        </td>
        <td style="text-align: center;">this#403$91 = "item2";</td>
        <td style="text-align: center;">表达式</td>
    </tr>
    <tr>
        <td>IfGroup,If,ElseIf,Else,</td>
        <td>
<pre class="language-json">
{
    "type": 7,
    "execute": [
        {
            "type": 8,
            "condition": [ [ 4, [ 44, 42 ],"selectedValue" ],[ 5, "==" ],[ 1, [], 91 ] ],
            "execute": [ ]
        },
        {
            "type": 9,
            "condition":[ [4, [44, 42], "selectedValue" ],[5, "!="],[0, 12]],
            "execute": [ ]
        },
        {
            "type": 10,
            "execute": [ ]
        }
    ]
}
</pre>
        </td>
        <td style="text-align: center;">if (this#44#42.selectedValue == $91) {} else if (this#44#42.selectedValue != 12)
            {} else {};
        </td>
        <td style="text-align: center;">if分支判断</td>
    </tr>
    <tr>
        <td>DefineFunction</td>
        <td>
<pre class="language-json">
{
    "type": 11,
    "name": "checkAnswer",
    "execute":[]
}
</pre>
        </td>
        <td style="text-align: center;">function checkAnswer() {};</td>
        <td style="text-align: center;">定义函数</td>
    </tr>
    <tr>
        <td>CallFunction</td>
        <td>
<pre class="language-json">
{
    "type": 12,
    "name": "checkAnswer",
    "target":[403]
}
</pre>
        </td>
        <td style="text-align: center;">this#403.checkAnswer();</td>
        <td style="text-align: center;">调用函数</td>
    </tr>
    <tr>
        <td>AddEventListener</td>
        <td>
<pre class="language-json">
{
    "type": 13,
    "event": "CHANGE",
    "target":[403],
    "execute":[]
}
</pre>
        </td>
        <td style="text-align: center;">this#403.on("CHANGE", ()=&gt;{});</td>
        <td style="text-align: center;">添加事件监听</td>
    </tr>
    <tr>
        <td>RemoveEventListener</td>
        <td>
<pre class="language-json">
{
    "type": 14,
    "event": "CHANGE",
    "target":[403]
}
</pre>
        </td>
        <td style="text-align: center;">this#403.off("CHANGE");</td>
        <td style="text-align: center;">移除事件监听</td>
    </tr>
    <tr>
        <td>EmitEvent</td>
        <td>
<pre class="language-json">
{
    "type": 15,
    "event": "CHANGE",
    "target":[403],
    "eventData":[1,[],92]
}
</pre>
        </td>
        <td style="text-align: center;">this#403.emit("CHANGE", $92);</td>
        <td style="text-align: center;">抛出事件</td>
    </tr>
    <tr>
        <td>PlaySound</td>
        <td>
<pre class="language-json">
{
    "type": 16,
    "value": "sound0",
}
</pre>
        </td>
        <td style="text-align: center;">playSound("sound0");</td>
        <td style="text-align: center;">播放声音</td>
    </tr>
    <tr>
        <td>PlayAnimation</td>
        <td>
<pre class="language-json">
{
    "type": 17,
    "name": "default,
    "times":1,
}
</pre>
        </td>
        <td style="text-align: center;">this.playAnimation("default", 1);</td>
        <td style="text-align: center;">播放动画</td>
    </tr>
    <tr>
        <td>JumpToNextScene</td>
        <td style="text-align: center;">
<pre class="language-json">
{
    "type": 18
}
</pre>
</td>
        <td style="text-align: center;">jumpToNextScene();</td>
        <td style="text-align: center;">跳转到上一个场景</td>
    </tr>
    <tr>
        <td>JumpToPrevScene</td>
        <td style="text-align: center;">
<pre class="language-json">
{
    "type": 19
}
</pre>
</td>
        <td style="text-align: center;">jumpToPrevScene();</td>
        <td style="text-align: center;">跳转到下一个场景</td>
    </tr>
    <tr>
        <td>JumpToScene</td>
        <td>
<pre class="language-json">
{
    "type": 20,
    "value:"scene1"
}
</pre>
        </td>
        <td style="text-align: center;">jumpToScene("scene1");</td>
        <td style="text-align: center;">跳转到场景xxx</td>
    </tr>
    <tr>
        <td>ArrayInit</td>
        <td>
<pre class="language-json">
{
    "type": 21,
    "target":[1,[],92],
    "value":[1,2,3]
}
</pre>
        </td>
        <td style="text-align: center;">$92 = [1,2,3];</td>
        <td style="text-align: center;">数组赋值</td>
    </tr>
    <tr>
        <td>ArrayPop</td>
        <td>
<pre class="language-json">
{
    "type": 22,
    "target":[1,[],92],
}
</pre>
        </td>
        <td style="text-align: center;">$92.pop();</td>
        <td style="text-align: center;">数组pop</td>
    </tr>
    <tr>
        <td>ArrayPush</td>
        <td>
<pre class="language-json">
{
    "type": 23,
    "target":[1,[],92],
    "value":3
}
</pre>
        </td>
        <td style="text-align: center;">$92.push(3);</td>
        <td style="text-align: center;">数组push</td>
    </tr>
    <tr>
        <td>ArraySplice</td>
        <td>
<pre class="language-json">
{
    "type": 24,
    "target":[1,[],"91"],
    "start":1,
    "deleteCount":1,
    "value":8
}
</pre>
        </td>
        <td style="text-align: center;">$92.splice(1,1,8);</td>
        <td style="text-align: center;">数组splice</td>
    </tr>
    <tr>
        <td>ArrayRandom</td>
        <td>
<pre class="language-json">
{
    "type": 25,
    "target":[1,[],"91"]
}
</pre>
        </td>
        <td style="text-align: center;">$91.random();</td>
        <td style="text-align: center;">打乱数组的顺序</td>
    </tr>
    <tr>
        <td>ArrayConcat</td>
        <td>
<pre class="language-json">
{
    "type":26,
    "target":[1, [-1], "1"],
    "concatArr":[1,[],"91"],
    "value": [99,98]
}
</pre>
        </td>
        <td style="text-align: center;">global$1 = $91.concat([99,98]);</td>
        <td style="text-align: center;">数组concat</td>
    </tr>
    <tr>
        <td>ArrayShift</td>
        <td>
<pre class="language-json">
{
    "type":27,
    "target":[1, [-1], "1"]
}
</pre>
        </td>
        <td style="text-align: center;">global$1.shift();</td>
        <td style="text-align: center;">数组shift</td>
    </tr>
    <tr>
        <td>ArrayUnshift</td>
        <td>
<pre class="language-json">
{
    "type":28,
    "target":[1, [-1], "1"],
    "value": 66
}
</pre>
        </td>
        <td style="text-align: center;">global$1.unshift(66);</td>
        <td style="text-align: center;">数组unshift</td>
    </tr>
    <tr>
        <td>AddEventListenerCall</td>
        <td>
<pre class="language-json">
{
    "type":29,
    "event": "testEmit",
    "funName": "callme"
}
</pre>
        </td>
        <td style="text-align: center;">this.on('testEmit', this.callme);</td>
        <td style="text-align: center;">添加事件监听回调函数</td>
    </tr>
    <tr>
        <td>CallProtoFunction</td>
        <td>
<pre class="language-json">
{
    "type": 30,
    "name": "testEmit",
    "params": []
}
</pre>
        </td>
        <td style="text-align: center;">this.textEmit();</td>
        <td style="text-align: center;">调用方法</td>
    </tr>
    <tr>
        <td>GotoPlay</td>
        <td>
<pre class="language-json">
{
    "type": 31,
    "name": "jump",
    "frame": 0,
    "times": 1
}
</pre>
        </td>
        <td style="text-align: center;">this.gotoPlay("jump", 1);</td>
        <td style="text-align: center;">播放动画</td>
    </tr>
    <tr>
        <td>GotoStop</td>
        <td>
<pre class="language-json">
{
    "type": 32,
    "name": "jump",
    "frame": 0
}
</pre>
        </td>
        <td style="text-align: center;">this.gotoStop("jump", 1);</td>
        <td style="text-align: center;">停止到某个动画的某一帧</td>
    </tr>
    <tr>
        <td>PauseSound</td>
        <td>
<pre class="language-json">
{
    "type": 33,
    "value": "sound1",
    "trackId": 1
}
</pre>
        </td>
        <td style="text-align: center;">pauseSound("sound1", 1);</td>
        <td style="text-align: center;">暂停声音</td>
    </tr>
    <tr>
        <td>ResumeSound</td>
        <td>
<pre class="language-json">
{
    "type": 34,
    "value": "sound1",
    "trackId": 1
}
</pre>
        </td>
        <td style="text-align: center;">resumeSound("sound1", 1);</td>
        <td style="text-align: center;">恢复播放声音</td>
    </tr>
    <tr>
        <td>Comment</td>
        <td style="text-align: center;">
        <pre class="language-json">
{
    "type": 35,
    "value": "this is a comment;"
}
</pre></td>
        <td style="text-align: center;">//this is a comment;</td>
        <td style="text-align: center;">注释</td>
    </tr>
    <tr>
        <td>ActionList</td>
        <td style="text-align: center;"><pre class="language-json">
{
    "type": 36,
    "execute": []
}
</pre>
</td>
        <td style="text-align: center;">@this={};</td>
        <td style="text-align: center;">定义当前组件的VFX</td>
    </tr>
    <tr>
        <td>DefineVariable</td>
        <td style="text-align: center;">
<pre class="language-json">
{
    "type": 37,
    variableType: "string",
    value: "myName",
    varId: "name"
}
</pre>
</td>
        <td style="text-align: center;">var $name = "myName";</td>
        <td style="text-align: center;">定义变量</td>
    </tr>
    <tr>
        <td>For</td>
        <td style="text-align: center;">
<pre class="language-json">
{
    "type": 38
}
</pre>
</td>
        <td style="text-align: center;">for ($i in 5 ){};</td>
        <td style="text-align: center;">for循环</td>
    </tr>
    <tr>
        <td>Break</td>
        <td style="text-align: center;">
<pre class="language-json">
{
    "type": 39
}
</pre>
</td>
        <td style="text-align: center;">break;</td>
        <td style="text-align: center;">跳出循环</td>
    </tr>
    <tr>
        <td>Wait</td>
        <td style="text-align: center;">
<pre class="language-json">
{
    "type": 40, 
    "value": 1000
}
</pre>
</td>
        <td style="text-align: center;">wait(1000);</td>
        <td style="text-align: center;">等待1000毫秒</td>
    </tr>
    <tr>
        <td>SetTimeout</td>
        <td>
<pre class="language-json">
{
    "type": 41,
    "value": 1000,
    "execute":[]
}
</pre>
        </td>
        <td style="text-align: center;">setTimeout(2000, ()=&gt; {})；</td>
        <td style="text-align: center;">延时1000毫秒执行</td>
    </tr>
    <tr>
        <td>SetInterval</td>
        <td>
<pre class="language-json">
{
    "type": 42,
    "value": 1000,
    "times": 10,
    "execute":[]
}
</pre>
        </td>
        <td style="text-align: center;">setInterval(1000, 10, ()=&gt;{ });</td>
        <td style="text-align: center;">每隔1000毫秒执行，执行10次</td>
    </tr>
    <tr>
        <td>EnterFrame</td>
        <td style="text-align: center;">
        <pre class="language-json">
{
    "type": 43,
    "execute":[]
}
</pre>
</td>
        <td style="text-align: center;">setEnterFrame( ()=&gt; {})</td>
        <td style="text-align: center;">每帧执行</td>
    </tr>
    </tbody>
</table>

## VFX的关键字与符号的含义

关键字|含义|备注
--|:--:|:--:
this | 当前组件
global | 全局
var | 声明变量
function | 声明函数
on | 添加监听
off | 移除监听
emit | 抛出事件
trace | 在控制台输出信息
@ | 组件
$ | 变量
# | 当前组件的孩子
//  |  注释


------------------
最佳实践
------------------

## 准备添加到舞台时
- 当组件准备添加到舞台上时执行
``` typescript
@this = {
    this.on("Add", () => {
        // 此时舞台上看不到组件，用于组件的初始化
    });
}
```

## 添加到舞台时
- 当组件添加到舞台上后执行 
``` typescript
@this = {
    this.on("Added", () => {
        // 此时舞台上已经看到组件了。
    });
}
```

## 设置属性
- 设置组件的属性，假设该组件中包含 一个id是 myText的文本框
``` typescript
@this = {
    this.on("Add", () => {
        this#myText.text = "hello, world"; // 设置文本框text属性，让文本框显示“hello，world”
        this#myText.x = 100; //让x轴等于100
        this#myText.y = $x; //可以使用变量
        this#myText.scaleX = $scale * 0.1; //可以使用表达式
    });
}
```

## 监听交互事件
- 监听点击事件，假设该组件中包含 一个id是 myText的文本框
``` typescript
@this = {
    this.on("click", () => {
        // 点击后的逻辑
    });
    this#myText.on("click", () => {
        // 点击文本框后的逻辑
    });
}
```

## 表达式
- 表达式  支持运算符 + - * / = %  > < >= <= == === ! != !== && || ()
``` typescript
@this = {
    this.on("Add", () => {
        this$v2 = 100 * 2 + (this$v1 + 22); // 
    });
}
```

## 条件语句
``` typescript
@this = {
    this.on("Add", () => {
        if($a > 5 && this#myText.text == "hello, world") {
            // 满足条件执行
        } else if ( this.y < 100) {
            // 满足条件执行
        } else {
            // 不满足条件执行
        }; // 注意不要忘记分号
    });
}
```

## 函数定义
``` typescript
@this = {
    function callme() {  //不带参数的方法
        // 函数的逻辑
    };// 注意不要忘记分号

    function callme2($param) {  //带一个参数的方法
        this.x = this.x + $param; // 函数的逻辑
    };// 注意不要忘记分号

    function callme3($param1, $param2) { //带多个参数的方法
        this.x = this.x + $param1 + $param2; // 函数的逻辑
    };// 注意不要忘记分号
}
```

## 调用函数
``` typescript
@this = {
    function callme() {  
        
    };

    function callme2($param) {  
        this.x = this.x + $param; 
    };

    function callme3($param1, $param2) { 
        this.x = this.x + $param1 + $param2; 
    };

    this.on("Add", () => {
        this.callme();
        this.callme2(55);
        this.callme3(34, this$v1);
    });
}
```

## 添加监听
``` typescript
@this = {
    this.on("click", () => {
        // 点击后的逻辑
    });
    this.on("myEvent",()=>{
        // 添加自定义事件的监听，不能加参数，如果想要添加参数，使用下面的方法
    });

    // 使用自定义函数作为监听函数，可传递事件的数据
    this.on("myEvent2", this.onMyEvent);
    function onMyEvent($data) {
        trace($data);
    };
}
```

## 添加全局监听
``` typescript
@this = {
    global.on("globalEvent", ()=>{
        // 监听全局的事件
    });
}
```

## 添加系统监听
- 系统事件必须包含数据，数据必须是下面结构， 否则会抛出错误
``` typescript 
{
    code: string;
    level: EventLevel;
    data: any;
    target?: any;
    message?: string;
    type?: string;
}

```

``` typescript
@this = {
    system.on("systemEvent", this.onSystemEvent);
    function onSystemEvent($data) {
        trace($data.code);
        trace($data.level);
        trace($data.data);
    };
}
```

##  移除监听
- 移除监听，移除一个事件的所有监听。
``` typescript
@this = {
    this.on("click", () => {
        this.off("click");
        this.off("myEvent");
        this#myCon.off("myEvent2");
        global.off("globalEvent");
        system.off("systemEvent");
    });
}
```

## 播放声音
- 播放声音调用方法playSound。 该方法包含三个参数
    + 第一个参数是声音素材的id，支持变量
    + 第二个参数是音轨 trackId，相同的trackId同时只能播放一个声音，关于音轨参考[声音文档](sound.md)
    + 第三个参数是可选参数，用来使用原生API播放声音，参数的类型必须是：
    ``` typescript 
    {
        trackId?: string;
        useNative?: boolean; 
        mode?: 'sound' | 'effect';
    }

```

``` typescript
@this = {
    this.on("Add", () => {
        playSound("sound1", 1, {useNative: true, mode: 'sound'}); 
    });
}
```

## 暂停声音
- 暂停声音调用方法pauseSound， 该方法包含两个参数
    + 第一个参数是声音素材的id，支持变量
    + 第二个参数是音轨 trackId，相同的trackId同时只能播放一个声音，关于音轨参考[声音文档](sound.md)
``` typescript
@this = {
    this.on("Add", () => {
        pauseSound("sound1", 1); 
    });
}
```

## 恢复暂停声音
- 恢复暂停声音调用方法resumeSound， 该方法包含两个参数
    + 第一个参数是声音素材的id，支持变量
    + 第二个参数是音轨 trackId，相同的trackId同时只能播放一个声音，关于音轨参考[声音文档](sound.md)
``` typescript
@this = {
    this.on("Add", () => {
        resumeSound("sound1", 1); 
    });
}
```

## 播放动画
- 播放动画调用自定义组件的playAnimation 方法，该方法包含两个参数
    + 第一个参数动画名，可以是变量
    + 第二个是可选参数， 播放次数， 如果不写，默认是1次；
``` typescript
@this = {
    this.on("Add", () => {
        var $anim = "run";
        this.playAnimation("jump", 10);
        this#myCom.playAnimation($anim);
    });
}
```

## 切换场景 
- 切换场景有三个方法，分别是：
    + jumpToNextScene 跳到下一场景
        * 第一个参数 可选，过场动画 类型：
        {
             type: TransitionType;
             duration: number;
        }
    + jumpToPrevScene 跳到前一场景
        * 第一个参数 可选，过场动画 类型：
        {
             type: TransitionType;
             duration: number;
        }
    + jumpToScene 跳到指定场景
        * 第一个参数 场景id
        * 第二个参数 可选，过场动画

- 注意切换场景后，这条语句后面的语句全都不会被执行，因为组件已经被销毁了。这条语句必须在一个代码块的最后一条。
- 支持的转场特效的类型
``` typescript
//转场支持的类型
enum TransitionType {
        NONE = 'none',
        FADE_OUT = 'fadeOut',
        CIRCLE_WIPE = 'circleWipe', 
        CROSS_ZOOM = 'crossZoom',
        DOOM_SCREEN = 'doomScreen',
        HEART_WIPE = 'heartWipe',
        LINEAR_BLUR = 'linearBlur',
        PAGE_CURL = 'pageCurl',
        TO_TEAR = 'toTear',
        WIND = 'wind',
        PAGE_FLIP_RIGHT = 'pageFlipRight',
        PAGE_FLIP_LEFT = 'pageFlipLeft',
}
//例子
@this = {
    this.on("click", () => {
        // 跳到下一场景
        jumpToNextScene({type: "fadeOut", duration: 1000});
        // 跳到前一场景
        jumpToPrevScene();
        // 跳到场景scene1
        jumpToScene('scene1',{type: "fadeOut", duration: 1000});
    });
}
```

##  数组操作
- 支持数组操作包括（pop, push, splice, concat, shift, unshift);
- random 随机打乱数组的排列顺序
- length 获取数组长度
``` typescript
@this = {
    this.on("Add", () => {
        var $arr = [1,2,3,4];
        $arr.pop();
        $arr.push(5);
        $arr.splice(0,1);
        $arr.random(); //
        $arr.concat([6,7]);
        $arr.shift();
        $arr.unshift(8);
        this$num = $arr.length;
    });
}
```

## 注释
``` typescript
@this = {
    this.on("Add", () => {
        // 这是注释
    });
}
```

## 定义变量
``` typescript
@this = {
    var $num = 5; //number类型
    var $str = "string"; // 字符串类型
    var $bol = true;  // 布尔型
    var $obj = {name:"sukui", age:16}; // 对象类型
    var global$vv = 8; // 定义全局变量
}
```

## for循环
- 使用 for in 语句，循环执行多次。
- 支持数字，变量和数组
- 如果是数字，表示循环几次
- 如果是数组，表示循环数组的长度的次数
- 如果是变量， 变量必须是数字或者数组。
``` typescript
@this = {
    this.on("Add", () => {
        for( $i in 5) {
            trace($i);
        };
        var $num = 5;
        for( $i in $num) {
            trace($i);
        };
        var $arr = [0,1,2,3,4];
        for($i in $arr) {
            trace($arr[$i]);
            if($i == 3) {
                break;
            };
        };
    });
}
```

## 跳转动画
- 跳转动画调用自定义组件的gotoPlay方法，该方法包含三个参数
    + 第一个参数表示动画名
    + 第二个参数表示开始帧数
    + 第三个参数表示播放次数
``` typescript
@this = {
    this.on("Add", () => {
        // 播放动画jump， 从第0帧开始播放，播放2次
        this.gotoPlay("jump", 0, 2);
    });
}
```

## 跳转并停止动画
- 跳转并停止动画调用自定义组件的gotoStop方法，该方法包含两个参数
    + 第一个参数表示动画名
    + 第二个参数表示停止到哪一帧
``` typescript
@this = {
    this.on("Add", () => {
        // 停止到jump动画的第10帧
        this.gotoStop("jump", 10);
    });
}
```

## 等待 
- 调用 wait方法
- 有一个参数，表示停止多长时间，单位是毫秒
- 等待会阻塞程序运行
``` typescript
@this = {
    this.on("Add", () => {
        wait(1000);
        trace("等待1000毫秒后执行");
    });   
}
``` 

## 延迟执行
- 调用方法setTimeout
- 第一个参数是延迟时间，单位是毫秒
- 第二个参数是回调闭包，这里只能写闭包
- 延迟执行不会阻塞程序执行。
``` typescript
@this = {
    this.on("Add", () => {
        setTimeout(2000, ()=> {
            trace("我等待2000毫秒后执行");
        });
        trace("我会先执行");
    });
}
``` 

##  间隔执行
- 调用方法setInterval
- 第一个参数是间隔时间，单位是毫秒
- 第二个参数是执行次数，如果第二个参数是小于等于0， 或者不写第二个参数，则是无限次
- 第三个参数是回调闭包，这里只能写闭包
- 如果执行无限次，只能写在[顶层](action.md#vfx的层级结构)
``` typescript
@this = {
    this.on("Add", () => {
        setInterval(1000, 10, ()=>{
            trace("this is a interval");
        });
        // 如果上面的语句 第二个参数是0，或者小于0， 或者不写第二个参数，那么下面的语句永远不执行
        // 此次上面的语句只能写在顶层，不能写在其他层。
        trace("我会等 上面的语句执行10后才执行");
    });
    // 这里是顶层，只有顶层能写间隔执行，执行无限次。
    setInterval(1000, ()=>{
        trace("我会一直执行");
    });
}
``` 

## 每帧执行
- 调用方法setEnterFrame
- 第一个参数是回调闭包，这里只能写闭包
- 只能写在[顶层](action.md#vfx的层级结构)
``` typescript
@this = {
    setEnterFrame( ()=> {
        // 如果这里有wait，相当于每隔1000毫秒执行
        // wait(1000); 
        trace("我每帧执行");
    });
}
``` 
