/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
     let count=0
    for(let i=0;i<details.length;i++){
        let a=details[i].slice(11,13)
        if(a>60){
         count++
        }
    }
    return count
};