/**
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5

 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const helper = (curNums,start,end)=>{
        if(start > end){
            return null
        }
        const middle = Math.floor(( start + end + 1) / 2)
        const root = new TreeNode()
        root.val = nums[middle]
        root.left = helper(curNums,start,middle-1)
        root.right = helper( curNums , middle + 1 , end )
        return root
     }
   return helper(nums,0,nums.length - 1)
};