// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  var a = [];
 arr.push(num)
 arr = arr.sort(function(a, b) {
   return a - b
 });

   return arr.indexOf(num)
}

getIndexToIns([3, 10, 5], 3);

