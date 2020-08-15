

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   /* 判断符号 */
   const isMinuSign = Math.sign(x) === -1 
   /* 得出结果 */
   let result = String(Math.abs(x)).split('').reverse().join('') * 1
   if(isMinuSign) result = -result 
   /* 考虑溢出情况 */
   if(result > Math.pow(2,31) - 1 || result < -Math.pow(2,31)) return 0
   return result 
};

console.log( reverse(-21232432) )