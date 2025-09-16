// Check if a number is Palindrome or Not


const n = 123;

function checkPalindrom(num) {
  let rNum=0;
  let r=num

  while (r>0) {
    let rem=Math.floor(r%10);
    rNum = (rNum*10) +rem;
    r=Math.floor(r/10)
  }
  console.log(rNum);
  
  console.log(num === rNum ? "Palindrom" : "Non Palindrom");
  
}

checkPalindrom(n)