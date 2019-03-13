/**
 * 通过 let 声明的变量最大的特性就是： 块级作用域
 */
let name = 'Jack';

if (true) {
    let name = 'Rose';
    if (true) {
        let name = 'TieChui'
        console.log(name);
    };
    console.log(name)
};
console.log(name);

/**
 * 不存在变量提升
 */
// console.log(age); //这里会报错，如果用 var 来声明，则会显示 undefined
// let age = 18;

/**
 * 暂时性死区
 */
var gender = '男';
if(true){
    //let 声明会绑定当前的块区域，这里的 gender 并不会查找外边的 gender
    gender = '女';
    let gender;
};
//console.log(gender); //这里会报错

/**
 * 不允许重复声明
 */
function fn(){
    var a = 1;
    let a = 10
    console.log(a);
};

function func(){
    let b = 100;
    let b = 200;
    console.log(b);
};
fn();
func();