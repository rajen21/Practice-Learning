const arr = [1,2,3]

// const rr = arr.filter((val,i , ar) => val%2 === 0)


function myFilter(cb) {
  let res = []
  for (let i = 0;i<this.length;i++) {
      if (cb(this[i], i, this)) {
        res.push(this[i])
      }
  }
return res
}

Array.prototype.myFilter = myFilter

const rr = arr.myFilter((val, i, ar) => val %2 === 0)

console.log(rr)