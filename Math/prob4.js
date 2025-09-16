// Find GCD of two numbers

// Explanation:Factors of 9: 1, 3 and 9
//                 Factors of 12: 1, 2, 3, 4, 6, 12
//                 Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.


const n1=9;
const n2=12;

function checkGCD(num1, num2) {
  let gcd=1;
  for (let i = 1; i<=Math.min(num1, num2); i++) {
    if (num1 %i === 0 && num2%i === 0) {
      // gcd=i;
      console.log(i);
    }
  }
  
}

checkGCD(n1, n2)