/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   nums.sort((a,b)=>a-b)
    for(let i=0;nums.length;i++){
        if(nums[i]!=i){
            return i
        }
    }
};