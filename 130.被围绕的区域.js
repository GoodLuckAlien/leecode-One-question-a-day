/**
给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

示例:

X X X X
X O O X
X X O X
X O X X
运行你的函数后，矩阵变为：

X X X X
X X X X
X X X X
X O X X
解释:

被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board, h = {}) {
    var d = (i, j) => board[i] && board[i][j] === 'O' && h[i + ',' + j] === undefined && (h[i + ',' + j] = 1, d(i - 1, j), d(i + 1, j), d(i, j + 1), d(i, j - 1))
    for (var j = 0; j < (board[0] && board[0].length); j++)
        d(0, j), d(board.length - 1, j)
    for (var i = 1; i < board.length - 1; i ++)
        d(i, 0), d(i, board[0].length -1)
    for (var i = 1; i < board.length - 1; i++)
        for (var j = 1; j < board[0].length - 1; j++)
            if (board[i][j] === 'O' && !h[i + ',' + j])
                board[i][j] = 'X'
};
