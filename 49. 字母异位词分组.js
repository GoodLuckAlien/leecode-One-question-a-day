/**
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。

 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   const map = {} , result = []
   for(let i = 0; i < strs.length; i++ ){
       const current = strs[i].split('').sort().join('')
       map[current] ?  map[current].push(strs[i]) : map[current] = [ strs[i] ]
   }
   for( let i in map ){
       result.push( map[i] )
   }
   return result
};

console.log( groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) )