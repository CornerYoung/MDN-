//自调用函数---小蛇
(function () {
    //用来存放小蛇的身体
    var elements = [];

    //小蛇的构造函数
    function Snake(width, height, direction) {
        //小蛇的每个部分的宽
        this.width = width || 20;
        this.height = height || 20;

        //身体
        this.body = [{
                x: 3,
                y: 2,
                color: 'red'
            }, //=======头
            {
                x: 2,
                y: 2,
                color: 'orange'
            }, //=====身体
            {
                x: 1,
                y: 2,
                color: 'orange'
            } //=====身体
        ];

        //方向
        this.direction = direction || 'right';
    };

    //添加原型方法，小蛇初始化函数
    Snake.prototype.init = function (map) {

        //在显示新的小蛇时，先删除原来的小蛇，形成小蛇运动的效果
        remove();

        for (var i = 0; i < this.body.length; i++) {
            //保存小蛇每一块身体的位置和颜色值
            var obj = this.body[i];
            //创建小蛇div
            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = obj.x * this.width + 'px';
            div.style.top = obj.y * this.height + 'px';
            div.style.backgroundColor = obj.color;
            //把小蛇身体加入到地图中去
            map.appendChild(div);

            //把小蛇加入到elements数组中，是为了后面删除
            elements.push(div);
        };
    };

    //为原型添加方法-------小蛇动起来
    Snake.prototype.move = function (food, map) {

        //改变小蛇的身体位置坐标
        var i = this.body.length - 1; //2
        //倒循环遍历
        for (; i > 0; i--) {
            //小蛇身体第二块（从右往左数，去掉头）的坐标被第一块的坐标替换掉，第一块坐标被蛇头坐标换掉
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        };

        //通过判断蛇头的方向，确定舌头的横纵坐标
        switch (this.direction) {
            case 'right':
                this.body[0].x += 1;
                break;
            case 'left':
                this.body[0].x -= 1;
                break;
            case 'top':
                this.body[0].y -= 1;
                break;
            case 'bottom':
                this.body[0].y += 1;
                break;
        };

        //判断有没有吃到食物
        //小蛇的头的坐标和食物的坐标一致
        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;
        //当小蛇头部坐标和食物坐标一致时，小蛇的身体变长，body数组最后一项追加进数组内，然后重新初始化食物
        if (headX == food.x && headY == food.y) {
            var snakeLast = this.body[this.body.length - 1]; //小蛇尾巴
            //console.log(snakeLast)
            this.body.push({
                x: snakeLast.x,
                y: snakeLast.y,
                color: snakeLast.color
            }); //小蛇身体追加尾巴

            food.init(map); //重新初始化小蛇
        };
    };

    //删除旧小蛇函数--------私有函数
    function remove() {
        //获取数组
        var i = elements.length - 1;
        for (; i >= 0; i--) { //这里 >= 0 是要把蛇头也从地图上删掉
            //先从当前的子元素中找到该子元素的父级元素，然后再删除这个子元素
            var ele = elements[i];
            //从地图上删除这个子元素div
            ele.parentNode.removeChild(ele);
            //在数组中也删除这个子元素
            elements.splice(i, 1)
        };
    };

    //把Snake暴露给window，在外部进行访问
    window.Snake = Snake;
}());