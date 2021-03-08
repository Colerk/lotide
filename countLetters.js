const countLetters = function(str) {
  let counts = {};
  let clean = str.replace(/\s+/g, '');
  for (const letter of clean) {
    if (counts[letter]) {
      counts[letter] += 1;
    } else {
      counts[letter] = 1;
    }
  }
  return counts;
};

module.exports = countLetters;

// console.log(countLetters("lighthouse in the house"));