// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of"
function titleCase(str) {
  var array = [];
  str = str.toLowerCase().split(' ');
  
 array = str.map(function(x) {
  var original = x.charAt(0);
  var upper = original.toUpperCase();
  x = x.replace(original, upper);
  return x;
  });
  return array.join(' ');
}

titleCase("I'm a little tea pot");
