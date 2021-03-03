const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


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


assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []);  // => []
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
