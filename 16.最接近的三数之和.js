
/**
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result ,difference,sum,Sum
    nums.sort((a,b)=>a-b)
    for(let i=0;i <= nums.length-3; i++){
        if(nums[i]===nums[i-1]) continue
        /* 双指针 */
        let left = i+1 , right = nums.length - 1  
        while(left < right){
            sum =  nums[i] + nums[left] + nums[right]
            difference = target - sum
           if(difference > 0 ){  /* 移动左指针 */
               while(left < right && nums[left] === nums[ ++ left] ){}
           }else if(difference < 0 ){ /* 移动有执政 */
               while(left < right && nums[right] === nums[ -- right ] ){}
           }else if(difference === 0) {
                result = 0
                break 
           }
           if(i===0 && !result ) {
              result = Math.abs(difference)
              Sum = sum
            }
           if(Math.abs(difference) < result  ){
                Sum = sum
                result = Math.abs(difference)
            }
        }
        if(result === 0) {
            Sum = sum 
            break
        }
    }
    return Sum
};

console.log( threeSumClosest( [1,2,5,10,11] ,12) )

