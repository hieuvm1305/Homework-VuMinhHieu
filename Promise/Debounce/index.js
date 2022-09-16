let debounce = document.getElementById("debounce");
let throttle = document.getElementById("throttle");
let countDebounce = 0;
let countThrottle = 0;
debounce.innerHTML = countDebounce;
throttle.innerHTML = countThrottle;
//debounce
const debounce1 = (callback, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer); // bỏ timeout cho timer.
    timer = setTimeout(() => callback.apply(this, args), timeout); //apply(tham khảo): gọi vào giá trị của this và các đối số truyền vào dưới dạng mảng.this
  };
};
document.getElementById("button-debounce").addEventListener(
  "click",
  debounce1(() => {
    countDebounce++;
    debounce.innerHTML = countDebounce;
  }, 1000)
);
//logic: hàm sẽ chạy khi ngưng click sau 1 giây, nếu tiếp tục click thì ko chạy hàm count+1 cho đến khi ngừng click

//throttle sẽ giới hạn số lần gọi hàm trong một khoảng thời gian
const throttleFun = (callback, timeOut) => {
  let lastRun = 0;
  return (...args) => {
    const now = new Date().getTime();

    if (now - lastRun < timeOut) {
      return; // nếu dưới thời gian time out thì sẽ không làm gì cả
    }
    lastRun = now; //gán cho lastRun bằng time mới
    return callback(...args);
  };
};
document.getElementById("button-throttle").addEventListener(
  "click",
  throttleFun(() => {
    countThrottle++;
    throttle.innerHTML = countThrottle;
  }, 2000)
);
// trong bài đang để thời gian thực thi sự kiện onClick trước đó, nếu dưới 1s thì hàm sẽ không được chạy