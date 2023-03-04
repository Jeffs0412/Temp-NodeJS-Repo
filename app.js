// Lodash Library assigned in a variable
const _ = require('lodash');
const nums1 = [1,[2,[3,[4,5]]]];
const nums2 = [11,22,[33,[44,[55]]]];

// flattenDeep method
const numsFlattenDeep = _.flattenDeep(nums1);
console.log(numsFlattenDeep);
// Output: [ 1, 2, 3, 4, 5 ]

// concat method
const numsConcat = _.concat(nums1, nums2, 66, [77,88]);
console.log(numsConcat);
/*
Output: [
    1,
    [ 2, [ 3, [Array] ] ],
    11,
    22,
    [ 33, [ 44, [Array] ] ],
    66,
    77,
    88
  ]
*/
const numsConcatFlatten = _.flattenDeep(numsConcat)
console.log(numsConcatFlatten);
// Output: [1,  2,  3,  4,  5, 11, 22, 33, 44, 55, 66, 77,88]
