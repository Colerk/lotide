const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`)
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let result = false
  let m = {}
  let n = {}
  if (Object.keys(object1).length >= Object.keys(object2).length) {
    m = object1
    n = object2
  } else {
    m = object2
    n = object1
  }
  for (const item in m) {
   if (item in n) {
    if (m[item] === n[item]) {
      result = true;
      } else {
        result = false;
      }
    } else {
      result = false
    }
  }
  return result;
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2" , c: '3'};
console.log(eqObjects(ab, abc)); // => false
