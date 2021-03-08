const middle = function(arr) {
  let newArr = [];
  if (arr.length < 3) {
    return newArr;
  } else if (arr.length % 2 === 1) {
    newArr.push(arr[(arr.length / 2) - .5]);
  } else if (arr.length % 2 === 0) {
    newArr.push(arr[(arr.length / 2) - 1]);
    newArr.push(arr[(arr.length / 2)]);
  }
  return newArr;
};

module.exports = middle;


