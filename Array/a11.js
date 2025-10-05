// Two Sum : Check if a pair with given sum exists in Array

const arr = [2, 6, 5, 8, 11];
const target = 14;

function findSum(a, k, n) {
  for (let i = 0; i < n; i++) {
    let subArr = [];
    let sum = 0;
    for (let j = i + 1; j < n; j++) {
      sum = a[i] + a[j];
      if (sum === k) {
        subArr.push(i, j);
      } else {
        sum = 0;
      }
    }
    subArr.length ? console.log(subArr) : null;
  }
}

findSum(arr, target, arr.length);
