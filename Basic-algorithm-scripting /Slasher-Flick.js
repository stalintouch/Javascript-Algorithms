
function slasher(arr, howMany) {
  var newArr = arr.slice();
  newArr.splice(0, howMany);
  return newArr;
}

slasher([1, 2, 3], 4);
