/**
n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。



上图为 8 皇后问题的一种解法。

给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例:

输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。
 

提示：

皇后，是国际象棋中的棋子，意味着国王的妻子。皇后只做一件事，那就是“吃子”。当她遇见可以吃的棋子时，就迅速冲上去吃掉棋子。当然，她横、竖、斜都可走一到七步，可进可退。（引用自 百度百科 - 皇后 ）
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let result = [];
    backStart(0, [], n, result);
    return result;
};
function backStart(k, arr, n, result) {
    if (k >= n) {
        let ar = [];
        arr.forEach(e => {//讲我们要的数据转换为需要的格式
            let str = '..............................';
            str=str.substring(0,n);
            str = `${str.substring(0, e)}Q${str.substring(e + 1)}`
            ar.push(str);
        })
        result.push(ar);
    } else {
        for (let i = 0; i < n; i++) {
            arr[k] = i;
            if (isBack(k, arr)) {
                backStart(k + 1, arr, n, result)
            }
        }
    }
}
function isBack(k, arr) {
    for (let i = 0; i < k; i++) {
        if (k - i == Math.abs(arr[i] - arr[k]) || arr[k] == arr[i]) {
            return false;
        }
    }
    return true;
}

console.log( solveNQueens(6) )
