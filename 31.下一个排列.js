/**
实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
 */
/**
 * @param {number[]} nums
 * 一次扫描
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2
    while( i >= 0 && nums[i] >= nums[i+1] ){
        i--
    }
    if(i>=0){
       let j = nums.length -1
       while(j >= 0 &&  nums[j] <= nums[i]){
            j--
       }
       console.log(j,i)
       swap(i,j,nums)
    }
    
    reverse( nums ,i + 1)
    return nums
};

/* 翻转剩余的数组 */
function reverse(nums,start){
    let end = nums.length -1 
    while(end > start){
        swap(end,start,nums)
        start++
        end--
    }
}

/* 交换两数 */
function swap(i,j,nums){
   let temp = nums[i]
   nums[i] = nums[j]
   nums[j] = temp
}

console.log( nextPermutation( [5,4,7,5,3,2] ) )