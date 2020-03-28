# 配置选项

<div class="panelHeader pdl"><b>使用VF配置样例：</b></div>

``` js
// 1.配置实例
const container = document.getElementById("vf-container");
const option = {
    bgcolor: '0xffffff',
    src: 'https://cdn.*******.com/vf/IC019/index.json',
    wmode : 'transparent',
    scaleMode: 'showAll'
}
// 2.新建实例
const vf = new VF(container, option);
vf.addListener('status', (evt)=>{
    if(evt.code == 'api is ready') {
        // ...调用vf接口
    }
})
// 3.启动实例
vf.play();
```
<table class="relative-table">
    <colgroup>
        <col style="width: 50.5168%;">
        <col style="width: 49.4832%;">
    </colgroup>
    <thead>
    <tr>
        <td colspan="2" ><b>VF实例化属性配置</b></td>
    </tr>
    <tr>
        <th style="text-align: left;">通用属性：</th>
        <th colspan="1" style="text-align: left;">默认值 或 可选范围</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td colspan="1"><span style="color: rgb(51,102,255);"><strong><span>container</span>&nbsp;:&nbsp;HTMLElement</strong></span><br><span><span>要包含VF的父级容器</span>。</span>
        </td>
        <td colspan="1"><span>document.element</span></td>
    </tr>
    <tr>
        <td colspan="1"><span
                style="color: rgb(51,102,255);"><strong>id&nbsp;:&nbsp;String</strong></span><br><span>VF实例的唯一标示，默认会自动生成</span>。
        </td>
        <td colspan="1"><br></td>
    </tr>
    <tr>
        <td colspan="1"><span
                style="color: rgb(51,102,255);"><strong>src&nbsp;:&nbsp;String</strong></span><br><span>模板的数据或模板路径</span>。
        </td>
        <td colspan="1"><span>在线地址 或 相对路径</span></td>
    </tr>
    <tr>
        <td colspan="1"><span
                style="color: rgb(193,199,208);"><strong>play&nbsp;:&nbsp;Boolean</strong></span><br>是否自动播放。
        </td>
        <td colspan="1">true</td>
    </tr>
    <tr>
        <td colspan="1"><span
                style="color: rgb(193,199,208);"><strong>loop&nbsp;:&nbsp;Boolean</strong></span><br><span>是否循环播放。</span>
        </td>
        <td colspan="1">false</td>
    </tr>
    <tr>
        <td colspan="1"><span
                style="color: rgb(193,199,208);"><strong>menu&nbsp;:&nbsp;Boolean</strong></span><br><span>显示右键菜单。</span>
        </td>
        <td colspan="1">true</td>
    </tr>
    <tr>
        <td colspan="1"><span
                style="color: rgb(193,199,208);"><strong>quality&nbsp;:&nbsp;String</strong></span><br><span>显示质量。</span>
        </td>
        <td colspan="1"><br></td>
    </tr>
    <tr>
        <td colspan="1"><strong><span
                style="color: rgb(51,102,255);">scaleMode&nbsp;:&nbsp;String</span></strong><br>缩放模式。
        </td>
        <td colspan="1"><span>showAll | noScale | cover | contain</span></td>
    </tr>
    <tr>
        <td colspan="1"><span
                style="color: rgb(193,199,208);"><strong>align&nbsp;:&nbsp;String</strong></span><br><span>对齐方式。</span>
        </td>
        <td colspan="1"><br></td>
    </tr>
    <tr>
        <td colspan="1"><span style="color: rgb(51,102,255);"><strong>wmode ：String</strong></span><br><span>显示模式。</span>
        </td>
        <td colspan="1">transparent（透明模式）| ...</td>
    </tr>
    <tr>
        <td colspan="1"><span
                style="color: rgb(51,102,255);"><strong>vfvars ：Object</strong></span><br><span>外部自定义参数。</span></td>
        <td colspan="1">{...}</td>
    </tr>
    <tr>
        <td colspan="1"><strong style="color: rgb(51,102,255);letter-spacing: 0.0px;">frameRate
            ：Number<br></strong>显示模式。</td>
        <td colspan="1">60</td>
    </tr>
    <tr>
        <td colspan="1"><span style="color: rgb(51,102,255);"><strong>width ：Number</strong></span><br>宽度。
        </td>
        <td colspan="1">默认100%撑满容器宽度</td>
    </tr>
    <tr>
        <td colspan="1"><span
                style="color: rgb(51,102,255);"><strong>height ：Number</strong></span><br><span>高度。</span></td>
        <td colspan="1">默认100%撑满容器高度</td>
    </tr>
    <tr>
        <td colspan="1"><span style="color: rgb(193,199,208);"><strong>orientation&nbsp;:&nbsp;String</strong></span>
        </td>
        <td colspan="1"><br></td>
    </tr>
    <tr>
        <td colspan="1"><strong><span style="color: rgb(193,199,208);"><strong>maxTouches&nbsp;:&nbsp;Number</strong></span><br></strong></td>
        <td colspan="1"><br></td>
    </tr>
    <tr>
        <td colspan="1"><span style="color: rgb(193,199,208);"><strong><strong>showFPS&nbsp;:&nbsp;Boolean</strong></strong></span>
        </td>
        <td colspan="1"><br></td>
    </tr>
    <tr>
        <td colspan="1"><span style="color: rgb(193,199,208);"><strong><strong>showLog&nbsp;:&nbsp;Boolean</strong></strong></span>
        </td>
        <td colspan="1"><br></td>
    </tr>
    <tr>
        <td colspan="1"><span style="color: rgb(193,199,208);"><strong><strong><span
                style="color: rgb(51,102,255);"><strong>debug ：Boolean</strong></span><br></strong></strong><span
                style="color: rgb(0,51,102);">调试模式。</span><strong><strong><br></strong></strong></span></td>
        <td colspan="1">false</td>
    </tr>
    <tr>
        <td colspan="1"><strong><strong><span style="color: rgb(51,102,255);"><strong>logAdvancedTrace ：Boolean</strong></span><br></strong></strong><span
                style="color: rgb(0,51,102);">显示堆栈调用跟踪日志。</span></td>
        <td colspan="1">false</td>
    </tr>
    <tr>
        <td colspan="1"><strong><strong><span style="color: rgb(51,102,255);"><strong>language ：String</strong></span><br></strong></strong><span
                style="color: rgb(0,51,102);">设置语言。</span></td>
        <td colspan="1">默认为系统语言,可选 ["en-US", "zh-CN", "ja-JP", ....]</td>
    </tr>
    <tr>
        <td colspan="1"><br></td>
        <td colspan="1"><br></td>
    </tr>
    </tbody>
</table>
