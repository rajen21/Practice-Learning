// Input Format: N = 6
// Result:   
//      *
//      **
//      *** 
//      ****
//      *****
//      ******  
//      *****
//      ****
//      ***    
//      **
//      *



const n=5;

function pattern(n) {
  const totalRows = 2*n-1;
  for (let i=1;i<=totalRows;i++) {
    const stars = i<=n?i:totalRows-i+1;
    for (let j=0;j<stars;j++) {
      process.stdout.write("*")
    }
    console.log();
  }
}

pattern(n)