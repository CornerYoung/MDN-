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

//为任意元素绑定任意事件类型，事件处理函数兼容代码
function addEventListener (element,type,fn) {
    //判断浏览器是否支持这个方法
    if (element.addEventListener) {
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent('on'+type,fn);
    }else{
        element['on'+type] = fn;
    };
};

//解绑事件兼容代码
function removeEventListener(element, type, fn) {
    //判断浏览器是否支持这个方法
    if (element.removeEventListener) {
        element.removeEventListener(type, fn, false);
    } else if (element.detachEvent) {
        element.detachEvent('on' + type, fn);
    } else {
        element['on' + type] = null;
    };
};