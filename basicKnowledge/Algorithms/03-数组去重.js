var arr = [3, 4, 5, 3, 2, 6, 2, 8, 6, 5, 3, 9, 7, 6, 5, 4, 3, 2, 1, 1, 4];

/**
 * 个人最喜欢的一种方式
 */

function diff1(arr) {
    console.log(arr.filter((item, index) => {
        return arr.indexOf(item) === index
    }));
};
diff1(arr)

/**
 * 返回新数组
 */
function diff2(arr) {
    var newArr = [];
    arr.forEach(item => {
        if (newArr.indexOf(item) === -1) {
            newArr.push(item);
        };
    });
    return newArr;
};
console.log(diff2(arr))

/**
 * 最便捷的一种方式
 */
function diff3(arr) {
    //return new Set([...arr]);
    return [...new Set(arr)]
};
console.log(diff3(arr))

/**
 * 起始方法
 */
function diff4(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(i, 1)
                i--;
            }
        }
    }
    console.log(arr)
};

function diff5(arr) {
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                arr.splice(i,1)
                i--;
            }
        }
    }
    console.log(arr)
};
diff4(arr)
diff5(arr)