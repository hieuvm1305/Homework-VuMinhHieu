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
    if( a <0 ) return false;
    
    for(let i = 1; i<= Math.round(a/2); i++) {
        if(i * i === a) {
            return true;
        }
    }
    return false;
    /* */
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
    return a === sum
}
console.log(isPerfectNumber(6))
console.log(isPerfectNumber(28))
//Number 07
function isSymetricNumber(a){
    let str = a.toString().split("")
    let temp = [...str].reverse();
    for(let i =0 ;i < str.length; i++) {
        if(str[i] != temp[i]){
            return false;
        }
    }
    return true;
    /* let arrNum = a.toString().split('')
    return  === +arrNum.reverse().join("")
    */
}
console.log(isSymetricNumber(12356321))
console.log(isSymetricNumber(1221))
//Number 08
function isDivisibleBy10(a){
    let str = a.toString().split('');
    let sum = 0;
    for(let i of str) {
        sum += parseInt(i);
    }
    return !Boolean(sum % 10);
}
console.log(isDivisibleBy10(1234));
console.log(isDivisibleBy10(12344));