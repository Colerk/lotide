const findKeyByValue = function(obj, val) {
  for (const item in obj) {
    if (val === obj[item]) {
      return item;
    }
  }
}

module.exports = findKeyByValue;


// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
