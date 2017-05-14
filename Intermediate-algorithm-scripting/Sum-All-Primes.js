// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

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
