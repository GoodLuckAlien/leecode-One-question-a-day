/**
给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔。

示例:

输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]

 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
   const ADD_COUNT = 4
   let addressList = new Array(ADD_COUNT)
   const result = []
   const ads = (s,addlen,start)=>{
      if(addlen === ADD_COUNT ){
         if(start===s.length){
             result.push( addressList.join('.') )

         }
         return
      }
      if(start === s.length) return
      if(s.charAt(start) * 1 ===0 ){
          addressList[addlen] = 0
          ads(s,addlen+1,start + 1 )
      }
      let addArr = 0
      for(let end = start;end < s.length ; end++ ){
         addArr = addArr * 10 + s.charAt(end) * 1
         if(addArr > 0 && addArr <= 255){
             addressList[addlen] = addArr
             ads( s , addlen + 1 , end + 1 )
         }else {
             break
         }
      }
   }
   ads(s,0,0)
   return result
};
console.log( restoreIpAddresses(  '25525511135' ) )