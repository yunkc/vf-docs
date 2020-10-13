# 定时器

使用vf引擎时，为保证时间调度与vf引擎ticker一致，请使用自定义定时器。

## 定时器使用方式

1.vf.gui.Scheduler.setTimeout 该定时器在定时到期后执行一个函数。

``` js
    //新建定时器
    var timeout = vf.gui.Scheduler.setTimeout(2000, ()=>{
        console.log('2秒后输出log');
    });


    //停止定时器
    timeout.stop();
    timeout = null;

    //暂停定时器
    timeout.paude();

    //恢复定时器
    timeout.resume();
```

2.vf.gui.Scheduler.setInterval  该定时器重复调用一个函数，在每次调用之间具有固定的时间延迟。

``` js
    //新建定时器
    var interval = vf.gui.Scheduler.setInterval(2000, ()=>{
        console.log('每2秒输出log');
    });


    //停止定时器
    interval.stop();
    interval = null;

    //暂停定时器
    interval.paude();

    //恢复定时器
    interval.resume();
```

3.vf.gui.Scheduler.setEnterFrame  该定时器重复调用一个函数，在每一帧执行。

``` js
    //新建定时器
    var enterframe = vf.gui.Scheduler.setEnterFrame(()=>{
        console.log('每帧输出log');
    });


    //停止定时器
    enterframe.stop();
    enterframe = null;

    //暂停定时器
    enterframe.paude();

    //恢复定时器
    enterframe.resume();
```