const without = function(arr1, arr2) {
  let fixed = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      fixed.push(arr1[i])
    }
  }
  return fixed
}

module.exports = without;