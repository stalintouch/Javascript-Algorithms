//Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

function checkPositive(arr) {
  // Add your code below this line
  var array = arr;
  array = array.some((number) => number > 0 )
  return array
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
