// Rotate array by K elements

// const arr = [1,2,3,4,5,6,7];
const arr = [3, 7, 8, 9, 10, 11];

function rotateByk(a, n, k, pos) {
  let tempArr = [];
  if (pos === 2) {
    for (let i = 0; i < k; i++) {
      tempArr[i] = a[i];
    }
    for (let i = 0; i < n; i++) {
      a[i] = a[i + k] ?? tempArr[(i + k) % n];
    }
  } else {
    // console.log(a)
    for (let i = n - k; i < n; i++) {
      tempArr[tempArr.length] = a[i];
    }
    for (let i = n - 1; i >= 0; i--) {
      a[i] = a[i - k] ?? tempArr[i];
    }
  }
  console.log(arr, a);
}

rotateByk(structuredClone(arr), arr.length, 2, 1); // 1= right, 2=left
