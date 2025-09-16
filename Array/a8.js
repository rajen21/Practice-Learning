// Find the missing number in an array

const arr = [1,2,3,5];

function findMissing (a, n) {
    const sum=(n*(n+1))/2;
    let s2 = 0;
    for (let i=0;i<n-1;i++) {
        s2+=a[i]
    }
    const miss = sum-s2
    console.log(miss)
}

findMissing(arr, arr.length+1)