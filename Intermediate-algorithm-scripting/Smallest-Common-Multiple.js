// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 
function smallestCommons(arr) {
  var start = Math.min(arr[0], arr[1]);
  var end = Math.max(arr[0], arr[1]);
  var flag = true;
  var counter = 0;
  
  while(flag) {
    counter++;
    for(var i = start; i <= end; i++){
      if(counter % i !== 0) {
        break;
      } else if(i ===end) {
        flag = false;  
      }
    }
  }
  return counter;
}


smallestCommons([1,5]);

