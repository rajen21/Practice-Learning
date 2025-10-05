// Stock Buy And Sell



const arr = [7,1,5,3,6,4]
// const arr  = [7,6,4,3,1]


// function findMaxProfit(a, n){
//     let buyPrice = Number.MAX_SAFE_INTEGER;
//     let sellPrice = Number.MIN_SAFE_INTEGER;
//     let buyInd=-1
//     for (let i=0;i<n;i++) {
//         if (buyPrice > a[i]) {
//             buyInd = i
//             buyPrice = a[i]
//         }
//         if (sellPrice < a[i] && buyInd < i) {
//             sellPrice = a[i]
//         }
//     }
//     console.log(sellPrice - buyPrice)
// }
// findMaxProfit(arr, arr.length)


// optimised solution

function findMaxProfit (a, n) {
  let maxProfit = 0
  for (let i = 0;i<n;i++) {
    for (let j = i+1; j<n;j++) {
      if (arr [j]>arr[i]) {
        maxProfit = Math.max(arr[j]-arr[i], maxProfit)
      }
    }
  }
  console.log("check ", maxProfit);
  
}

findMaxProfit(arr,arr.length)