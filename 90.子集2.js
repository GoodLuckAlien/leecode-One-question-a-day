/**
 *
给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: [1,2,2]
输出:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(numbers) {
    let nums = numbers.sort((a,b)=>a-b)
    let hashSort = []
    let result = [] , n, k
    function backtrack(first,list,nums){
        if(list.length ===  k){
          const listString = list.join('')
          if(!~hashSort.indexOf(listString)){
            result.push([ ...list ])
            hashSort.push(listString)
          }
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
console.log( subsetsWithDup([1,2,2]) )