/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
     let a=Math.max(word1.length,word2.length)
      let c=''
        for(let i=0;i<a;i++){
           c+=(word1[i]||'')+(word2[i]||'')
        }
        return c
};