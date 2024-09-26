/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let a=  digits.join('')
     let b=  BigInt(a)+BigInt(1)
     let c=b.toString().split('').map(Number)
     return c
   
};