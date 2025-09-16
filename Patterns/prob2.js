// Pattern-2: Right-Angled Triangle Pattern

// * 
// * * 
// * * *

const n = 10;

function pattern (n) {
  for (let i=0;i<n;i++) {
    let str = "";
    for (let j=0;j<=i;j++) {
      str+="* ";
    }
    console.log(str);
    
  }
}

pattern(n);