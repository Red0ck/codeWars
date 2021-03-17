// return the missing number!
function findNumber(array) {
  let missing = new Array(array.length + 2).fill(true);
  missing[0] = false;
  for(let i = 0; i <= array.length; i++){
    missing[array[i]] = false;
  }
  return (missing.indexOf(true));
}