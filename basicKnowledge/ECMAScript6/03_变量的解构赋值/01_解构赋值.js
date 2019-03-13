let obj = {
    name: 'Jack',
    age: 18
};

let {
    name,
    age
} = obj;

console.log(name, age);

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