// Translate the provided string to pig latin.
function translatePigLatin(str) {
  var reg = /[aeiou]/;
  var firstLetter = str[0];
  var newStr = str.substring(1)
  if(reg.test(str[0])) {
    str = str + "way"
    
  }else if (!reg.test(newStr[0])) {
    firstLetter += newStr[0];
    newStr = newStr.substring(1);
    str = newStr + firstLetter + "ay"
    
  }
  else {
    str = newStr + firstLetter + "ay"
  }
  
  console.log(str)
   return str;
}
translatePigLatin("algorithm");
