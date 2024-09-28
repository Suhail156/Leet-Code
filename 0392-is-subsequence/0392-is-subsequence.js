/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let a=s.split('')
    let b=t.split('')
     let i=0
     let j=0
     while(i<a.length&&j<b.length){
        if(a[i]==b[j]){
            i++
        }
        j++
     }
    return i===a.length
};