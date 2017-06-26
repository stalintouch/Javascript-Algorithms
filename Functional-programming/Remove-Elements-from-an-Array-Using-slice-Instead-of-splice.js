//Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.


function nonMutatingSplice(cities) {
  // Add your code below this line
  var arr = [];
  arr = cities.slice(0, 3);
  return arr;
  
  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
