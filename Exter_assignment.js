function min(a,b){
    if (a<b){
        return a

    } else if (a>b){
        return b
    }else{
        return "both are equal"
    }

}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

function mins(c,d){
    return c < d ? c:d

}
console.log(mins(0, 10));
// → 0
console.log(mins(0, -10));
// → -10

console.log("...............")

function isEven(n) {
    if (n === 0) {
      return true;
    } else if (n === 1) {
      return false;
    } else if (n < 0) {
      return isEven(-n);  
    } else {
      return isEven(n - 2);
    }
  }
  
  console.log(isEven(50));  // → true
  console.log(isEven(75));  // → false
  console.log(isEven(-1));  // → false
  
function isEven(k){
    if(k < 0)k = -k;

    while (k>0){
        k = k-2
        
    }return k===0
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??