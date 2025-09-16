// Move all Zeros to the end of the array

const arr = [ 1,2,0,1,0,4,0];

function move0AtEnd (a, n) {
  let j=-1;
  for (let i=0;i<n;i++) {
    if (a[i]===0) {
      j=i;
      break;
    }
  }
  for (let i=j+1;i<n;i++) {
    if (a[i]!== 0) {
      [a[i],a[j]] = [a[j],a[i]];
      j++
    }
  }
  console.log(a);
  
}

move0AtEnd(arr, arr.length)