/**
 * 数组的解构赋值
 */
//只要等号两边的模式相同，左边的变量就会被赋予对应的值
let [a, b, c] = [1, 2, 3];
let [, , third] = ["first", "second", "third"];
let [head, ...tail] = [1, 2, 3, 4];
let [x, y, ...z] = ['a'];
//解构赋值允许指定默认值。
let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'


/**
 * 对象的解构赋值
 */
let obj = {
    name: 'Jack',
    age: 18
};

let {
    name,
    age
} = obj;

console.log(name, age);

//对象的解构也可以指定默认值。
var { x = 3 } = {};
x // 3

var { x, y = 5 } = { x: 1 };
x // 1
y // 5

var { x: y = 3 } = {};
y // 3

var { x: y = 3 } = { x: 5 };
y // 5

var { message: msg = 'Something went wrong' } = {};

/**
 * 函数参数的默认值
 * 传递的参数也是要以对象的形式
 */
function func(type, num, isHappy) {
    type = type || 'click';
    num = num || 123;
    isHappy = isHappy || true;
    console.log('type: ' + type, 'num: ' + num, 'isHappy: ' + isHappy);
};
func();
func('mouseover',456,false);

function fn({
    type = 'click',
    num = 123,
    isHappy = true
}) {
    console.log('type: ' + type, 'num: ' + num, 'isHappy: ' + isHappy);
};

fn({
    type: 'mouseover',
    num: 456,
    isHappy: false
});
fn({})