// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
   var answer = '';
  while (num > 0) {
    answer = answer.concat(str);
    num--;
  }
  return answer;
}

repeatStringNumTimes("abc", 3);
