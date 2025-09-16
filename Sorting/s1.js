// Selection Sort Algorithm


const arr = [13,46,24,52,20,9];

function selectionSort(a,n) {
  for (let i = 0;i<=n-2;i++) {
    let mini = i;
    for (let j=i;j<=n-1;j++) {
      if (a[j]<a[mini]) {
        mini = j;
      }
    }
    [a[mini],a[i]] = [a[i], a[mini]];
    
  }
  console.log(a);
  
  
}

selectionSort(arr, arr.length);