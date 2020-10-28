/**
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false

 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0
    let right = s.length - 1
    let isPalin = true
    const reg = /^[a-zA-Z0-9]{1,1}$/
    while(left < right ){
        let leftValue= s.charAt(left)
        let rightValue = s.charAt(right)
        while( leftValue && !reg.test(leftValue)){
            left++
            leftValue = s.charAt(left)
        }
        while( rightValue && !reg.test(rightValue)){
            right--
            rightValue = s.charAt(right)
        }
        if(leftValue.toLowerCase()!==rightValue.toLowerCase()){
            isPalin = false
            break
        }else{
            left++
            right--
        }
    }
    return isPalin
 };

console.log( isPalindrome('race a car') )