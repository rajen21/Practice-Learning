// Pattern-1: Rectangular Star Pattern

// * * *
// * * *
// * * *

const n =5;

function pattern(n) {
  for (let i=0;i<n;i++) {
    let str = "";
    for (let j=0;j<n;j++) {
      str+="*";
    }
    console.log(str);
  }
}

pattern(n);