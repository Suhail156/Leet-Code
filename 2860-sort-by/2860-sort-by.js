/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    fn=arr.sort((a,b)=>fn(a)-fn(b)) 
    return fn
};