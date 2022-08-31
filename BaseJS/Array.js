//array-check-09
function isIncreasingNumberList(ar){
    for(let i = 0; i < ar.length; i++){
        if(ar[i] >= ar[i + 1]){
            return false;
        }
    }
    return true;
}
console.log(isIncreasingNumberList([1,2,3,4,6,5]))
//Arraycheck01
function isSymetricList(arr){
    if(arr === []) return false;
    if(arr.length === 1) return true;
    return arr.join('') === arr.reverse('').join('');
    /* let temp = [...arr].reverse();
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== temp[i]){
            return false;
        }
    }
    return true;
    */
    
}
console.log(isSymetricList([1,2,3,4,5]));
console.log(isSymetricList([1,2,3,3,2,1]))
//ArrayCheck12

function findFiboNaci(n){
    if(n == 0 || n == 1) return 1;
    return findFiboNaci(n - 1) + findFiboNaci(n - 2) 
}
function findFiboList(){
    let n = 1;
    let fiboarr = [];
    while(findFiboNaci(n) < 100){
        fiboarr.push(findFiboNaci(n));
        n++; 
    }
    return fiboarr;
}
function hasFibonaciNumber(arr){
    let arrtemp = findFiboList();
    return arr.some(item => arrtemp.includes(item))
}
console.log(hasFibonaciNumber([1,2,3,4,5]))


//Array-find-05
function findSecondLargestNumber(numberList){
    numberList.sort((a,b) => a - b) // sort 
    return numberList[numberList.length-2];
}
console.log(findSecondLargestNumber([1,2,4,5,6]))
//Array-find-06
function findLastPerfectSquare(numberList){
    let lastnum = 0;
    for(let i of numberList){
        if(isPerfectSquare(i)){
            lastnum = i;
        }
    }
    if(lastnum !== 0) {
        return lastnum;
    } return false;
}
console.log(findLastPerfectSquare([1,2,3,4,5,6,7,16,36,49]))
//Array-Count-05
function checkinArray(n, arr){
    for(let i of arr){
        if( i === n) {
            return true;
        }
    }
    return false;
}
function countNumbersNotInB(a, b){
    let count = 0;
    //case array has same number.
    let arrtemp = a.reduce((item,index) => {
        if(item.indexOf(index) === -1){
            //check indexof index, false return -1, push to new arr. 
            item.push(index);
        }
        return item;
    },[])
    //loop check 
    for(let i of arrtemp){
        if(!checkinArray(i, b))
        {count++;}
    }
    //arrtemp.forEach(item => {
      //  if(!b.includes(item)){
        //    count++;
        //}
    //})
    return count++;
}
console.log(countNumbersNotInB([1,,1,3,2,3],[4,5]))