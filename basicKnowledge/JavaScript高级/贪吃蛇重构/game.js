//自调用函数---游戏对象
(function () {

    //准备that，保存指向实例对象的this，用于内部有函数调用的话，指向不变
    var that = null;

    //游戏的构造函数
    function Game(map) {
        this.food = new Food(); //食物对象
        this.snake = new Snake(); //小蛇对象
        this.map = map; //地图
        //将实例对象的this保存在that中-------------此时that就是this
        that = this;
    };

    //添加原型方法=============初始化游戏，可以设置小蛇和食物显示出来
    Game.prototype.init = function () {
        //初始化食物
        this.food.init(this.map);
        //初始化小蛇
        this.snake.init(this.map);
        //调用小蛇自动移动的原型方法
        this.snakeRun();
        //通过获取用户按键值，改变小蛇移动方向
        this.bindKey();
        //在setInterval中，this指向顶级对象window，不再是实例对象，应该在setInterval外面把实例对象的this保存下来
        //这行代码后面不在这里写 ==============> 尽可能的保持一个方法做一件事
        // setInterval(function(){
        //     that.snake.move(that.food,that.map);
        //     that.snake.init(that.map);
        // },100);
    };

    //添加原型方法=============设置小蛇自动动起来
    Game.prototype.snakeRun = function () {
        var timeId = setInterval(function () {
            //小蛇移动
            this.snake.move(this.food, this.map);
            //小蛇重新初始化
            this.snake.init(this.map);

            //小蛇能够移动的最大范围
            var maxX = this.map.offsetWidth / this.snake.width;
            var maxY = this.map.offsetHeight / this.snake.height;

            //小蛇头部移动的横纵坐标
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;

            //判断小蛇是否触碰到地图边缘
            if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
                clearInterval(timeId); //清除定时器
                alert('Game Over!!!')
            };
        }.bind(that), 200); //bind方法，改变了this指向
    };

    //添加原型方法=============设置用户按键，改变小蛇的移动方向
    Game.prototype.bindKey = function () {
        //在document上绑定键盘按下事件，获取用户的按键值，改变小蛇方向
        document.addEventListener('keydown', function (e) {
            //这里的this应该是触发keydown的事件对象-----documen，
            //所以，这里的this就是document
            //获取按键值，判断方向
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = 'left';
                    break;
                case 38:
                    this.snake.direction = 'top';
                    break;
                case 39:
                    this.snake.direction = 'right';
                    break;
                case 40:
                    this.snake.direction = 'bottom';
                    break;
            };
        }.bind(that)); //bind改变this指向
    };

    //把Game暴露给window，外部就可以访问Game对象了
    window.Game = Game;
}());