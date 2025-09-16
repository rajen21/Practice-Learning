// Union of Two Sorted Arrays

const arr1 = [1,2,3,4,5,6,7,8,9,10]
const arr2 = [2,3,4,4,5,11,12, 18]


function findUnion(a1,a2) {
    const m1 = new Map();
    const obj = {};
    const union=[];
    for(let i= 0;i<a1.length;i++) {
        // m1.set(a1[i],(m1.get(a1[i])||0)+1)
        obj[a1[i]] = obj[(obj[a1[i]] || 0)+1]
    }
    for(let i= 0;i<a2.length;i++) {
        // m1.set(a2[i],(m1.get(a2[i])||0)+1)
        obj[a2[i]] = obj[(obj[a2[i]] || 0)+1]
    }
    for (let val in obj) {
        union.push(val)
    }
    console.log(union)
}

findUnion(arr1, arr2)