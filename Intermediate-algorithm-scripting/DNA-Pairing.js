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
