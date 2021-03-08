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

module.exports = eqArrays;
