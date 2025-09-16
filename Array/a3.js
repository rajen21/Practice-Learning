const arr = [1, 2, 3, 5,4];

function isSorted (a, n) {
    for (let i = 1;i<n;i++) {
        if (a[i] < a[i-1]) {
            return false
        }
    }
    return true
}

console.log(isSorted(arr, arr.length))