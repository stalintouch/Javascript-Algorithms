
function addTogether() {
  var checkNum = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };
  if(arguments.length > 1) {
    var arg1 = checkNum(arguments[0]);
    var arg2 = checkNum(arguments[1]);
    if (arg1 && arg2) {
      return arg1 + arg2;
    } else {
      return undefined;
    } 
  }else {
      var sa = arguments[0];
      if (checkNum(sa)) {
        return function(arg) {
          if(checkNum(arg) === undefined) {
            return undefined
          }
          return sa + arg;
        }
      } else {
        return undefined
      }
    }
  
}

addTogether(2,3);
