// Set Matrix Zero



const arr = [
    [1,1,1],
    [1,0,1],
    [1,1,1]]

function matrixZero(a,n) {
    const iLen = a[0].length
    const row = new Array(n).fill(0)
    const col = new Array(iLen).fill(0)
    for (let i = 0;i<n;i++) {
        for (let j=0;j<iLen;j++) {
            if (a[i][j]===0) {
                row[i]=1
                col[j]=1
            }
        }
    }
    for (let i=0;i<n;i++) {
        for (let j=0;j<iLen;j++) {
            if (row[i] || col[j]) {
                a[i][j]=0
            }
        }
    }
    console.log(a)
}

matrixZero(arr, arr.length)