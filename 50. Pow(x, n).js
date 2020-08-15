/**
 实现 pow(x, n) ，即计算 x 的 n 次幂函数。

示例 1:

输入: 2.00000, 10
输出: 1024.00000
示例 2:

输入: 2.10000, 3
输出: 9.26100
示例 3:

输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
说明:

-100.0 < x < 100.0
n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
 */

 /**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(num, power) {
  if (power < 0)   return 1 / num * myPow(1 / num, -(power + 1))
  if (power === 0) return 1 
  if (power === 1) return num
  // 以上分别为power小于0 等于0 等于1 的情况
  let res = 1
  while (power > 1) { // power大于1
    if (power % 2 === 1) {
      res = res * num
      power--
    }
    num = num * num
    power = power / 2
  }
  return res * num
}