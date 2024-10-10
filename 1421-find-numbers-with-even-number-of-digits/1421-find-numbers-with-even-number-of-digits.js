/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
        let b=0
     
     for(let i=0;i<nums.length;i++){
             let a=nums[i].toString()
         if(a%2==0||a.length%2==0) {
             if(a.length%2==0&&a.length>=2) b++
         }
         
     
 }
     return b
     
 
};