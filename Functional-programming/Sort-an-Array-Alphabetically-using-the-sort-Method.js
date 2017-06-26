//Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

function alphabeticalOrder(arr) {
  // Add your code below this line
  
   arr =arr.sort((itemA, itemB) => itemA > itemB);
  // Add your code above this line
  return arr
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
