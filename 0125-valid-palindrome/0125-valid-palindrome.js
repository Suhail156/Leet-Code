/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let a=s.toLowerCase().replace(/[^a-z0-9]/g, '')
      let b=a.split('').reverse().join('')
    return a===b
};