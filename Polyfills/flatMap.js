const arr = [1,2,3,[4,5,[6,7,[8,9]]]]

Array.prototype.myFlatMap = myFlatMap

function myFlatMap(cb,arg) {
  const result = []
  for (let i=0;i<this.length;i++) {
    if (!(i in this)) continue
    const val = cb.call(arg, this[i], i, this)
    if (Array.isArray(val)) {
      result.push(...val)
    } else {
      result.push(val)
    }
  }
  return result
}

console.log(arr.myFlatMap(x => x*2))
