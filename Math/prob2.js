// Reverse Digits of A Number



const num = 12345;

function reverseNum(n) {
  let number = n;
  let rNum = 0;

  while (number>0) {
    
    rNum = (rNum*10)+Math.floor(number%10);
    number = Math.floor(number / 10);
  }
  console.log(rNum);
  
}

reverseNum(num)