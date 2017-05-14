// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
  if (str.length > num ) {
    if (num <= 3) {
    str = str.slice(0, num).concat("...");
    } else  {
    str = str.slice(0, num - 3).concat("...");
    }
  } 
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
