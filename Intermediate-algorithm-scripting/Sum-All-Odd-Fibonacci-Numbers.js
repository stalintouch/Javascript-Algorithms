// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  var newArr= [];
  var total = 0;
  var arr = [1, 1];
 
  newArr = arr.slice(arr.length-2);
  
  while (newArr[0] + newArr[1] <= num) {
     
    arr.push(newArr[0]+ newArr[1]);
    newArr = arr.slice(arr.length-2);
   
  } 
  total = arr.filter(function(x){
     
      return x % 2 !==0
    }).reduce(function(a, b){
      
      return  a + b; 
    });
  return total;
}

sumFibs(75025);
