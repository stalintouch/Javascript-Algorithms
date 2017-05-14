// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
  var array = [];
  for(var arg = 0; arg < arguments.length; arg++) {
    var newArr = arguments[arg];
    for(var i = 0; i < newArr.length; i++) {
      if(array.indexOf(newArr[i]) === -1) {
       array.push(newArr[i]);
       console.log(array);
      }
    }
  }
  return array;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
