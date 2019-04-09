function occNumber(arr, item) {
    var index = -1;
    do {
        index = arr.indexOf(item, index + 1);
        if(index !== -1){
            console.log(index)
        };
    } while (index !== -1);
};

var arr = ['a','c','a','b','a',1,3,2,1];

occNumber(arr,'a');
occNumber(arr,1);