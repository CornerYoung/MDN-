/**
 * 模版字符串：凡是需要字符串拼接的地方，都推荐使用模版字符串
 */
let name = 'Jack';

function fn() {
    return 'hello world!'
};

//模版字符串可以直接换行，原样输出，类似于 HTML 中的 textarea
let person = `hello! ${name} haha~
my name is ${name}
调用函数： ${fn()}`

console.log(person);