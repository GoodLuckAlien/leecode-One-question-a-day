/**
给定一个二叉树，原地将它展开为一个单链表。



例如，给定二叉树

    1
   / \
  2   5
 / \   \
3   4   6
将其展开为：

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    const list = [ ]
    const help = (currentRoot)=> {
       if(currentRoot){
          list.push(currentRoot)
          help(currentRoot.left)
          help(currentRoot.right)
       }
    }
    help(root)
    const length = list.length
    for(let i = 1;i < length;i++ ){
        console.log(111)
        const pre = list[i-1]
        const cur = list[i]
        pre.left = null
        pre.right = cur
    }
};