// const assertEqual = require('../assertEqual')
const tail = require('../tail');
const assert = require('chai').assert;



const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("tail function", () => {
  it("returns 2 for [Yo Yo, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(words), 2);
  });
});