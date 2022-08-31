//String 01
function countWords(str){
    const ar = str.split(' ');
    return ar.length;
}
console.log(countWords("Easy front end"))
//String02
function statisticsWords(str){
    const ar = str.trim().split('');
    let res = ar.reduce(function(a, b){ 
        a[b] = a[b] + 1 || 1
        return a;
      }, {});
    return res;
}
console.log(statisticsWords("easy front easy"));
//String03
function statisticsCharacters(str){
    const ar = str.split('')
    let res = ar.reduce((a, b) => { 
        a[b] = a[b] + 1 || 1;
        return a;
      }, {});
    return res;
}
console.log(statisticsCharacters("aaa b c dd"))