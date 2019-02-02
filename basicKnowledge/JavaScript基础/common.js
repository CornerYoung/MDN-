function $ (id) {
    return document.getElementById(id)
};

//封装获取任意标签中任意文本内容代码
function getInnerText (element) {
    if (typeof element.innerText == 'undefined') {
        return element.textContent;
    }else{
        return element.innerText;
    };
};

//封装设置任意标签中任意文本内容代码
function setInnerText (element,text) {
    //判断浏览器是否支持 innerText
    if (typeof element.textContent == 'undefined') {
        element.innerText = text;
    }else{
        element.textContent = text;
    };
};