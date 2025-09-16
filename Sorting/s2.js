// Bubble Sort Algorithm

const arr = [13,46,24,52,20,9];

function bSort (a, n) {
  for (let i=n-1;i>=1;i--) {
    for (let j=0;j<=i-1;j++) {
      if (a[j] > a[j+1]) {
        [a[j],a[j+1]] = [a[j+1],a[j]];
      }
    }
    console.log(a);
  }
}

bSort(arr, arr.length);