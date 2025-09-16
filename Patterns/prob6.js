// Pattern - 6: Inverted Numbered Right Pyramid


// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1

const n = 6;

function pattern(n) {
  for (let i = n;i>0;i--) {
    let str = "";
    for (let j=1;j<=i;j++){
      str += j
    }
    console.log(str);
    
  }
}

pattern(n)