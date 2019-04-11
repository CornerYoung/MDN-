var url = 'www.young.cn/index?name=zs&age=18&id=2432423&password=hsi3568sfg';

function getUrl(url) {
    var params = url.substr(url.indexOf('?')+1);
    var paramsArr = params.split('&');
    var obj = {};
    paramsArr.forEach(item => {
        var itemArr = item.split('=');
        obj[itemArr[0]] = itemArr[1];
    });
    return obj;
};

console.log(getUrl(url));