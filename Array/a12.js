// Sort an array of 0s, 1s and 2s


function sortArray(arr, n) {
  let cnt0 = 0, cnt1 = 0, cnt2 = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) cnt0++;
    else if (arr[i] === 1) cnt1++;
    else cnt2++;
  }
  
  for (let i = 0; i < cnt0; i++) arr[i] = 0;
  for (let i = cnt0; i < cnt0 + cnt1; i++) arr[i] = 1;
  for (let i = cnt0 + cnt1; i < n; i++) arr[i] = 2;

console.log(arr)
}

const arr = [0, 2, 1, 2, 0, 1, 0];
sortArray(arr, arr.length)
