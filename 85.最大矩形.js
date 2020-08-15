/**
给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

示例:

输入:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
输出: 6

**/
const maxArea = (heights) => {
    const stack = [];
    let ans = 0;
    heights.unshift(0);
    heights.push(0);
    for (let i = 0; i < heights.length; ++i) {
        while (stack.length && heights[stack[stack.length-1]] > heights[i]) {
            const currentHeight = stack.pop();
            const right = i - 1, left = stack[stack.length-1] + 1;
            ans = Math.max(ans, (right-left+1)*heights[currentHeight])
        }
        stack.push(i);
    }
    return ans;
}
var maximalRectangle = function(matrix) {
    let res = 0;
    if (!matrix.length) return res;
    const dp = [];
    for (let i = 0; i < matrix[0].length; ++i) {
        dp.push(0);
    }
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[0].length; ++j) {
            dp[j] = matrix[i][j] === '1' ? dp[j] + 1 : 0;
        }
        res = Math.max(res, maxArea(dp.slice()));
    }
    return res;
};

