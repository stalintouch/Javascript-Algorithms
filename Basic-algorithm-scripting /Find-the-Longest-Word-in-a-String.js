// Return the length of the longest word in the provided sentence.
function findLongestWord(str) {
  var longestW =0;
  str = str.split(" ");
  for (var i = 0; i < str.length; i++){
    if (longestW < str[i].length) {
      longestW = str[i].length;
    }
  }
  return longestW;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
