/**
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
   nums.sort((a,b)=>a-b)
   const newList = []
   for(let i=0;i <= nums.length-3 ;i++){
       /* 当i>0 证明后面全部大于0 ，所以不会出现等于零的情况 */
       if(nums[i] > 0) break
       /* 如果 i 和 i-1 相当 那么说明 i-1已经被用过 ，跳过下一个 */
       if(i > 0 &&  nums[i] === nums[i-1])  continue
       /* 双指针 */
       let left = i + 1 , right = nums.length -1
       while(left < right){
           const num = nums[i] + nums[left] + nums[right] 
           if(num<0){
               /* num 小于零 ，left往后近一位 ，防止 多个left相等情况发生  */
              while( left < right && nums[left] === nums[++left] ){}
           }else if(num>0){
                /* num 小于零 ，left往后近一位 ，防止 多个left相等情况发生  */
                while( left < right && nums[right] === nums[--right] ){}
           }else if(num ===0) {
               newList.push([ nums[i] , nums[left] , nums[right]  ])
               while( left < right && nums[left] === nums[++left] ){}
               while( left < right && nums[right] === nums[--right] ){}
           }
       }     
   }
   return newList
};

console.log( threeSum( [-1,0,1,2,-1,-4] ) )