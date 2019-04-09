var arr = ['a','s','a','b',23,1,2,23,'b','a',2,'a']
function count(arr) {
    var obj = {};
    arr.forEach( item => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] ++;
        };
    });
    console.log(obj)
};
count(arr)