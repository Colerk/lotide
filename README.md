# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @colek/lotide`

**Require it:**

`const _ = require('@colek/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the 1st item in an array
* `tail`: returns the 2nd to n item in an array
* `middle`: returns the middle item in an array
* `countLetters`: take in a sentence (as a string) and then return a count of each of the letters in that sentence
* `countOnly`: take in a collection of items and return counts for a specific subset of those items
* `eqArrays`: takes in two arrays and returns true or false, based on a perfect match. 
* `eqObjects`: take in two objects and returns true or false, based on a perfect match
* `findKey`: takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns `undefined`. 
* `findKeyByValue`: takes in an object and a value, then returns the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten`: takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array
* `letterPosition`: return all the indices (zero-based positions) in a string where each character is found
* `map`: returns a new array based on the results of the callback function
* `takeUntil`: will collent items from a provided array until the callback provided returns a truthy value.
* `without`; returns a subset of a given array, removing unwanted elements