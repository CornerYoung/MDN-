var fs = require('fs')

/**
 * 无法保证回调顺序，速度由文件大小决定
 */
fs.readFile('./data/a.txt', 'utf8', function (err, data) {
  if (err) {
    throw err
  }
  console.log(data)
});

fs.readFile('./data/b.txt', 'utf8', function (err, data) {
  if (err) {
    throw err
  }
  console.log(data)
});

fs.readFile('./data/c.txt', 'utf8', function (err, data) {
  if (err) {
    throw err
  }
  console.log(data)
});


/**
 * 可以保证回调函数的执行顺序，必须使用这种嵌套的方式
 */
fs.readFile('./data/a.txt', 'utf8', function (err, data) {
  if (err) {
    // return console.log('读取失败')
    // 抛出异常
    //    1. 阻止程序的执行
    //    2. 把错误消息打印到控制台
    throw err
  }
  console.log(data)
  fs.readFile('./data/b.txt', 'utf8', function (err, data) {
    if (err) {
      // return console.log('读取失败')
      // 抛出异常
      //    1. 阻止程序的执行
      //    2. 把错误消息打印到控制台
      throw err
    }
    console.log(data)
    fs.readFile('./data/c.txt', 'utf8', function (err, data) {
      if (err) {
        // return console.log('读取失败')
        // 抛出异常
        //    1. 阻止程序的执行
        //    2. 把错误消息打印到控制台
        throw err
      }
      console.log(data)
    })
  })
})
