/**
 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。

请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
 */


 /* TODO: 性能很垃圾 ～～～～～～～～  */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const newNumberList = [ ...nums1 , ...nums2 ].sort((a,b)=>a-b)
    const length = newNumberList.length
    /* 奇数情况 */
    if(length % 2){
       return newNumberList[ Math.floor(length / 2 ) ] 
    /* 偶数请求 */    
    }else {
       return (newNumberList[length /2]  + newNumberList[length/2 - 1] ) /2
    }
};


console.log( findMedianSortedArrays( [1,2] , [3,4] ) )