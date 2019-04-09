function sort(arr) {
    var count = 1;
    //外层循环控制轮数
    for (var i = 0; i < arr.length - 1; i++) {
        //内层循环控制次数
        for (var j = 0; j < arr.length - i; j++) {
            //内层循环控制次数
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            };
            count++;
        };
    };
    console.log(count)
    return arr;
}

var arr = [2, 4, 23, 1, 3, 8, 4, 9, 10];
console.log(sort(arr));

/*********************优化*******************/

function sortPro(arr) {
    var count = 1;
    //外层循环控制轮数
    for (var i = 0; i < arr.length - 1; i++) {
        //假设排序好了
        var flag = true;
        //内层循环控制次数
        for (var j = 0; j < arr.length - i; j++) {
            //内层循环控制次数
            if (arr[j] > arr[j + 1]) {
                flag = false;
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            };
            count++;
        };
        if (flag) {
            break
        };
    };
    
    console.log(count)
    return arr;
};
console.log(sortPro(arr));