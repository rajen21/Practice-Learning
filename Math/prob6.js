const n = 17;

function checkIsPrime(num) {
  let isPrime = true;
  for (let i=2;i<num;i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(`${num} is ${isPrime ? 'Prime': 'Not Prime'}`);
  
}

checkIsPrime(n)