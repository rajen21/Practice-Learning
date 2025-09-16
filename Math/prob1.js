// Count digits in a number

// Problem Statement: Given an integer N, return the number of digits in N.

//  Example 1:
//  Input:N = 12345

//  Output:5

//  Explanation:  The number 12345 has 5 digits.

const n=10234;

function checkDigit (num) {
  let remainingNum = num;
  let count = 0;
  while (remainingNum) {
    remainingNum = Math.floor(remainingNum/10);
    count++
  }
  console.log(count);
  
}

checkDigit(n)