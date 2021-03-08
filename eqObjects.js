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

  
  module.exports = eqObjects;



// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

