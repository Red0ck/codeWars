var moveZeros = function (arr) {
  let zerosArray = [];
  let finalArray = [];
  arr.forEach(function(value){
    if(value === 0){
      zerosArray.push(0);
    } else {
      finalArray.push(value);
    }
})
  return finalArray.concat(zerosArray);
}