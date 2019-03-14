var fs = require('fs');

var data = fs.readFileSync('./node.txt');
console.log(data.toString());
console.log('执行结束！')

var data2 = fs.readFile('./node.txt',function(err,data){
    if(err){
        return console.log(err);
    }
    console.log(data.toString());
});
console.log('执行结束！')

/**
 * Node.js 异步编程的直接体现就是回调。
 * 
 * 异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。
 * 
 * 回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。
 * 
 * 例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。
 * 
 * 这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。
 */