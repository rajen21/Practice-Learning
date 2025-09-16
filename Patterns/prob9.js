// Pattern - 9: Diamond Star Pattern

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

// const n = 6;
// function pattern(n) {
//   for (let i = 0; i < n*2; i++) {
//     let str =""
//     for (let j = 0; j < n - i; j++) {
//       process.stdout.write(" ");
//       // str+=" "
//     }
//     for(let j=0;j<i-n;j++) {
//       process.stdout.write("*")
//       // str+="*"
//     }
//     // console.log();
//     for (let j=0;j<=i-n;j++) {
//       // process.stdout.write(" ")
//       str+=" "
//     }
    

//     console.log();
//   }
// }

// pattern(n);

const n = 6; // height of half diamond



function diamond(n) {
  const totalRows = 2 * n;

  for (let i = 1; i <= totalRows; i++) {
    // Determine current line index (ascending then descending)
    let row = i <= n ? i : totalRows - i + 1;

    let spaces = n - row;
    
    let stars = 2 * row - 1;
    // console.log(row, spaces, stars);

    // // Print spaces
    for (let j = 0; j < spaces; j++) process.stdout.write(" ");
    // Print stars
    for (let j = 0; j < stars; j++) process.stdout.write("*");

    console.log(); // Move to next line
  }
}

diamond(n);
