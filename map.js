
// const words = ["pizza", "is ", "good"];
// const answer = ['p', 'i', 'g']

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

// const results1 = map(words, word => word[0])



// assertArraysEqual(map(words, word => word[0]), answer)