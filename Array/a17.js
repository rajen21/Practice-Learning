// Count Subarray sum Equals K


const arr = [3, 1, 2, 4,6]
const k = 6;

function findSubArrSum (a, n, k) {
    let count= 0;
    for (let i =0;i<n;i++) {
        let sum = 0;
        for (let j=i;j<n;j++) {
            sum += a[j]
            if (sum === k) {
                count++
            }
        }
    }
        console.log(count)
}
findSubArrSum(arr, arr.length, k)