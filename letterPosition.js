const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      continue;
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = [i]
    }
  }
  return results;
};


module.exports = letterPositions;


// console.log(letterPositions('lighthouse in the house'))