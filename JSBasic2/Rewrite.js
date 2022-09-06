//findIndex
function myFindIndex(Array, elementLookFor){
    for(let i = 0; i < Array.length; i++ ){
        if(Array[i] === elementLookFor){
            return i;
        }
    }
    return -1;
}
console.log(myFindIndex([1,2,3,4,5], 6));
console.log(myFindIndex([1,2,3,4,5,5], 5));
//map
function callBackMap(item){
    return item * 2;
}
function myMap(myArray, callBack){
    let newArray = [];
    for(let i of myArray){
        newArray.push(callBack(i))
    }
    return newArray;
}
console.log(myMap([1,2],callBackMap))
//every
function callBackEvery(item){
    return (item % 2 === 0)
}
function myEvery(myArray, callBack){
    for(let i of myArray){
        if(callBack(i)){
            return false;
        }
    }
    return true;
}
//ví dụ check mảng có tất cả các phần tử không chia hết cho 2 hay không
console.log(myEvery([1,3,5,6],callBackEvery)); 
//sort
function callBackSort(){

}
function mySort(myArray, callBack){

}
//flat
function myFlat(myArray, depth){
    let count = depth;
    let arrTemp = [...myArray];
    let resArr = [];
    while(count > 0){
        for(let i of arrTemp){
            if(Array.isArray(i)){
                //check array and push
                resArr.push(...i);
            } else resArr.push(i);
        }
        arrTemp = resArr; //gán arrtemp bằng mảng kết quả để chạy tiếp
        resArr = []; //reset mảng kết quả
        count--; 
    }
    return arrTemp;
}
console.log(myFlat([1,[2,[3,3]],[123],2], 2));

//reduce
function callBackReduce(a, b, index, arr){
    return a + b;
}
function myReduce(myArray, callBack, initialValue){
    let arrTemp = [...myArray];
    let result = initialValue;
    for( let i = 0; i < arrTemp.length; i++){
        result = callBack(result, arrTemp[i], i, arrTemp);
    }
    return result;
}
console.log(myReduce([1,2,4], callBackReduce, 0))

