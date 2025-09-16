// Check if a number is Armstrong Number or not

const n = 222;

function checkArmStrong(num) {
  let rNum = num;
  let res = 0;
  while (rNum > 0) {
    let rr = Math.floor(rNum%10);
    res += (rr * rr * rr);
    rNum = Math.floor(rNum/10);
  }
  if (res === num) {
    console.log("Armstrong");
  } else {
    console.log("Non armstrong"); 
  }
}

checkArmStrong(n)