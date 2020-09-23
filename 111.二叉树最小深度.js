/**
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。

示例:

给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回它的最小深度  2.

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
 * @return {number}
 */
// var minDepth = function(root) {
//    if(!root) return 0
//    const stack = []
//    let minDep = 1
//    stack.push( root )
//    while(stack.length > 0 ){
//        minDep++
//        let isNull = false
//        let length = stack.length
//        for(let i = 0; i< length ; i++ ){
//            const node = stack.shift()
//            if(!node.left || !node.right){
//                 isNull = true
//                 break
//            }else{
//                stack.push( node.left )
//                stack.push( node.right )
//            }
//        }
//        if(isNull) break
//    }
//    return minDep
// };

var minDepth = function(root){
    if(!root) return 0
    if(!root.left && !root.right ) return 1
    let min_dep = Number.MAX_SAFE_INTEGER
    if(root.left){
       min_dep = Math.min(minDepth(root.left),min_dep)
    }
    if(root.right){
       min_dep = Math.min( minDepth(root.right),min_dep)
    }
    return min_dep + 1
}