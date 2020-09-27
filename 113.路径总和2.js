/**
 *
给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
   if(!root) return []
    const result = []
    const res = []
    const helper = (currentNode,currentSum) => {
        if( !currentNode.left &&  !currentNode.right &&  currentSum === sum ){
            res.push( result.map(i=>i) )
            return
        }
        if(currentNode.left){
            result.push(currentNode.left.val)
            helper(currentNode.left,currentSum + currentNode.left.val )
            result.pop()
       }
       if(currentNode.right){
           result.push(currentNode.right.val)
           helper(currentNode.right,currentSum + currentNode.right.val )
           result.pop()
       }
    }
    result.push( root.val )
    helper(root,root.val)
    return res
};