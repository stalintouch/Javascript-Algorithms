
// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  this.forEach(function(i){
    newArray.push(callback(i));
    });
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
