// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


function convertHTML(str) {
 
  var lookup = {"&": "&amp;", "<": "&lt;", ">": "&gt;", 
  '"':"&quot;", "'": "&apos;" };
  str= str.split('');
  str = str.map(function(x){
    return lookup[x] || x
  });
  str = str.join('');
  return str;
}

convertHTML("Hamburgers < Pizza < Tacos");

