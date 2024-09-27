/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let a=s.split('').concat(t.split('')).sort()
    for( let i=0;i<a.length;i+=2){
        if(a[i]!=a[i+1]){
            return a[i]
        }
    }
};