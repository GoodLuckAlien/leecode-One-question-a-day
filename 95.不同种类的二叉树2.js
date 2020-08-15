/**
给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。



示例：

输入：3
输出：
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释：
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function generateTree(start,end){
   const reuslt = []
   if(start>end){
       reuslt.push(null)
       return reuslt
   }
   for(let i = start ;i<= end;i++ ){
       const leftTree = generateTree(start,i-1)
       const rightTree = generateTree(i+1,end)
       for(let left in leftTree){
           for(let right in rightTree ){
               const currTree = new TreeNode(i)
               currTree.left = leftTree[left]
               currTree.right = rightTree[right]
               reuslt.push(currTree)
           }
       }
   }
   return reuslt
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
   if(n===0){
       return []
   }
   return generateTree(1,n)
};