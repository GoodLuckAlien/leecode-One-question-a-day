/**
给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]
示例 2:

输入: candidates = [2,3,5], target = 8,
所求解集为:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 */
/**
 * 回溯算法
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
   const result =[]
   let length = candidates.length
   let path = []
   candidates.sort((a,b)=>a-b)
   function backtrack(pathArr,target,start){
       if(target===0){
           return result.push(pathArr)
       }  
       for(let i = start;i<length;i++){
           if(target < candidates[i]) break
           pathArr.push( candidates[i] )
           backtrack(pathArr.slice(),target-candidates[i],i)
           pathArr.pop()
       }
   }
   backtrack( path ,target , 0 )
   return result
};
console.log( combinationSum( [2,3,5] , 8  ) )