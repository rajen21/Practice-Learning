// Pattern - 7: Star Pyramid

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const n = 50;

function pattern(n) {
  for (let i = 0;i<n;i++) {
    let str =""
    for(let j=0;j<n-i;j++) {
      str+=" ";
    }
    for (let j=0;j<=2*i;j++) {
      str+="*"
    }
    console.log(str);
    
  }
}

pattern(n)