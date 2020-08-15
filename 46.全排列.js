
/**
给定一个 没有重复 数字的序列，返回其所有可能的全排列。
示例:
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
   let length = nums.length
   let newArr = nums.map(_=>_)
   let result = []
   backtrack(length,newArr,result,0)
   return result
};

function backtrack(n,arr,result,index){
   if(index === n){
     result.push(arr)
   }
   for(let i= index; i < n; i++){
       swap(arr,index,i) 
       backtrack(n,[...arr],result, index+1)
       swap(arr,index,i) 
   }
}

function swap(arr,i,j){
    let swapItem = arr[i]
    arr[i] = arr[j]
    arr[j]=swapItem
}

console.log( permute( [1,2,3] ) )