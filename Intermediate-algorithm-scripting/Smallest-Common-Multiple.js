// 
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

