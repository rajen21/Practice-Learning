// Rotate Image by 90 degree


const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function rotetArr (a,n) {
    const m=a[0].length
    const tempArr = []
    for (let i=0;i<n;i++) {
        const ta = []
        for (let j =m-1;j>=0;j--) {
            // console.log(a[j][i])
            ta.push(a[j][i])
        }
            tempArr.push(ta)
    }
    console.log(tempArr)
}

rotetArr(arr,arr.length)