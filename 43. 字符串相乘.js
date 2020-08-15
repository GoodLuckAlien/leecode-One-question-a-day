/**
 * 
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 == "0" || num2 == "0") return "0";
    let l1 = num1.length,
    l2 = num2.length;
    let res = new Array(l1 + l2 - 1).fill(0);
    for (let i = 0; i < l2; i++) {
      for (let j = 0; j < l1; j++) {
        res[i + j] += +num2[i] * +num1[j];
      }
    }
    let len = res.length;
    let str = "",
      num = 0;
    while (len--) {
      num += res[len];
      str = (num % 10) + str;
      num = (num / 10) | 0;
    }
    return num > 0 ? num + str : str;
};

console.log( multiply("123" ,"456"  ) )

console.log( new Array(9).fill(0) )