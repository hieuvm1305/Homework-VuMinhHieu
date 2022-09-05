//array-check-09
function isIncreasingNumberList(ar) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] >= ar[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isIncreasingNumberList([1, 2, 3, 4, 6, 5]));
//Arraycheck01
function isSymetricList(arr) {
  if (arr === []) return false;
  if (arr.length === 1) return true;
  return arr.join("") === arr.reverse("").join("");
}
  /* let temp = [...arr].reverse();
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== temp[i]){
            return false;
        }
    }
    return true;
    */
console.log(isSymetricList([1, 2, 3, 4, 5]));
console.log(isSymetricList([1, 2, 3, 3, 2, 1]));
//ArrayCheck12

function findFiboNaci(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return findFiboNaci(n - 1) + findFiboNaci(n - 2);
}
function findFiboList() {
  let n = 0;
  let fiboArray = [];
  while (findFiboNaci(n) < 100) {
    fiboArray.push(findFiboNaci(n));
    n++;
  }
  return fiboArray;
}
function hasFibonaciNumber(arr) {
  let arrtemp = findFiboList();
  return arr.some((item) => arrtemp.includes(item));
}
console.log(hasFibonaciNumber([1, 2, 3, 4, 5]));

//Array-find-05
function findSecondLargestNumber(numberList) {
  let arrTemp = [...numberList];
  let max = Math.max(...numberList);
  let arrTemp1 = arrTemp.filter((item) => item !== max);
  return Math.max(...arrTemp1);
}
console.log(findSecondLargestNumber([1, 2, 5, 5, 6, 6]));
//Array-find-06
function isPerfectSquare(a) {
  if (a <= 0) return false;

  for (let i = 1; i <= Math.round(a / 2); i++) {
    if (i * i === a) {
      return true;
    }
  }
  return false;
  /* */
}
function findLastPerfectSquare(numberList) {
  let lastnum = 0;
  numberList.forEach((item) => {
    if (isPerfectSquare(item)) {
      lastnum = item;
    }
  });
  return lastnum !== 0 ? lastnum : false;
}
console.log(findLastPerfectSquare([1, 2, 3, 4, 5, 6, 7, 16, 36, 49]));
console.log(findLastPerfectSquare([2, 3]));

//Array-Count-05
function countNumbersNotInB(a, b) {
  let count = 0;
  a.forEach((item) => {
    if (!b.includes(item)) {
      //check xem mảng b có phần tử của a hay không
      count++;
    }
  });
  return count;
}
console.log(countNumbersNotInB([1, 3], [1, 3]));
