function deb(cb, del) {
  let timer
  return function(...args) {
    clearTimeout(timer)
    setTimeout(() => cb.apply(this, args), del);
  }
}

const tt =deb((a) => {
  console.log(a)
}, 1000)
tt(123)
