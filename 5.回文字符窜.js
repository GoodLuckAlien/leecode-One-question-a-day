/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：
输入: "cbbd"
输出: "bb"

 */


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s || s.length < 1 ) return ''
    let length = s.length
    let start = 0, end= 0 
    for(let i=0 ; i < length ; i++){
        const len1 = expandAroundCenter(s,i,i) /* 中心为单字母  bab */
        const len2 = expandAroundCenter(s,i,i+1) /* 中心为双字母 cbbc */
        const len = Math.max(len1,len2)
        if(len > end - start ){
            start = Math.round(i - (len - 1) / 2)
            end = Math.floor(i + len / 2)
        }
    }
    return s.slice( start  , end + 1 )
};

function expandAroundCenter(s,start,end){
    while(start>=0 && end < s.length && s.charAt(start) === s.charAt(end)  ){
        start--
        end++
    }
    return  end  - start - 1
}
