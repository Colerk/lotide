// const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

const eqArrays = require('../eqArrays')


describe("eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
// assertEqual(eqArrays([1, 2, 5], [1, 2, 3]), true);