
function convertToRoman(num) {
  var result = "";
  var romans ={
     M: 1000,
     CM: 900,
     D: 500,
     CD: 400,
     C: 100,
     XC: 90,
     L: 50,
     XL: 40,
     X: 10,
     IX: 9,
     V: 5,
     IV: 4,
     I: 1
  };
  
  for (var key in romans) {
    while (romans[key] <= num) {
      result += key;
      num -= romans[key];
    } 
  }
  return result;
}
  

convertToRoman(36);
