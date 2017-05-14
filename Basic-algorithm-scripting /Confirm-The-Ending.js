function confirmEnding(str, target) {
  var numTarget = target.length - 1;
  var numStr = str.slice(-numTarget -1);
  return Boolean(numStr === target);
}

confirmEnding("Bastian kj  pepeluisn", "pepeluisn");