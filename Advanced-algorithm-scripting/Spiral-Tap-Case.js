// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  str = str.replace(/_|\s/g, '-');
  console.log(str);
   return str;
}

spinalCase('AllThe-small Things');
//first line will get all the letters, then $1$2 tell how to group the regex group, say by space and then you remove and replace _ and space with -