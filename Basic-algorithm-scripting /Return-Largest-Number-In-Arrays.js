function largestOfFour(arr) {
  var array = [];
  arr.forEach(function(newArr){
    return newArr.sort(function(a, b) {
     return b - a;
    });
  });
  arr.forEach(function(newR) {
    array.push(newR.shift());
    return array;
  });
  console.log(array);
  return array;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
