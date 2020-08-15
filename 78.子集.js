/**
给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [] , n, k
    function backtrack(first,list,nums){
        if(list.length ===  k){
          result.push([ ...list ])
        }
        for(let i = first ; i< n ;i++){
           list.push(nums[i])
           backtrack(i+1,list,nums)
           list.pop()
        }
    }
    n = nums.length
    for(k = 0 ;k < n + 1 ;k++ ){
      backtrack(0,[],nums)
    }
    return result
};
console.log( subsets( [1,2,3] ) )