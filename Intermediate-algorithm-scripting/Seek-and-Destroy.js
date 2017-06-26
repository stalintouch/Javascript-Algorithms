// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, arg1, arg2, arg3) {
 arr = arr.filter(function(x) {
   return x !== arg1 && x !== arg2 && x !== arg3
 });
 return arr
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
