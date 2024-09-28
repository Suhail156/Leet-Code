/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let a=Math.sqrt(num)
    if(Number.isInteger(a)){
        return true
    }
    return false
};