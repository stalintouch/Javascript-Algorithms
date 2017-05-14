
function fearNotLetter(str) {
  str = str.split('');
  var missing = str.map(function(letter){
    return letter.charCodeAt();
  });
  for (var i = 0; i < missing.length; i++) {
    if(missing[i +1] - missing[i] > 1) {
      return String.fromCharCode(missing[i] + 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
