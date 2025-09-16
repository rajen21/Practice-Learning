// Find the number that appears once, and the other numbers twice

const arr = [4, 1, 2, 1, 2];

function findOnceOccurence(a, n) {
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(a[i], (map.get(a[i]) || 0) + 1);
  }
  for (let [key, val] of map) {
    if (val === 1) {
      console.log(key);
    }
  }
}

findOnceOccurence(arr, arr.length);
