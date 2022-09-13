//cau 1
class Queue {
    constructor(delay = 1000){
        this.delay = delay;
        this.queue = [];
    }
    
    add(callback){
        //queue
        if(this.queue.length == 0){//callback sẽ dc chạy luôn
            this.queue.push(callback);
            callback();
        } else{
            this.queue.push(callback);
            setTimeout(callback, this.delay); //setTimeout(callback, this.delay * this.queue.indexOf(callback));
        }
    }
}
let test = new Queue;
test.add(() => console.log('hello'));
test.add(() => console.log('hello 2'));
test.add(() => console.log('hello 3'));
// nếu add từng callback thì dùng this.delay, nếu dùng nhiều lệnh add cùng một lúc thì dùng timeout = this.delay * this.queue.indexof(callback).



//cau 2

const api = 'https://api.github.com/search/repositories?q=';
const array = ['swift', 'rust', 'javascript', 'react', 'rx', 'ruby', 'rails', 'php', 'objecttive-c', 'html' , 'css', 'pug'];
const getApi = (array) => {
    if(array.length){
        let keyArray = array.slice(0, 5);
        let apis = keyArray.map(keyword => fetch(api + keyword));
        let arrTemp

        Promise.allSettled(apis).then(response => {
            console.log(response[0])
            response.forEach(res => {
                if(res.status == 'fulfilled'){

                }
            })
        }).then(response => getApi(response))
    }
}

fetch('https://api.github.com/search/repositories?q=swift').then(res => res.json())

let arr = [1, 3, 2, 4];
let ar = arr.slice(0,2);

let newar = arr.filter(key => !ar.includes(key));
console.log(newar)