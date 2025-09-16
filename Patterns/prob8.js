// Pattern - 8: Inverted Star Pyramid

// ***********
//  *********
//   *******
//    ***** 
//     ***    
//      *


const n = 6;

function pattern(n) {
  for (let i=0;i<n;i++) {
    let str = "";
    for (let j=0;j<i;j++) {
      // str +=" "
      process.stdout.write(" ");
    }
    for (let j=0;j<(n-i)*2-1;j++) {
      // str +="*"
      process.stdout.write("*");
    }
    console.log();
    
  }
}

pattern(n)



