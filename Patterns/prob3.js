// Pattern - 3: Right-Angled Number Pyramid

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6


const n = 10;

function pattern(n) {
  for (let i = 0; i<n;i++) {
    let str = "";
    for (let j=0;j<=i;j++) {
      str+=`${j+1} `;
    }
    console.log(str);
    
  }
}

pattern(n)