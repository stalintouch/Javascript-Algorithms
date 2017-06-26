// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

function pairElement(str) {
  str = str.split('');
  var arr= [];
  var pair  = {
    A: "T", T: "A", C: "G", G: "C"  
  };
  
  return str.map(function(item){
    return [item, pair[item]]
  })
}

pairElement("GCG");
