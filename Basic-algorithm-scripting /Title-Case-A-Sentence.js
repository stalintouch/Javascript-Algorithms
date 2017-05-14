
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
