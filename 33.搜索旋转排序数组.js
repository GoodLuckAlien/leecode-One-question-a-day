/**
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1

 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   const length = nums.length
   if(!length) return -1
   if(length === 1) return nums[0] === target ? 0 : -1
   let left = 0
   let right = length -1 
   while(left <= right){
       const middle = Math.floor( ( left + right ) / 2 )
       if(target === nums[middle]) return middle
       if(nums[0] <= nums[middle]){
           if(nums[0]<= target && target<nums[middle] ){
               right = middle - 1                 
           }else{
               left = middle + 1
           }
       }else{
           if(nums[middle] < target && target <= nums[length-1]   ){
               left = middle + 1
           }else{
               right = middle -1
           }
       }
   }
   return -1
};
console.log( search( [3,1] ,1 ) )