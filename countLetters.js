const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


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

console.log(countLetters("lighthouse in the house"));