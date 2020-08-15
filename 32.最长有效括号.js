/**
给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

示例 1:

输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
示例 2:

输入: ")()())"
输出: 4
解释: 最长有效括号子串为 "()()"

 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let max = 0
    const stack = [ -1 ]
    for(let i=0;i < s.length; i++ ){
        if(s.charAt(i) === '('){
            stack.push(i)
        }else{
            stack.pop()
            if(stack.length === 0){
                stack.push(i)
            }else{
                max = Math.max( max , i - stack[ stack.length -1 ] )
            }
        }
    }
    return max
};

