// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  return arr.reduce(function(acc, next) {
    if(Array.isArray(next)) {
      return steamrollArray(acc.concat(next)) 
    } else {
      return acc.concat(next)
    }
  },[]);


}

steamrollArray([1, [2], [3, [[4]]]]);
