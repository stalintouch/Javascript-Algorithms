//Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.


function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 
for (let prop in beagle){
  if(beagle.hasOwnProperty(prop)){
    ownProps.push(prop)
  } else {
    prototypeProps.push(prop)
  }
  
}



