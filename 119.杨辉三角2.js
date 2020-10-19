/**
给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]
进阶：

你可以优化你的算法到 O(k) 空间复杂度吗？
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = []
    result.push(1)
    if(rowIndex === 0){
        return result
     }
    for(let i = 1 ; i <= rowIndex ; i++ ){
        const col = [ 1 ]
        for(let j = 1 ; j < i ;j++ ){
            col.push(result[j] + result[j-1])
        }
        col.push(1)
        result = col
    }
    return result
 };

console.log( getRow(3) )