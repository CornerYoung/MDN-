function $ (id) {
    return document.getElementById(id)
};

function getInnerText (element) {
    if (typeof element.innerText == 'undefind') {
        return element.textContent;
    }else{
        return element.innerText;
    };
};