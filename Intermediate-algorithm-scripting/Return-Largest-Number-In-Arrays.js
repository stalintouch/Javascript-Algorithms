// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.


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
