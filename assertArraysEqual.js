const assertArraysEqual = function(arr1, arr2) {
  let current = true;
  for (let i = 0; i < arr1.length; i++) {
    if (current) {
      if (arr1[i] !== arr2[i]) {
        current = false;
      }
    }
  }
  if (current) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1}  !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;