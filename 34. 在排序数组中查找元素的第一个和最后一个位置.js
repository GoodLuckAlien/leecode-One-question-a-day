/**
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]


 */


 function extremeInsertionIndex(nums,target){
     let left = 0 
     let right = nums.length 
     while(left < right){
          const midden = Math.floor( ( left + right ) / 2 )
          if(nums[midden] >= target ){
              right = midden
          }else{
              left = midden + 1
          }
     }
     return left
 }
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   const range = [ -1 , -1 ]
   const leftIndex = extremeInsertionIndex(nums,target)
   if(leftIndex===nums.length || nums[leftIndex] !== target  ){
       return range
   }
   range[0] = leftIndex
   let rightIndex = leftIndex + 1
   while(nums[rightIndex] === target )rightIndex++
   range[1]= rightIndex -1
   
   return range

};

console.log( searchRange( [5,7,7,8,8,10] ,6 ) )