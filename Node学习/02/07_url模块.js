var url = require('url');

var obj = url.parse('http://127.0.0.1:3000/pinglun?name=%E4%BB%A4%E7%8B%90%E5%86%B2&message=%E7%8B%AC%E5%AD%A4%E4%B9%9D%E5%89%91%E3%80%81%E5%90%B8%E6%98%9F%E5%A4%A7%E6%B3%95%E3%80%81%E6%98%93%E7%AD%8B%E7%BB%8F',true);

console.log(obj);