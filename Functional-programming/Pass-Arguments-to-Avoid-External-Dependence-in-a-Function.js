
// Let's update the incrementer function to clearly declare its dependencies. Write the incrementer function so it takes an argument, and then increases the value by one.

var fixedValue = 4;

// Add your code below this line
function incrementer (value) {
  
  var pepe = value +1;
  return pepe;
  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
