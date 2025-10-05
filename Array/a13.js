// Find the Majority Element that occurs more than N/2 times

const arr = [2, 2, 2, 1, 1, 1, 2, 2];

function findMajority(a, n) {
  const halfSize = Math.floor(n / 2);
  const map = new Map();
  for (let i = 0; i < halfSize; i++) {
    map.set(a[i], (map.get(a[i]) ?? 0) + 1);
  }
  let max = -1;
  for (let [val, count] of map) {
    if (max < count) {
      max = val;
    }
  }
  console.log(max);
}

findMajority(arr, arr.length);
