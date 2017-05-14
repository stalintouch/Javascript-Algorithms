function sumPrimes(num) {
  
  var result =[];
  
  for(var i = 2; i<= num; i++) {
    if(isPrime(i)) {
      result.push(i) 
    }
  }
  return result.reduce(function(a,b) {
     return a +b
  });
}

function isPrime(n) {
    for(var j = 2; j < n; j++) {
     if(n % j ===0) {
      return false; 
     }
    }
   
    return true
  }

sumPrimes(977);
