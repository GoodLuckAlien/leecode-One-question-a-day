/**
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例：

输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
 */
/**
 * 回溯法
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
   const result = []
   const sub = []
   backTrack( result ,sub ,0,0,n )
   return result
};
function backTrack(result,sub,open,close,max){
   if(sub.length === max * 2){
       result.push( sub.join('') )
   }
   if(open < max){
      sub.push('(')
      backTrack( result ,sub , open+1 ,close,max )
      sub.pop()
   }
   if(close<open){
       sub.push(')')
       backTrack( result ,sub , open ,close + 1 ,max )
       sub.pop()
   }
}
console.log(generateParenthesis( 3 ))