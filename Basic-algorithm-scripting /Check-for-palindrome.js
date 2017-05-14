function palindrome(str) {
  str = str.replace(/[\W_]/g, "").toLowerCase();
  var cleanStr = str.split("").reverse().join("");
  return Boolean(cleanStr === str);
}
palindrome("_eye");