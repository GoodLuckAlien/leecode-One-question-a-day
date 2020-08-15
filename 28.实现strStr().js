/**
实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:

输入: haystack = "hello", needle = "ll"
输出: 2
示例 2:

输入: haystack = "aaaaa", needle = "bba"
输出: -1
说明:

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   const hl = haystack.length
   const nl = needle.length
   if( nl === 0 ) return nl
   /* haystack 指针 */
   let hp = 0
   while(hp < hl - nl + 1 ){
       while( hp < hl -nl + 1 &&  haystack.charAt(hp) !== needle.charAt(0) ) hp++ 
       let cl = 0 /* 当前匹配字符窜长度 */
       let np = 0 /* needle 指针  */
       while( hp < hl && np < nl && haystack.charAt( hp ) === needle.charAt( np ) ){
           hp++
           np++
           cl++
       }
       if( nl === cl ) return hp - cl
       hp = hp - cl + 1
   }
   return -1
};

console.log( strStr( "aaaaa" , "bba" ) )