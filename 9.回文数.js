
// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:

// 输入: 121
// 输出: true
// 示例 2:

// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3:

// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。
// 进阶:

// 你能不将整数转为字符串来解决这个问题吗？

/* 用字符选解决 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   const isSign = Math.sign(x) === -1
   if(isSign) return false
   const ocver = String(x).split('').reverse().join('') * 1
   return ocver === x
};

/* 不用字符窜解决 */
var isPalindromeNoString = function(x) {
    /* 考虑到负数的情况 */
    if(x < 0 || ( x % 10 === 0  && x !== 0) ){
        return false
    }
    let palindNumbber = 0
    while(x > palindNumbber ){
        palindNumbber = palindNumbber * 10 + x % 10
        x = Math.floor( x / 10 )  
    }
    console.log(palindNumbber , x)
    return x === palindNumbber || x === Math.floor( palindNumbber /10 )
}
