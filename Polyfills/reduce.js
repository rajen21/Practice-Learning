const arr = [1,2,3,4]

// const sum = arr.reduce((pVal,val,i,ar) => {
//   return pVal + val
// },0)

// console.log(sum)

function myReduce(cb, initialVal) {
  let acc = initialVal
  let start = 0
  if (acc === undefined) {
    acc = this[0]
    start = 1
  }
  for (let i=start;i<this.length;i++) {
    if (i in this) {
      acc = cb(acc, this[i], i, this)
    }
  }
  return acc
}

Array.prototype.myReduce = myReduce

const s = arr.myReduce((pVal, val, i, ar) => {
  return pVal + val
},0)

console.log(s);
