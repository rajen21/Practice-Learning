const p1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve(1)
  }, 3000);
})

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2)
  }, 1000);
})

const p3 = new Promise(res =>{
  setTimeout(() => {
    res(3)
  }, 1500);
})

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let result = []
    let completed = 0

    if (!promises?.length) {
      resolve([0])
      return
    }
    promises.forEach((pr, i) => {
      Promise.resolve(pr).then(p => {
        result[i] = p
        completed++
        if (completed === promises?.length) {
          resolve(result)
        }
      }).catch(reject)
    })
  })
}

// async function myPromiseAll (pr) {
//   const result = []
//   for (let i=0;i<pr.length;i++) {
//     result[i]= await pr[i].then(it => it)
//   }
//   return result
// }
(async function () {
  const now = new Date()
  Promise.myPromiseAll = myPromiseAll
  const start = now.getSeconds()
  console.log(await  Promise.myPromiseAll([p1,p2,p3]))
  const end = new Date().getSeconds() - start
  console.log("ended:::", end)
})()


// const p1 = async () => {
//   return fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
//       .then(json => json)
// }

// Promise.resolve(p1()).then(res => {
//   console.log(res)
// })