//自调用函数------创建食物
(function () {
    var elements = []; //用来存放每个小方块食物的
    //食物就是一个对象，有宽，有高，有颜色，有位置（横纵坐标），先定义构造函数，然后创建对象
    function Food(x, y, width, height, color) {
        //横纵坐标
        this.x = x || 0;
        this.y = y || 0;
        //宽和高
        this.width = width || 20;
        this.height = height || 20;
        //背景颜色
        this.color = color || 'green';
    };
    //在Food原型对象上添加初始化食物的函数，创建食物小方块，设置宽高颜色位置加入到map中去（作用：在页面上显示这个食物）
    //因为食物要在地图上显示，所以需要地图这个参数（map--就是页面上的.class=map的这个div）
    Food.prototype.init = function (map) {

        //初始化的时候先删除这个小食物
        //外部无法访问的函数
        remove();


        //创建div，加入到地图中去
        var div = document.createElement('div');
        //设置食物的属性
        //横纵坐标先停止-------随机产生
        // div.style.left = this.x;
        // div.style.top = this.y;
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
        //先脱离文档流
        div.style.position = 'absolute';
        //随机横纵坐标
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';

        //把创建好的食物加入到地图中去
        map.appendChild(div);

        //把div加入到数组elements中去
        elements.push(div);

    };

    //私有函数，外部无法访问，删除食物的作用
    function remove() {
        //  elements数组中有这个食物
        for (var i = 0; i < elements.length; i++) {
            //找到这个子元素（食物）的父元素，从父元素中删除子元素
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            //在elements数组中也要删掉这个食物
            elements.splice(i, 1)
        };
    };

    //把Food暴露给window，外部可以使用
    window.Food = Food;
}());