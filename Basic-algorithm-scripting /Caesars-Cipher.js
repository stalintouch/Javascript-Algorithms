// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
function rot13(str) { // LBH QVQ VG!
  var numValue = [];
  var translation = "";
  for (var i =0; i < str.length; i++) {
    
    numValue.push(str[i].charCodeAt())
    
    if (numValue[i] !== 32 && numValue[i] !== 33 && numValue[i] !== 63 && numValue[i] !== 46) {
      if (numValue[i] <= 77) {
        
        numValue[i] += 13 
      } else {
        numValue[i] -= 13
      }
    }
      translation += String.fromCharCode(numValue[i]);
  }
    console.log(translation)
  
  return translation;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
