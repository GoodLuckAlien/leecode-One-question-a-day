
/**
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。



示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
   const result = []
   if(!root) return result
   const stack = []
   stack.push(root)
   while (stack.length!==0) {
       const length = stack.length
       result.push([])
       for(let i = 1 ; i<=length;i++ ){
           const current = stack.shift()
           result[result.length-1].push(current.val)
          if(current.left)stack.push(current.left)
          if(current.right)stack.push(current.right)
       }
   }
   return result
}