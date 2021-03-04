const eqObjects = function(object1, object2) {
  let result = false;
  if (Object.keys(object1).length != Object.keys(object2).length) {
    return false;
  } else {
    for (const item in object1) {
      if (Array.isArray(object1[item]) || Array.isArray(object2[item])) {
        if (object1[item].length !== object2[item].length) {
          return false;
        } else {
          result = eqArrays(object1[item], object2[item]);
        }
      } else if (item in object2) {
        if (object1[item] === object2[item]) {
          result = true;
        } else {
          result = false;
        }
      } else {
        result = false;
      }
    }
  }
  return result;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)}  !== ${inspect(object2)}`)
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  }
};

let object1 = {yes: 'no'}
let object2 = {yes: 'no'}

assertObjectsEqual(eqObjects(object1, object2), false)
assertObjectsEqual(eqObjects(object1, object2), true)