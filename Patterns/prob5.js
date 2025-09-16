// Pattern-5: Inverted Right Pyramid

// * * * * * *
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

const n = 6;

function pattern(n) {
  for (let i=n;i>0;i--) {
    let str = ""
    for (let j=0;j<i;j++) {
      str+="* ";
    }
    console.log(str);
    
  }
}

pattern(n)