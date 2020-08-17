/**
给定一个二叉树，检查它是否是镜像对称的。



例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let fun = (r1, r2) => {
        if(r1 === r2) return true;
        if(r1 && r2 && r1.val === r2.val) {
            return fun(r1.left, r2.right) && fun(r1.right, r2.left);
        }
        return false;
    }
    return root ? fun(root.left, root.right) : true;
};