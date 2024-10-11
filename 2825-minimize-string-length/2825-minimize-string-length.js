/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let a=[...new Set(s)].join('')
    return a.length
};