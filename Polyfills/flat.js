const arr = [1,2,[3,4,[5,6,[7,8]]]]

Array.prototype.myFlat = myFlat

function myFlat(depth=1) {
  const result = []
  depth = depth === undefined ? 1: Number(depth)
  function fl(arr, currentDepth) {
    for (let i=0;i<arr.length;i++) {
      if (!(i in arr)) continue
      if (Array.isArray(arr[i]) && currentDepth>0) {
        flatten(arr[i], currentDepth - 1)
      } else {
        result.push(arr[i])
      }
    }
  }
  fl(this, depth)
  return result
}

console.log
(arr.myFlat(10))
