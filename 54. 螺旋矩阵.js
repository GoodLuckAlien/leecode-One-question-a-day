/**
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
   const result = []
   if(!matrix || matrix.length ===0 || matrix[0].length ===0){
       return result
   }
   const cols = matrix[0].length
   const rows = matrix.length
   let left = 0 , right = cols - 1 ,top = 0 , bottom = rows - 1 
   while(left <= right && top <= bottom ){
       /* 按行遍历 */
      for(let col = left; col <= right ;col++ ){
          result.push( matrix[top][col] )
      }
      /* 按列遍历 */
      for(let rol=top+1;rol<=bottom ;rol++){
          result.push( matrix[rol][right] )
      }
      if(left < right && top < bottom ){
          for(let col= right-1;col > left;col-- ){
              result.push(matrix[bottom][col])
          }
          for(let rol=bottom  ; rol > top ;rol-- ){
              result.push( matrix[rol][left] )
          }
      }
      left++
      right--
      top++
      bottom--
   }
   return result
};
console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
]))