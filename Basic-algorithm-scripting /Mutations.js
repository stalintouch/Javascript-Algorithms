// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.


function mutation(arr) {
  var text = arr[0].toLowerCase();
  var word = arr[1].toLowerCase();
  for (var i= 0; i < word.length; i++) {
    var result = text.indexOf(word[i]);
    if (result <0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
