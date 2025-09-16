// Input Format: N = 6
// Result:
// 1
// 01
// 101
// 0101
// 10101
// 010101

const n = 6;

function pattern(size) {
  let s = 1;
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) s = 1;
    else s = 0;
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${s}`);
      s = 1-s;
    }
    console.log();
  }
}

pattern(n);
