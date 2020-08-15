/**
 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:

输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const result = []
    if(n===0) return result
    let cols = n
    let rows = n
    for(let i = 0; i < cols ; i++ ){
        const arr = new Array( rows )
        result.push(arr)
    }
    let left = 0 , right = cols - 1 ,top = 0 , bottom = rows - 1 
    let num =0
    while(left <= right && top <= bottom ){
        /* 按行遍历 */
       for(let col = left; col <= right ;col++ ){
            result[top][col] = ++num
       }
       /* 按列遍历 */
       for(let rol=top+1;rol<=bottom ;rol++){
            result[rol][right] = ++num
       }
       if(left < right && top < bottom ){
           for(let col= right-1;col > left;col-- ){
             result[bottom][col] =++num
           }
           for(let rol=bottom  ; rol > top ;rol-- ){
             result[rol][left] = ++num
           }
       }
       left++
       right--
       top++
       bottom--
    }
    return result
};

console.log( generateMatrix( 3 ) )