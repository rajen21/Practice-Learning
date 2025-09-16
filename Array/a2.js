// Find Second Smallest and Second Largest Element in an array

const arr = [1, 2, 4, 7, 7, 5];

function findSecondLargest(a, l) {
  const largest = Math.max(...a);
  const smallest = Math.min(...a);
  let secSmall = Infinity;
  let secLarge = -Infinity;
  for (let i = 0; i < l; i++) {
    if (a[i] < secSmall && a[i] !== smallest) {
      secSmall = a[i];
    }
    if (a[i] > secLarge && a[i] !== largest) {
      secLarge = a[i];
    }
  }
  console.log(secSmall, secLarge);
}

findSecondLargest(arr, arr.length);
