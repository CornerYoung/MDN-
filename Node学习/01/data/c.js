var foo = 'ccc';

var age = 18;

exports.age = age;

exports.foo = 'hello!';

exports.add = function (x, y) {
    return x + y;
};

function add(x, y) {
    return (x + y) * 100;
};

exports.readFile = function (path, callBack) {
    console.log('文件路径： ' + path);
};