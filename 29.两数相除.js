
/**
给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

 

示例 1:
输入: dividend = 10, divisor = 3
输出: 3
解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
示例 2:

输入: dividend = 7, divisor = -3
输出: -2
解释: 7/-3 = truncate(-2.33333..) = -2
 
提示：

被除数和除数均为 32 位有符号整数。
除数不为 0。
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。
 */
/**
 * 二分法
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    /* 是否正负数 */
    const isforward = (dividend > 0 && divisor > 0) || ( divisor < 0 && dividend < 0 ) ? true : false
    dividend = dividend > 0 ? dividend : -dividend
    divisor = divisor >0 ? divisor : -divisor 
    let left = 0
    let right = isforward ? 2147483647 : 2147483648
    let result = 0
    while( left <= right){
        /* 中间位置 */
        const middle = Math.floor( ( left + right ) / 2 )
        if(divisor * middle == dividend ){
            result = middle
            break
        }else if( divisor * middle > dividend ){
            right = middle - 1   
        }else {
            result = middle
            left = middle + 1
        }
    }
    return isforward ? result : -result
};
console.log( divide( 10 ,3 ) )