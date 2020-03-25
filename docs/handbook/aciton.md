# vfx
vfx是vf引擎的脚本语言，使用类js语法，表达vf引擎中交互部分的逻辑。

vfx只能运行在ts2json工具中。vf引擎只能运行actionList。 vfx是对vf数据中的actionList中的进一步抽象，可以极大简化交互逻辑的编写工作。

vfx的工作原理：ts2json工具会把vfx解析成actionList，再由vf引擎内的解释器，解释执行。

vfx的使用方式。使用ts2json工具，直接把vfx写在vf数据中的actionlist节点下。由ts2json工具把vfx编译成actionList
一遍建议用户使用ts2json工具来编写，如果用户希望全部手写数据，可以参考下表 actionList支持的命令和vfx的对应表 中 actionlist的那一列的写法。

### vfx的层级结构
在vfx中第一个大括号内包围的语句是第一层，也叫顶层。
顶层中的语句如果有大括号的，这个大括号中包围的语句是第二层，其他以此类推。
vfx中顶层和其他层的执行逻辑不同
顶层中的语句，每一条语句都会执行，一般起生命周期作用的语句 或一些定义的语句，
顶层中的语句不会等上一条语句执行完毕，就会立刻执行下一条语句。
其他层的语句顺序执行，只有当上一条语句执行完毕后，才执行下一条语句；
``` typescript
actionList: `
    @this = {
        // 这里是第一层
        this.on("Add", () => {
            这里是第二层
            trace("Hello, world");
        });
    }
`
```

1. 使用vfx，添加一个交互
创建一个自定义组件， 只有自定义组件才能加交互
给组件加一个actionList节点，如下：
``` typescript
actionList: `
    @this = {
        this.on("Add", () => {
            trace("Hello, world");
        });
    }
`
```
   1. 每个actionList必须以@this开头；
   2. 每一句代码必须以分号结束；

2. vfx的关键字与符号的含义

关键字|含义|备注
--|:--:|:--:
this | 当前组件
global | 全局
var | 声明变量1.
funciton | 声明函数
on | 添加监听
off | 移除监听
emit | 抛出事件
print | console.log
@ | 组件
$ | 变量
“#” | 当前组件的孩子
//  |  注释
3. actionList支持的命令和vfx的对应表

type|actionList|vfx| 备注
--|:--:|:--:|:--:
Print | {"type": 0,"value":"aaa",} | print("aaa"); | 在控制台输出信息
Add |  {"type": 1,"ecexute":[]}	 | this.on("Add",()=>{}); | 当组件将要添加到舞台上时，执行xxx
Added  | {"type": 2,"ecexute":[]}	 | this.on("Added",()=>{}); | 当组件添加到舞台上之后，执行xxx
Remove | {"type": 3,"ecexute":[]}	 | this.on("Remove",()=>{});| 当组件将要移除舞台时，执行xxx
SetProperty  | {"type": 4,"target": [ 403, 46,43 ],"property": "text","value": "item3"}  | this#403#46#43.text="item3"; | 设置组件的属性
Click | {"type": 5,"target": [ 403, 46,43 ],"ecexute":[]}	 | this#403#46#43.on('click', ()=>{}); | 当点击组件时执行
Express  | {"type": 6,"express": [ [ 1, [ 403 ], 91 ],[ 5, "=" ],[ 0, "item2" ] ]}  | this#403$91 = "item2"; | 表达式
IfGroup,If,ElseIf,Else, | {"type": 7,"execute": [ { "type": 8,"condition": [ [ 4, [ 44, 42 ], "selectedValue" ],[ 5, "==" ],[ 1, [], 91 ] ],"execute": [ ]},{ "type": 9,"condition":[ [4, [44, 42], "selectedValue" ],[5, "!="],[0, 12]],"execute": [ ]},{ "type": 10,"execute": [ ]}]} | if (this#44#42.selectedValue == $91) {} else if (this#44#42.selectedValue != 12) {} else {}; | if分支判断
DefineFunction  | {"type": 11,"name": "checkAnswer,"execute":[]}	 | function checkAnswer() {}; | 定义函数
CallFunction | {"type": 12,"name": "checkAnswer,"target":[403]}	 | this#403.checkAnswer(); | 调用函数
AddEventListener | {"type": 13,"event": "CHANGE,"target":[403],"execute":[]} | this#403.on("CHANGE", ()=>{}); | 添加事件监听
RemoveEventListener  | {"type": 14,"event": "CHANGE,"target":[403],} | this#403.off("CHANGE"); | 移除事件监听
EmitEvent | {"type": 15,"event": "CHANGE,"target":[403],"eventData":[1,[],92]}  | this#403.emit("CHANGE", $92); | 抛出事件
PlaySound | {"type": 16,"value": "sound0",}	 | playSound("sound0"); | 播放声音
PlayAnimation  | {"type": 17,"name": "default,"times":1,}  | this.playAnimation("default", 1); | 播放动画
JumpToNextScene  | {"type": 18}	 | jumpToNextScene(); | 跳转到上一个场景
JumpToPrevScene  | {"type": 19}	 |  jumpToPrevScene(); | 跳转到下一个场景
JumpToScene  | {"type": 20,"value:"scene1"}  | jumpToScene("scene1"); | 跳转到场景xxx
ArrayInit  | {"type": 21,"target":[1,[],92],"value":[1,2,3]} | $92 = [1,2,3]; | 数组赋值
ArrayPop | {"type": 22,"target":[1,[],92],} | $92.pop(); | 数组pop
ArrayPush | {"type": 23,"target":[1,[],92],"value":3} | $92.push(3); | 数组push
ArraySplice | {"type":24,"target":[1,[],"91"],"start":1,"deleteCount":1,"value":8} | $92.splice(1,1,8); | 数组splice
ArrayRandom  | {"type":25,"target":[1,[],"91"]} | $91.random(); | 打乱数组的顺序
ArrayConcat | {"type":26,"target":[1, [-1], "1"],"concatArr":[1,[],"91"],"value": [99,98]} | global$1 = $91.concat([99,98]); | 数组concat
ArrayShift | {"type":27,"target":[1, [-1], "1"]}  | global$1.shift(); | 数组shift
ArrayUnshift  | {"type":28,"target":[1, [-1], "1"],"value": 66} | global$1.unshift(66); | 数组unshift
AddEventListenerCall  | {"type": 29,"event": "testEmit","funName": "callme"} | this.on('testEmit', this.callme); | 添加事件监听回调函数
CallProtoFunction  | {"type": 30,"name": "testEmit","params": []} | 无| 无
GotoPlay | {"type": 31,"name": "jump","frame": 0, times: 1} | this.gotoPlay("jump", 1)|播放动画
GotoStop | {"type": 32,"name": "jump","frame": 0} | this.gotoStop("jump", 1)|停止到某个动画的某一帧
PauseSound  | {"type": 33,"value": "sound1","trackId": 1} | pauseSound("sound1", 1); |暂停声音
ResumeSound  | {"type": 34,"value": "sound1","trackId": 1}  | resumeSound("sound1", 1); |恢复播放声音
Comment | {"type": 35} | //this is a comment;|注释
ActionList | {"type": 36} // @this={};|vfx
DefineVariable | {"type": 37} | var $name = "sukui";|定义变量
For | {"type": 38} | for ($i in 5 ){};|for循环
Break | {"type": 39} | break;|跳出循环
Wait | {"type": 40, "value": 1000} | wait(1000); | 等待1000毫秒
SetTimeout | {"type": 41, "value": 1000, "execute":[]} | setTimeout(2000, ()=> {})； | 延时1000毫秒执行
SetInterval | {"type": 42, "value": 1000, "times": 10, "execute":[]} | setInterval(1000, 10, ()=>{ }); | 每隔1000毫秒执行，执行10次
EnterFrame | {"type": 43, "execute":[]} | setEnterFrame( ()=> {}) | 每帧执行


###cookbook
1. 当组件准备添加到舞台上时执行
``` typescript
@this = {
    this.on("Add", () => {
        // 其他逻辑 此时舞台上看不到组件，用于组件的初始化
    });
}
```

2. 当组件添加到舞台上后执行 
``` typescript
@this = {
    this.on("Added", () => {
        // 其他逻辑， 此时舞台上已经看到组件了。
    });
}
```

3. 设置组件的属性，假设该组件中包含 一个id是 myText的文本框
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

4. 监听点击事件，假设该组件中包含 一个id是 myText的文本框
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

5. 表达式  支持运算符 + - * / = %  > < >= <= == === ! != !== && || ()
``` typescript
@this = {
    this.on("Add", () => {
        this$v2 = 100 * 2 + (this$v1 + 22); // 
    });
}
```

6. 条件语句
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

7. 定义一个函数
``` typescript
@this = {
    function callme() {  //不带参数的方法
        // 函数的逻辑
    };// 注意不要忘记分号

    funciton callme2($param) {  //带一个参数的方法
        this.x = this.x + $param; // 函数的逻辑
    };// 注意不要忘记分号

    funciton callme3($param1, $param2) { //带多个参数的方法
        this.x = this.x + $param1 + $param2; // 函数的逻辑
    };// 注意不要忘记分号
}
```

8. 调用函数
``` typescript
@this = {
    function callme() {  
        
    };

    funciton callme2($param) {  
        this.x = this.x + $param; 
    };

    funciton callme3($param1, $param2) { 
        this.x = this.x + $param1 + $param2; 
    };

    this.on("Add", () => {
        this.callme();
        this.callme2(55);
        this.callme3(34, this$v1);
    });
}
```

9. 添加监听
``` typescript
@this = {
    this.on("click", () => {
        // 点击后的逻辑
    });
    this.on("myEvent",()=>{
        // 添加自定义事件的监听，不能加参数，如果想要添加参数，使用下面的方法
    })

    //使用自定义函数作为监听函数，可传递事件的数据
    this.on("myEvent2", this.onMyEvent);
    function onMyEvent($data) {
        trace($data);
    }

    global.on("globalEvent", ()=>{
        //监听全局的事件
    })

    //监听系统事件 系统事件的必须包含data，data的结构必须是
    //  {
    //      code: string;
    //      level: EventLevel;
    //      data: any;
    //      target?: any;
    //      message?: string;
    //      type?: string;
    //  }
    system.on("systemEvent", this.onSystemEvent);
    function onSystemEvent($data) {
        trace($data.code);
        trace($data.level);
    }
}
```

10. 移除监听
``` typescript
@this = {
    this.on("click", () => {
        //移除监听，目前只能移除一个事件的所有监听，不能根据监听函数分别移除。
        this.off("click");
        this.off("myEvent");
        this#myCon.off("myEvent2);
        global.off("globalEvent");
        system.off("systemEvent");
    });
}
```

11. 播放声音
``` typescript
@this = {
    this.on("Add", () => {
        // 第一个参数是声音素材的id，支持变量
        // 第二个参数是trackId，相同的trackId同时只能播放一个声音
        // 第三个参数是可选参数，用来使用原生api播放声音，参数必须是类型：
        // {
        //     trackId?: string;
        //     useNative?: boolean; 
        //     mode?: 'sound' | 'effect';
        // }
        playSound("sound1", 1, {useNative: true,mode: 'sound'}); 
    });
}
```

12. 暂停声音
``` typescript
@this = {
    this.on("Add", () => {
        // 第一个参数是声音素材的id，支持变量
        // 第二个参数是trackId，相同的trackId同时只能播放一个声音
        pauseSound("sound1", 1); 
    });
}
```

13. 恢复暂停声音
``` typescript
@this = {
    this.on("Add", () => {
        // 第一个参数是声音素材的id，支持变量
        // 第二个参数是trackId，相同的trackId同时只能播放一个声音
        resumeSound("sound1", 1); 
    });
}
```

14. 播放动画
``` typescript
@this = {
    this.on("Add", () => {
        var $anim = "run";
        // 第一个参数动画名，可以是变量
        // 第二个是可选参数， 播放次数， 如果不写，默认是1次；
        this.playAnimation("jump", 10);
        this#myCom.playAnimation($anim);
    });
}
```

15. 切换场景 
注意切换场景后，这条语句后面的语句全都不会被执行，因为组件已经被销毁了。
所以这条语句必须在一个代码块的最后一条。
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
        // 第一个参数 可选，过场动画 类型：
        // {
        //     type: TransitionType;
        //     duration: number;
        // }
        jumpToNextScene({type: "fadeOut", duration: 1000});
        // 跳到前一场景
        // 第一个参数 可选，过场动画
        jumpToPrevScene();
        // 跳到某一场景
        // 第一个参数 场景id
        // 第二个参数 可选，过场动画
        jumpToScene('scene1',{type: "fadeOut", duration: 1000});
    });
}
```

16. 数组操作
``` typescript
@this = {
    this.on("Add", () => {
        var $arr = [1,2,3,4];
        $arr.pop();
        $arr.push(5);
        $arr.splice(0,1);
        $arr.random(); //随机打乱数组的排列顺序
        $arr.concat([6,7]);
        $arr.shift();
        $arr.unshift(8);
        this$num = $arr.length;
    });
}
```

17. 注释
``` typescript
@this = {
    this.on("Add", () => {
        // 这是注释
    });
}
```

18. 定义变量
``` typescript
@this = {
    var $num = 5; //number类型
    var $str = "string"; // 字符串类型
    var $bol = true;  // 布尔型
    var $obj = {name:"sukui", age:16}; // 对象类型
    var global$vv = 8; // 定义全局变量
}
```

19. for循环
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
            trace($arr[$i])
            if($i == 3) {
                break;
            }
        }
    });
}
```

20. 播放动画
``` typescript
@this = {
    this.on("Add", () => {
        // 第一个参数 动画名
        // 第二个参数 开始帧数
        // 第三个参数 播放次数
        this.gotoPlay("jump", 0, 2);
    });
}
```

21. 跳转并停止动画
``` typescript
@this = {
    this.on("Add", () => {
        // 第一个参数 动画名
        // 第二个参数 停止到的帧数
        this.gotoStop("jump", 10);
    });
}
```

22. 等待 
单位是毫秒
等待会让整个程序都暂停
``` typescript
@this = {
    this.on("Add", () => {
        wait(1000);
        trace("等待1000毫秒后执行");
    });   
}
``` 

23. 延迟执行
单位是毫秒
延迟执行不会影响下一条语句的执行
``` typescript
@this = {
    this.on("Add", () => {
        setTimeout(2000, ()=> {
            trace("我等待2000毫秒后执行");
        })；
        trace("我会先执行");
    });
}
``` 

24. 间隔执行
单位是毫秒
第二个参数是执行次数，如果第二个参数是小于等于0， 或者不写第二个参数，则是无限次
如果执行无限次，只能写在顶层
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

25. 每帧执行
只能写在顶层
``` typescript
@this = {
    setEnterFrame( ()=> {
        // 如果这里有wait，相当于每隔1000毫秒执行
        // wait(1000); 
        trace("我每帧执行");
    })
}
``` 
