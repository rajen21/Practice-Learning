const arr = [1,1,2,2,2,3,3];

function removeDuplicates (a,n) {
    let i = 0;
    for (let j = 1;j<n;j++) {
        if (a[i]!== a[j]) {
            i++;
            a[i]=a[j];
        }
    }
    console.log(a)
    // return i+1;
}

removeDuplicates(arr, arr.length)
