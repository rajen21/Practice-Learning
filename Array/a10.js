// Longest Subarray with given Sum K(Positives)

// Brute-force approach
const arr = [2, 3, 5, 1, 9];
// const arr = [2,3,5]

function findLongestSubArr(a, k, n) {
  let len = -1;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += a[j];
      const count = j - i + 1;
      if (sum === k && len < count) {
        len = count;
      }
    }
  }
  console.log(len);
}
findLongestSubArr(arr, 10, arr.length);

// Better Approach(Using Hashing)

function getLongestSubarray(a, k) {
  let n = a.length;

  let preSumMap = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    sum += a[i];
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }
    let rem = sum - k;

    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, i);
    }
  }

  return maxLen;
}
