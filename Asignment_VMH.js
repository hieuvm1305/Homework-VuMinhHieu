// Number 01
function isIncreasingNumber(a) {
    let str= a.toString();
    for(let i = 0; i< str.length - 1; i++) {
        if(str[i] >= str[i+1]){
            return false;
        }
    }
    return true;
}
console.log(isIncreasingNumber(11));
console.log(isIncreasingNumber(123));
console.log(isIncreasingNumber(1231));

// Number 02
function isIncreasingNumberByDistance(a, x) {
    let str= a.toString();
    for(let i = 0; i< str.length - 1; i++) {
        if(str[i+1] - str[i] != x ){
            return false;
        }
    }
    return true;
}
console.log(isIncreasingNumberByDistance(131, 2));
console.log(isIncreasingNumberByDistance(135, 2));

//Number04

function isPrime(a) {
    if( a === 2 || a === 3) return true;
    let x = Math.round(Math.sqrt(a));
    for(let i = 2 ; i <= x; i++) {
        if(a % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(4));
console.log(isPrime(40));
console.log(isPrime(13));

//Number05

function isPerfectSquare(a) {
    if( a === 1) return true;
    let x = Math.round(a/2);
    for(let i = 1; i<= x; i++) {
        if(i * i === a) {
            return true;
        }
    }
    return false;
}
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(25));
//Number 06
function isPerfectNumber(a){
    let sum = 0;
    for(let i = 1; i<= a/2; i++)
    {
        if(a % i === 0) {
            sum += i;
        }
    }
    if( a === sum) {
        return true;
    } else return false;
}
console.log(isPerfectNumber(6))
console.log(isPerfectNumber(28))
//Number 07
function isSymetricNumber(a){
    let str = a.toString().split("")
    let temp = [...str].reverse();
    console.log(str)
    console.log(temp)
    for(let i =0 ;i < str.length; i++) {
        if(str[i] != temp[i]){
            return false;
        }
    }
    return true;
}
console.log(isSymetricNumber(12356321))
console.log(isSymetricNumber(1221))
//Number 08
function isDivisibleBy10(a){
    let str = a.toString();
    let sum = 0;
    for(let i = 0; i < str.length; i++) {
        sum += parseInt(str[i])
    }
    if(sum % 10 === 0) {
        return true;
    } 
    return false;
}
console.log(isDivisibleBy10(1234));
console.log(isDivisibleBy10(12344));
//String 01
function countWords(str){
    const ar = str.split(' ');
    return ar.length;
}
console.log(countWords("Easy front end"))
//String02
function statisticsWords(str){
    const ar = str.split(' ');
    let res = ar.reduce(function(a, b){ 
        a[b] = a[b] + 1 || 1
        return a;
      }, {});
    return res;
}
console.log(statisticsWords("easy front easy"));
//String03
function statisticsCharacters(str){
    const ar = str.split("")
    let res = ar.reduce((a, b) => { 
        a[b] = a[b] + 1 || 1;
        return a;
      }, {});
    return res;
}
console.log(statisticsCharacters("aaa b c dd"))
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
    let temp = [...arr].reverse();
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== temp[i]){
            return false;
        }
    }
    return true;
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
function checkFibonaci(n){
    let arrCheck = findFiboList();
    for(let i of arrCheck){
        if(n === i){
            return true;
        }
    } 
    return false;
}
function hasFibonaciNumber(arr){
    for(let i of arr){
        if(checkFibonaci(i)){
            return true;
        }
    }
    return false;
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
    return count++;
}
console.log(countNumbersNotInB([1,,1,3,2,3],[4,5]))