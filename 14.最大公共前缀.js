/**
 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   if(strs.length === 0) return ''
   let current = strs[0]
   for(let i = 1; i < strs.length; i++){
     while(strs[i].indexOf(current) !==0 ){
         current = current.slice(0,current.length-1)
         if(!current) return current
     }
   }
   return current
};

console.log( longestCommonPrefix( ["dog","racecar","car"]) )