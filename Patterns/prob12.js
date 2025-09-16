// Input Format: N = 6
// Result:   
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21


const n = 6;

function pattern(n) {
  let s=1;
  for (let i=0;i<n;i++) {

    for (let j=0;j<=i;j++) {
      process.stdout.write(`${s} `)
      s+=1;
    }
    console.log();
    
  }
}

pattern(n)