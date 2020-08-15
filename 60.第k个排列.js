/**
给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

"123"
"132"
"213"
"231"
"312"
"321"
给定 n 和 k，返回第 k 个排列。

说明：

给定 n 的范围是 [1, 9]。
给定 k 的范围是[1,  n!]。
示例 1:

输入: n = 3, k = 3
输出: "213"
示例 2:

输入: n = 4, k = 9
输出: "2314

 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const constArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const getNum = function(n, k, arr){
    // 获取每个元素排在首位的排列总数量
    let total = constArr.slice(0, n-1).reduce((total, now) => {
        return total*now
    }, 1)
    // start 获取排列元素在剩余的排序中的位置
    // end 判断是否后续元素将按顺序排列
    let end = k % total
    let start = Math.floor(k / total)
    return {
        end:  end,
        start: start
    }
}
var getPermutation = function(n, k) {
    let newArr = constArr.slice(0, n)
    let str = ''
    let result = getNum(n, k-1, newArr)
    // 确定首位元素
    str+=newArr.splice(result.start, 1)[0]
    // 当后续元素确定为顺序排列
    while(result.end !== 0){
        result = getNum(--n, result.end, newArr)
        str+=newArr.splice(result.start, 1)[0]
    }
    str += newArr.join('')
    return str
};

