let debounce = document.getElementById("debounce");
let throttle = document.getElementById("throttle");
let inputText = document.getElementById("input-text");
let countDebounce = 0;
let countThrottle = 0;
debounce.innerHTML = countDebounce;
throttle.innerHTML = countThrottle;
//debounce
const debounce1 = (callback, timeout) => {
  let timer;
  return () => {
    clearTimeout(timer); // bỏ timeout cho timer.
    timer = setTimeout(() => callback(), timeout); 
  };
};
document.getElementById("button-debounce").addEventListener(
  "click",
  debounce1(() => {
    countDebounce++;
    debounce.innerHTML = countDebounce;
  }, 1000)
);
inputText.addEventListener('input', debounce1(() => console.log(inputText.value), 2000))
//logic: hàm sẽ chạy khi ngưng click sau 1 giây, nếu tiếp tục click thì ko chạy hàm count+1 cho đến khi ngừng click

//throttle sẽ giới hạn số lần gọi hàm trong một khoảng thời gian
const throttleFunc = (callback, timeOut) => {
  let lastRun = 0;
  return () => {
    const now = new Date().getTime();

    if (now - lastRun < timeOut) {
      return; // nếu dưới thời gian time out thì sẽ không làm gì cả
    }
    lastRun = now; //gán cho lastRun bằng time mới
    return callback();
  };
};
document.getElementById("button-throttle").addEventListener(
  "click",
  throttleFunc(() => {
    countThrottle++;
    throttle.innerHTML = countThrottle;
  }, 500)
);
let inputThrottle = document.getElementById("input-throttle");
inputThrottle.addEventListener("input", throttleFunc(() => console.log(inputThrottle.value), 2000));


// trong bài đang để thời gian thực thi sự kiện onClick trước đó, nếu dưới 1s thì hàm sẽ không được chạy