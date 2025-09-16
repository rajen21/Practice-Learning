// Find the Largest element in an array

const arr = [2,5,1,3,0];


function findLargest(a,l){
  for (let i=0;i<l;i++) {
    for (let j=i+1;j<l;j++) {
      if (a[i]>a[j]) {
        [a[i],a[j]] = [a[j],a[i]]
      }
    }
  }
  console.log(a[l-1]);
  
}

findLargest(arr, arr.length)