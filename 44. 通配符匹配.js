/**
给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

'?' 可以匹配任何单个字符。
'*' 可以匹配任意字符串（包括空字符串）。
两个字符串完全匹配才算匹配成功。

说明:

s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
示例 1:

输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
示例 2:

输入:
s = "aa"
p = "*"
输出: true
解释: '*' 可以匹配任意字符串。
示例 3:

输入:
s = "cb"
p = "?a"
输出: false
解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
示例 4:

输入:
s = "adceb"
p = "*a*b"
输出: true
解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
示例 5:

输入:
s = "acdcb"
p = "a*c?b"
输出: false
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
   let sLen = s.length
   let pLen = p.length
   let sIndex = 0
   let pIndex = 0
   let startP = -1
   let startS = -1
   while( sIndex < sLen ){
       if(pIndex < pLen && ( p.charAt( pIndex ) === '?' || p.charAt(pIndex) === s.charAt(sIndex)    ) ){
           sIndex++
           pIndex++
       }else if(pIndex < pLen && p.charAt( pIndex ) === '*'){
           startP = pIndex 
           startS = sIndex
           pIndex++
       }else if( startP === -1 ){
           return false 
       }else{
           pIndex = startP  + 1
           sIndex = startS + 1
           startS = sIndex
       }
   }
   for(let i = pIndex ; i < pLen ; i++ ){
        if( p.charAt(i) !== '*' ) return false
   }
   return true
};

console.log( isMatch( "adceb" , "*a*b"  ) )