
function getIndexToIns(arr, num) {
  var a = [];
 arr.push(num)
 arr = arr.sort(function(a, b) {
   return a - b
 });

   return arr.indexOf(num)
}

getIndexToIns([3, 10, 5], 3);

