function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
   after = after.charAt(0).toUpperCase() + after.substring(1);
  }
 console.log(after)
  
  var newStr = str.replace(before, after);

  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");
