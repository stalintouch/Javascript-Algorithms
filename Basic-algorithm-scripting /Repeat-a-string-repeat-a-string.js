function repeatStringNumTimes(str, num) {
   var answer = '';
  while (num > 0) {
    answer = answer.concat(str);
    num--;
  }
  return answer;
}

repeatStringNumTimes("abc", 3);
