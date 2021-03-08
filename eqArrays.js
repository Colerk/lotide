const eqArrays = function(listOne, listTwo) {
  if (listOne.length === listTwo.length) {
    for (let i = 0; i < listOne.length; i++) {
      if (listOne[i] !== listTwo[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;
