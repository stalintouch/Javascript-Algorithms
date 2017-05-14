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
