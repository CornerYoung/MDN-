
# H5C3

### 《购物车宣传》案例

> 综合运用h5c3知识且进行一定扩展  
> 能使用jquery完成网页常见交互行为  
> 实际工作开发当中能应对活动宣传页

##### FullPage插件

- 插件功能介绍
    + 基于 jQuery 的插件，它能够帮你很方便、很轻松的制作出全屏网站。
    + 支持鼠标滚动，支持前进后退和键盘控制，多个回调函数，
      支持手机、平板触摸事件，支持 CSS3 动画，支持窗口缩放，窗口缩放时自动调整，
      可设置滚动宽度、背景颜色、滚动速度、循环选项、回调、文本对齐方式等等。
    + 参考文档：http://www.dowebok.com/demo/2014/77/
    + 原理：window.onmousewheel = function(){ console.log('ok') };
- 使用步骤
    + 引用文件
    ~~~html
        <link rel="stylesheet" href="css/jquery.fullPage.css">
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery.fullPage.js"></script>
    ~~~
    + html结构
    ~~~html
    <div id="fullpage">
        <div class="section">第一屏</div>
        <div class="section">第二屏</div>
        <div class="section">
            <div class="slide">第三屏的第一屏</div>
            <div class="slide">第三屏的第二屏</div>
            <div class="slide">第三屏的第三屏</div>
            <div class="slide">第三屏的第四屏</div>
        </div>
        <div class="section">第四屏</div>
    </div>
    ~~~
    + js初始化
    ~~~javascript
    $(function(){
        $('#fullpage').fullpage();
    });
    ~~~
- 配置

| 选项                                | 类型   | 默认值         | 说明                                   |
| --------------------------------- | ---- | ----------- | ------------------------------------ |
| verticalCentered                  | 字符串  | true        | 内容是否垂直居中                             |
| resize                            | 布尔值  | false       | 字体是否随着窗口缩放而缩放                        |
| slidesColor                       | 函数   | 无           | 设置背景颜色                               |
| anchors                           | 数组   | 无           | 定义锚链接                                |
| scrollingSpeed                    | 整数   | 700         | 滚动速度，单位为毫秒                           |
| easing                            | 字符串  | easeInQuart | 滚动动画方式                               |
| menu                              | 布尔值  | false       | 绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动 |
| navigation                        | 布尔值  | false       | 是否显示项目导航                             |
| navigationPosition                | 字符串  | right       | 项目导航的位置，可选 left 或 right              |
| navigationColor                   | 字符串  | #000        | 项目导航的颜色                              |
| navigationTooltips                | 数组   | 空           | 项目导航的 tip                            |
| slidesNavigation                  | 布尔值  | false       | 是否显示左右滑块的项目导航                        |
| slidesNavPosition                 | 字符串  | bottom      | 左右滑块的项目导航的位置，可选 top 或 bottom         |
| controlArrowColor                 | 字符串  | #fff        | 左右滑块的箭头的背景颜色                         |
| loopBottom                        | 布尔值  | false       | 滚动到最底部后是否滚回顶部                        |
| loopTop                           | 布尔值  | false       | 滚动到最顶部后是否滚底部                         |
| loopHorizontal                    | 布尔值  | true        | 左右滑块是否循环滑动                           |
| autoScrolling                     | 布尔值  | true        | 是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条 |
| scrollOverflow                    | 布尔值  | false       | 内容超过满屏后是否显示滚动条                       |
| css3                              | 布尔值  | false       | 是否使用 CSS3 transforms 滚动              |
| paddingTop                        | 字符串  | 0           | 与顶部的距离                               |
| paddingBottom                     | 字符串  | 0           | 与底部距离                                |
| fixedElements                     | 字符串  | 无           |                                      |
| normalScrollElements              |      | 无           |                                      |
| keyboardScrolling                 | 布尔值  | true        | 是否使用键盘方向键导航                          |
| touchSensitivity                  | 整数   | 5           |                                      |
| continuousVertical                | 布尔值  | false       | 是否循环滚动，与 loopTop 及 loopBottom 不兼容    |
| animateAnchor                     | 布尔值  | true        |                                      |
| normalScrollElementTouchThreshold | 整数   | 5           |   -                             |

- 方法

| 名称                     | 说明                      |
| ---------------------- | ----------------------- |
| moveSectionUp()        | 向上滚动                    |
| moveSectionDown()      | 向下滚动                    |
| moveTo(section, slide) | 滚动到                     |
| moveSlideRight()       | slide 向右滚动              |
| moveSlideLeft()        | slide 向左滚动              |
| setAutoScrolling()     | 设置页面滚动方式，设置为 true 时自动滚动 |
| setAllowScrolling()    | 添加或删除鼠标滚轮/触控板控制         |
| setKeyboardScrolling() | 添加或删除键盘方向键控制            |
| setScrollingSpeed()    | 定义以毫秒为单位的滚动速度           |

- 回调函数

| 名称             | 说明                                       |
| -------------- | ---------------------------------------- |
| afterLoad      | 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算 |
| onLeave        | 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；nextIndex 是滚动到的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down。 |
| afterRender    | 页面结构生成后的回调函数，或者说页面初始化完成后的回调函数            |
| afterSlideLoad | 滚动到某一水平滑块后的回调函数，与 afterLoad 类似，接收 anchorLink、index、slideIndex、direction 4个参数 |
| onSlideLeave   | 某一水平滑块滚动前的回调函数，与 onLeave 类似，接收 anchorLink、index、slideIndex、direction 4个参数 |

##### 搭建页面开发结构
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>购物网站宣传页面</title>
    <link rel="stylesheet" href="css/jquery.fullpage.min.css">
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
<!--更多精彩-->
<div class="more"><img src="images/00-more.png" alt=""></div>
<!--全屏滚动-->
<div class="container">
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
</div>
<script src="js/jquery.min.js"></script>
<script src="js/jquery.fullpage.min.js"></script>
<script>
    $(function() {
        $('.container').fullpage();
    })
</script>
~~~

##### 完成八屏页面动画

- 模块一: 标题(title)
- 模块二: 商品列表(list)
- 模块三: 选购(buy)
- 模块四: 填写信息(info)
- 模块五: 付款(payment)
- 模块六: 送货(delivery)
- 模块七: 评价(appraise)
- 模块八: 购物(shopping)

具体需求参照示例


##### 补充知识（扩展知识）
- 由于浏览器兼容问题，没有广泛使用，大家了解即可。

<img src="data:image/png;base64,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"> 

### 《QQ TIM》案例

##### Stellar插件
- 描述
    + 视差滚动（Parallax Scrolling）指网页滚动过程中，
      多层次的元素进行不同程度的移动，视觉上形成立体运动效果的网页展示技术
      主要核心就是前景和背景以不同的速度移动，从而创造出3D效果。 
      这种效果可以给网站一个很好的补充。
- 特性
    + 视差滚动效果酷炫，适合于个性展示的场合。
    + 视差滚动徐徐展开，适合于娓娓道来，讲故事的场合。
    + 视差滚动容易迷航，需要具备较强的导航功能。
- 原理
    + 传统的网页的文字、图片、背景都是一起按照相同方向相同速度滚动的，
      而视差滚动则是在滚动的时候，内容和多层次的背景实现或不同速度，或不同方向的运动。
      有的时候也可以加上一些透明度、大小的动画来优化显示。利用background-attachment属性实现。 

- 使用步骤
    + 引用文件
    ~~~html
        <script src="jquery/jquery.min.js"></script>
        <script src="jquery.stellar.min.js"></script>
    ~~~
    + html结构
    ```html
        <div class="content" id="content1">
            <p>TEXT HERE</p>
        </div>
        <div class="content" id="content2">
            <p>TEXT HERE</p>
        </div>
        <div class="content" id="content3" data-stellar-background-ratio="0.5">
            <p>TEXT HERE</p>
        </div>
        <div class="content" id="content4" data-stellar-background-ratio="0.5">
            <p>TEXT HERE</p>
        </div>
        <div class="content" id="content5" data-stellar-background-ratio="0.5">
            <p>TEXT HERE</p>
        </div>
        <div class="content" id="content6" data-stellar-background-ratio="0.5">
            <p>TEXT HERE</p>
        </div> 
    ```
    + 基本样式
    ~~~css
        .content {
            background-attachment: fixed;
            height: 400px;
        }
        #content1 {
            background-image: url("..");
        }
        #content2 {
            background-image: url("..");
        }
        #content3 {
            background-image: url("..");
        }
        #content4 {
            background-image: url("..");
        }
        #content5 {
            background-image: url("..");
        }
        #content6 {
            background-image: url("..");
        }
    ~~~
    + js初始化
    ~~~javascript
        $.stellar({
            horizontalScrolling: false,
            responsive: true
        });
    ~~~
- 参数解释

| 名称                                      | 说明                                       |
| --------------------------------------- | ---------------------------------------- |
| horizontalScrolling 和 verticalScrolling | 该配置项用来设置视差效果的方向。horizontalScrolling设置水平方向，verticalScro设置垂直方向， 为布尔值，默认为true |
| responsive                              | 该配置项用来制定load或者resize时间触发时是否刷新页面，其值为布尔值，默认为false |
| hideDistantElements                     | 该配置项用来设置移出视线的元素是否隐藏，其值为布尔值，若不想隐藏则设置为false |
| data-stellar-ratio="2"                  | 定义了此元素针对页面滚动的速度比率，比如，0.5为页面滚动的50%，2为页面滚动的200%，所以数值越大，你可以看到页面元素滚动速度越快。 |
| data-stellar-background-ratio           | 该配置项用在单个元素中，其值为一个正数，用来改变被设置元素的影响速度。 例如 值为0.3时，则表示背景的滚动速度为正常滚动速度的0.3倍。如果值为小数时最好在样式表中设置 |


##### 完成视觉滚动差页面开发

- 模块一: 导航(nav)
- 模块二: 宣传(banner)
- 模块三: 语音聊天(sound)
- 模块四: 文件传输(file)
- 模块五: 兴趣部落(interest)
- 模块六: 底部(footer)

具体需求参照示例


### H5-dom扩展


##### 获取元素

~~~javascript
document.getElementsByClassName ('class'); 
//通过类名获取元素，以伪数组形式存在。

document.querySelector('selector');
//通过CSS选择器获取元素，符合匹配条件的第1个元素。

document.querySelectorAll('selector'); 
//通过CSS选择器获取元素，以伪数组形式存在。
~~~

##### 类名操作

~~~javascript
Node.classList.add('class'); 
//添加class

Node.classList.remove('class'); 
//移除class

Node.classList.toggle('class'); 
//切换class，有则移除，无则添加

Node.classList.contains('class'); 
//检测是否存在class
~~~

##### 自定义属性

> 在HTML5中我们可以自定义属性，其格式如下data-*=""

~~~html

<div id="demo" data-my-name="itcast" data-age="10">
<script>
/*
  Node.dataset是以对象形式存在的，当我们为同一个DOM节点指定了多个自定义属性时，
  Node.dataset则存储了所有的自定义属性的值。
  */
var demo = document.querySelector(反馈);
//获取
//注：当我们如下格式设置时，则需要以驼峰格式才能正确获取
var name = demo.dataset['myName'];
var age = demo.dataset['age'];
//设置
demo.dataset['name'] = 'web developer';
<script/>
~~~


### H5-新增API

##### 全屏方法
> HTML5规范允许用户自定义网页上任一元素全屏显示。

- Node.requestFullScreen() 开启全屏显示
- Node.cancelFullScreen() 关闭全屏显示
- 由于其兼容性原因，不同浏览器需要添加前缀如：
  webkit内核浏览器：webkitRequestFullScreen、webkitCancelFullScreen，如chrome浏览器。
  Gecko内核浏览器：mozRequestFullScreen、mozCancelFullScreen，如火狐浏览器。
- document.fullScreen检测当前是否处于全屏
  不同浏览器需要添加前缀
  document.webkitIsFullScreen、document.mozFullScreen

##### 多媒体

> 自定义播放器

方法

| 方法             | 描述                   |
| -------------- | -------------------- |
| addTextTrack() | 向音频/视频添加新的文本轨道       |
| canPlayType()  | 检测浏览器是否能播放指定的音频/视频类型 |
| load()         | 重新加载音频/视频元素          |
| play()         | 开始播放音频/视频            |
| pause()        | 暂停当前播放的音频/视频         |


属性


| 属性                  | 描述                                   |
| ------------------- | ------------------------------------ |
| audioTracks         | 返回表示可用音轨的 AudioTrackList 对象          |
| autoplay            | 设置或返回是否在加载完成后随即播放音频/视频               |
| buffered            | 返回表示音频/视频已缓冲部分的 TimeRanges 对象        |
| controller          | 返回表示音频/视频当前媒体控制器的 MediaController 对象 |
| controls            | 设置或返回音频/视频是否显示控件（比如播放/暂停等）           |
| crossOrigin         | 设置或返回音频/视频的 CORS 设置                  |
| currentSrc          | 返回当前音频/视频的 URL                       |
| currentTime         | 设置或返回音频/视频中的当前播放位置（以秒计）              |
| defaultMuted        | 设置或返回音频/视频默认是否静音                     |
| defaultPlaybackRate | 设置或返回音频/视频的默认播放速度                    |
| duration            | 返回当前音频/视频的长度（以秒计）                    |
| ended               | 返回音频/视频的播放是否已结束                      |
| error               | 返回表示音频/视频错误状态的 MediaError 对象         |
| loop                | 设置或返回音频/视频是否应在结束时重新播放                |
| mediaGroup          | 设置或返回音频/视频所属的组合（用于连接多个音频/视频元素）       |
| muted               | 设置或返回音频/视频是否静音                       |
| networkState        | 返回音频/视频的当前网络状态                       |
| paused              | 设置或返回音频/视频是否暂停                       |
| playbackRate        | 设置或返回音频/视频播放的速度                      |
| played              | 返回表示音频/视频已播放部分的 TimeRanges 对象        |
| preload             | 设置或返回音频/视频是否应该在页面加载后进行加载             |
| readyState          | 返回音频/视频当前的就绪状态                       |
| seekable            | 返回表示音频/视频可寻址部分的 TimeRanges 对象        |
| seeking             | 返回用户是否正在音频/视频中进行查找                   |
| src                 | 设置或返回音频/视频元素的当前来源                    |
| startDate           | 返回表示当前时间偏移的 Date 对象                  |
| textTracks          | 返回表示可用文本轨道的 TextTrackList 对象         |
| videoTracks         | 返回表示可用视频轨道的 VideoTrackList 对象        |
| volume              | 设置或返回音频/视频的音量                        |

事件

| 事件             | 描述                     |
| -------------- | ---------------------- |
| abort          | 当音频/视频的加载已放弃时          |
| canplay        | 当浏览器可以播放音频/视频时         |
| canplaythrough | 当浏览器可在不因缓冲而停顿的情况下进行播放时 |
| durationchange | 当音频/视频的时长已更改时          |
| emptied        | 当目前的播放列表为空时            |
| ended          | 当目前的播放列表已结束时           |
| error          | 当在音频/视频加载期间发生错误时       |
| loadeddata     | 当浏览器已加载音频/视频的当前帧时      |
| loadedmetadata | 当浏览器已加载音频/视频的元数据时      |
| loadstart      | 当浏览器开始查找音频/视频时         |
| pause          | 当音频/视频已暂停时             |
| play           | 当音频/视频已开始或不再暂停时        |
| playing        | 当音频/视频在已因缓冲而暂停或停止后已就绪时 |
| progress       | 当浏览器正在下载音频/视频时         |
| ratechange     | 当音频/视频的播放速度已更改时        |
| seeked         | 当用户已移动/跳跃到音频/视频中的新位置时  |
| seeking        | 当用户开始移动/跳跃到音频/视频中的新位置时 |
| stalled        | 当浏览器尝试获取媒体数据，但数据不可用时   |
| suspend        | 当浏览器刻意不获取媒体数据时         |
| timeupdate     | 当目前的播放位置已更改时           |
| volumechange   | 当音量已更改时                |
| waiting        | 当视频由于需要缓冲下一帧而停止        |

##### 地理定位

>在HTML规范中，增加了获取用户地理信息的API，
>这样使得我们可以基于用户位置开发互联网应用，
>即基于位置服务 (Location Base Service)

- 获取当前地理信息
~~~
navigator.geolocation.getCurrentPosition(successCallback, errorCallback) 
~~~
- 重复获取当前地理信息
~~~
navigator. geolocation.watchPosition(successCallback, errorCallback)
~~~
- 当成功获取地理信息后，会调用succssCallback，并返回一个包含位置信息的对象position。
  position.coords.latitude纬度
  position.coords.longitude经度
  position.coords.accuracy精度
  position.coords.altitude海拔高度
- 当获取地理信息失败后，会调用errorCallback，并返回错误信息error
- 在现实开发中，通过调用第三方API（如百度地图）来实现地理定位信息，这些API都是基于用户当前位置的，并将用位置位置（经/纬度）当做参数传递，就可以实现相应的功能。

##### 本地存储

>随着互联网的快速发展，基于网页的应用越来越普遍，
>同时也变的越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，
>HTML5规范提出了相关解决方案。

+ 特性
    - 设置、读取方便
    - 容量较大，sessionStorage约5M、localStorage约20M
    - 只能存储字符串，可以将对象JSON.stringify() 编码后存储
+ window.sessionStorage
    - 生命周期为关闭浏览器窗口
    - 在同一个窗口(页面)下数据可以共享
+ window.localStorage
    - 永久生效，除非手动删除（服务器方式访问然后清除缓存）
    - 可以多窗口（页面）共享
+ 方法
    - setItem(key, value) 设置存储内容
    - getItem(key) 读取存储内容
    - removeItem(key) 删除键值为key的存储内容
    - clear() 清空所有存储内容

##### 历史管理
>提供window.history，对象我们可以管理历史记录，
>可用于单页面应用，Single Page Application，可以无刷新改变网页内容。

- pushState(data, title, url) 追加一条历史记录  
    + data用于存储自定义数据，通常设为null
      ​+ title网页标题，基本上没有被支持，一般设为空
      ​+ url 以当前域为基础增加一条历史记录，不可跨域设置
- replaceState(data, title, url) 与pushState()基本相同，
  不同之处在于replaceState()，只是替换当前url，不会增加/减少历史记录。
- onpopstate事件，当前进或后退时则触发  

##### 离线应用

> HTML5中我们可以轻松的构建一个离线（无网络状态）应用，只需要创建一个cache manifest文件。

+ 优势
    - 1、可配置需要缓存的资源
    - 2、网络无连接应用仍可用
    - 3、本地读取缓存资源，提升访问速度，增强用户体验
    - 4、减少请求，缓解服务器负担
+ 缓存清单
    - 一个普通文本文件，其中列出了浏览器应缓存以供离线访问的资源，推荐使用.appcache为后缀名
    - 例如我们创建了一个名为demo.appcache的文件，然后在需要应用缓存在页面的根元素(html)添加属性manifest="demo.appcache"，路径要保证正确。

+ manifest文件格式
    - 1、顶行写CACHE MANIFEST
    - 2、CACHE: 换行 指定我们需要缓存的静态资源，如.css、image、js等
    - 3、NETWORK: 换行 指定需要在线访问的资源，可使用通配符
    - 4、FALLBACK: 换行 当被缓存的文件找不到时的备用资源

+ 其它
    - 1、CACHE: 可以省略，这种情况下将需要缓存的资源写在CACHE MANIFEST
    - 2、可以指定多个CACHE: NETWORK: FALLBACK:，无顺序限制
    - 3、#表示注释，只有当demo.appcache文件内容发生改变时或者手动清除缓存后，才会重新缓存。
    - 4、chrome 可以通过chrome://appcache-internals/工具和离线（offline）模式来调试管理应用缓存

##### 文件读取

> HTML5新增内建对象，可以读取本地文件内容。

##### 网络状态

- 我们可以通过window.onLine来检测，用户当前的网络状况，返回一个布尔值
    + window.online用户网络连接时被调用
    + window.offline用户网络断开时被调用

### 转换
- 缩放 scale
- 位移 translate
- 旋转 rotate
- 倾斜 skew
以上四种转换方式是比较特殊，其实他们都是由 matrix 矩阵 

### 动画速度
- ease  先快后慢 最后非常慢
- linear 匀速
- ease-in 速度越来越快
- ease-out 速度越来越慢
- ease-in-out 速度先快后慢
以上五种动画速度是比较特殊，其实他们都是由 贝塞尔曲线 来的

### 3d转换 translate3d rotate3d
2d转换和3d转换区别：
1.除了多了一个参数表示3d
2.在移动端使用3d转换可以优化性能（如果设备有3d加速引擎 GPU 可以提高性能 ,是2dz转换是无法调用GPU）
