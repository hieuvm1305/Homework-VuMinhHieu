const { func } = require("prop-types");

class Queue {
  constructor(delay = 1000) {
    this.delay = delay;
    this.callbackQueue = [];
  }

  add(callback) {
    if (this.callbackQueue.length === 0) {
      this.callbackQueue.push(callback);
      this.runcallback();
    } else {
      this.callbackQueue.push(callback);
    }
  }

  runcallback() {
    const callback = this.callbackQueue[0];
    setTimeout(() => {
      this.callbackQueue.shift();
      if (this.callbackQueue.length > 0) {
        this.runcallback();
      }
    }, this.delay);

    callback();
  }
}

//cau 2
const api = "https://api.github.com/search/repositories?q=";
const array = [
  "swift",
  "rust",
  "javascript",
  "react",
  "rx",
  "ruby",
  "rails",
  "php",
  "objecttive-c",
  "html",
  "css",
  "pug",
];
const promiseApi = () => {
  const keyWord = array.splice(0, 5);
  if (keyWord.length < 1) {
    return;
  }
  const promiseApi = keyWord.map((item) => fetch(api + item)); //clear
  let rejectKeyword = [];
  Promise.allSettled(promiseApi)
    .then((response) => {
      let fullfilled = [];
      response.forEach((res, index) => {
        if (res.status === "fulfilled") {
          fullfilled.push(res.value.json());
        } else {
          rejectKeyword.push(keyWord[index]);
        }
      });
      return Promise.all(fullfilled);
    })
    .then(() => promiseApi());
};
promiseApi();

const keywords = [
  "swift",
  "rust",
  "javascript",
  "react",
  "rails",
  "ruby",
  "php",
  "rx",
];
const logs = [];
const requestOptions = {
  method: "GET",
  redirect: "follow",
};

async function runSearch() {
  if (keywords.length > 0) {
    const currentSearchKeywords = keywords.splice(0, 5); //Cắt 5 phần tử đầu tiên ra khỏi mảng key

    const promises = currentSearchKeywords.map((keyword) => {
      return fetch(
        `https://api.github.com/search/repositories?q=${keyword}`,
        requestOptions
      );
    }); //Phần tạo request

    const searchResponses = await Promise.allSettled(promises); //gọi 5 api

    const jsonDataList = Promise.all(
      searchResponses.map((response) => response.value.json())
    );
    //mảng trả kết quả về

    for (let i = 0; i < jsonDataList.length; i++) {
      const jsonData = jsonDataList[i];

      if (
        searchResponses[i].status === "fulfilled" &&
        searchResponses[i].value.status === 200 //Kiem tra xem có success hay không
      ) {
        console.log(`keywords: ${currentSearchKeywords[i]} - success: ${true}`);
        console.log("first item: ", jsonData.items[0]);
      } else {
        console.log(
          `keywords: ${currentSearchKeywords[i]} - success: ${false}`
        );
        console.log("first item: ", "404 not found");
        keywords.push(currentSearchKeywords[i]);
      }
    }
    return runSearch(); //De quy
  } else return;
}
runSearch();

//Câu 3
const randomPromise = new Promise((resolve, reject) => {
  for (let i = 0; i < 5; i++) {
    let res = parseInt(Math.random() * 100);
    if (res % 2 == 0) {
      resolve(res);
    }
  }
  reject("Not Find");
});
randomPromise
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

//Debounce: đảm bảo một hàm không được thực thi cho đến một khoảng thời gian nhất định sau khi event không dc thực hiện

const debounce1 = (callback, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer); // bỏ timeout cho timer.
    timer = setTimeout(() => callback.apply(this, args), timeout); //apply(tham khảo): gọi vào giá trị của this và các đối số truyền vào dưới dạng mảng.this
  };
};
const test = debounce1(() => console.log("hello"), 1000);
test();

//Throttle: Mỗi khoảng thời gian mới gọi hàm
let wait = false;
const throttle = (callback, timeout) => {
    if (wait) return;
    wait = true;
    setTimeout(() => {
      callback();
      wait = false;
    }, timeout);
}
const test1 = throttle(() => console.log("object"), 500)
console.log(test1)

//Stole from Internet
function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
      const now = new Date().getTime();

      if (now - lastCall < delay) {
          return;
      }
      lastCall = now;
      return func(...args);
  };
}