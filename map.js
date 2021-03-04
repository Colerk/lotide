
const words = ["pizza", "is ", "good"];
const answer = ['p', 'i', 'g']

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0])

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



assertArraysEqual(map(words, word => word[0]), answer)