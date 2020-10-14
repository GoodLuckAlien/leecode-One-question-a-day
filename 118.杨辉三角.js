/**
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
   const result = []
   if(numRows === 0 ){
       return result
   }
   result.push([1])
   for(let i = 1;i < numRows ;i++ ){
       const col = [1]
       const preCol = result[i-1]
       for(let j = 1;j<i; j++){
          col.push( preCol[j]  + preCol[j-1])
       }
       col.push(1)
       result.push( col )
   }
   return result
};