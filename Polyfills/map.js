function myMap (cb) {
  let result = []
  for (let i = 0;i<this.length;i++) {
    if (i in this) result.push(cb(this[i], i, this))
  }
return result
}

Array.prototype.myMap = myMap


const arr = [1,2,3]

const tt = arr.myMap((val, ind, ar) => {
  if (val) {
    return val * 2
  }
})

console.log(tt)


// arr.map((val, ind, arr) => {

// })