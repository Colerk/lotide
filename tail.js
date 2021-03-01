const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual}  !== ${expected}`);
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1)
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); 
assertEqual(words.length, 3); 