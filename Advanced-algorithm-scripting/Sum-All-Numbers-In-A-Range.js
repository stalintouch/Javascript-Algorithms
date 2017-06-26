// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

function sumAll(arr){
  var max = Math.max.apply(Math, arr);
  var min = Math.min.apply(Math, arr);
  var numInMiddle = max - min;
  var total=0;
  for (var i = min; i <= max; i++){
    total += i;
  }
  return total;
}

sumAll([1, 4]);
