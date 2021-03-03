let flat = []

const flatten = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flat.push(arr[i][j])
      }
    } else {
      flat.push(arr[i])
    }
  }
  return flat;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))