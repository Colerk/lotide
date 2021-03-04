const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`)
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
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
};

const eqObjects = function(object1, object2) {
  let result = false
  if (Object.keys(object1).length != Object.keys(object2).length) {
    return false;
  } else { 
    for (const item in object1) {
      if (Array.isArray(object1[item]) || Array.isArray(object2[item])) {
        if (object1[item].length !== object2[item].length) {
          return false
        } else {
          result = eqArrays(object1[item], object2[item])
        }
      } else if (item in object2) {
        if (object1[item] === object2[item]) {
          result = true;
          } else {
            result = false;
          }
        } else {
        result = false
      }
    }
  }
  return result;
}

  
  



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

