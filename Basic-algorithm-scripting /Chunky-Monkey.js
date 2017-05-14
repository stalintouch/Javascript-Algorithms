// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  var totalArray = [];
  var count = 0;
  while (count < arr.length) {
   totalArray.push(arr.slice(count, count + size))
   count += size
  }
  console.log(totalArray)
  return totalArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
