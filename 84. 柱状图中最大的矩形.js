/**
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。


以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。


图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
示例:

输入: [2,1,5,6,2,3]
输出: 10
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let len = heights.length
    let stack = []
    let left = new Array(len)
    let right = new Array(len).fill(len)
    for(let i = 0;i < len ; i++){
       while (stack.length > 0  && heights[ stack[ stack.length -1 ] ] > heights[i]  ) {
           right[  stack[ stack.length -1  ] ] = i
           stack.pop()
       }
       left[i] = ( stack.length <= 0 ? -1 : stack[ stack.length -1 ] )
       stack.push(i)
    }
    let max = 0
    for(let i=0;i<len;i++){
        max = Math.max( max , (right[i] -left[i] - 1) * heights[i]   )
    }
    return max
};
console.log(
    largestRectangleArea([2,1,5,6,2,3])
)