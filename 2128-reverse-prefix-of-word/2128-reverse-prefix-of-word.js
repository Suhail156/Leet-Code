/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let b=[]
    let a=word.indexOf(ch)
    for(let i=0;i<=a;i++){
       b.push(word[i])
    }
      b.reverse()
      for(let j=a+1;j<word.length;j++){
        b.push(word[j])
      }
      return b.join('')
};