const arr = [5, 3, 4, 1, 2];

function iSort (a, l) {
  for (let i =1;i<l;i++) {
    let key = a[i];
    let j = i-1;
    while (j>=0 && a[j]>key) {
      a[j+1] = a[j];
      console.log("jj", a[j],j);
      
      j--;
    }
    a[j+1] = key;
  }
console.log("cc", a);

}

iSort(arr, arr.length)