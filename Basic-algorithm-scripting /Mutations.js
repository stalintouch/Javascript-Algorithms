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
