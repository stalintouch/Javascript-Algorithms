
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
