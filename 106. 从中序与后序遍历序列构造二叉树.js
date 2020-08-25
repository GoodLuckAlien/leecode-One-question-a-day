/**
 *
根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!inorder.length) return null
    let n = postorder.length
    let tmp = postorder[n-1],mid = inorder.indexOf(tmp)
    let root = new TreeNode(tmp)
    root.left = buildTree(inorder.slice(0,mid),postorder.slice(0,mid))
    root.right = buildTree(inorder.slice(mid + 1),postorder.slice(mid,n-1))
    return root
};