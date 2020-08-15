/**
 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:

输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
   const result = []
   function backtrack(first,current){
      if(current.length===k){
          result.push([ ...current ])
      }
      for(let i=first ;i< n+1 ;i++){
         current.push(i)
         backtrack(i+1,current)
         current.pop()
      }
   }
   backtrack(1,[])
   return result
};
console.log( combine(4,2) )