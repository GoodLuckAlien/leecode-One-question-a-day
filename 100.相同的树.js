/**
给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:

输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
示例 2:

输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
示例 3:

输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false

 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
function isType(type) {
    return Object.prototype.toString.call(type).slice(8, -1)
}
const helper = (p,q) => {
   if(isType(p) !== isType(q) ) return false
   if(!p && !q ) return true
   if(q.val!==p.val) return false
   if(!helper(p.left,q.left)){
      return false
   }else if( !helper(p.right,q.right)){
       return false
   }else {
       return true
   }
}
var isSameTree = function(p, q) {
   return helper(p,q)
};

console.log(isSameTree(new TreeNode(0) ,new TreeNode(1) ))