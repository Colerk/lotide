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

const eqArrays = function(arr1, arr2) {
  let current = true
  if (current) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        current = false
      }
    }
  }
  return current
}

const without = function(arr1, arr2) {
  let fixed = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      fixed.push(arr1[i])
    }
  }
  return fixed
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

