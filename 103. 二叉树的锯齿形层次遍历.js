/**
给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层次遍历如下：
[
  [3],
  [20,9],
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
var zigzagLevelOrder = function(root) {
    const result = []
    if(!root) return result
    let stack = []
    let isReset = true
    stack.push(root)
    while (stack.length!==0) {
        const length = stack.length
        result.push([])

        for(let i = 1 ; i<=length;i++ ){
            if( isReset ){
                const current = stack.shift()
                result[result.length-1].push(current.val)
                if(current.left)stack.push(current.left)
                if(current.right)stack.push(current.right)
            }
            else{
                const current = stack.pop()
                result[result.length-1].push(current.val)
                if(current.right)stack.unshift(current.right)
                if(current.left)stack.unshift(current.left)
            }
        }
        isReset = !isReset

    }
    return result
};

const a  = function(root) {
    if(root==null)
      return []
    var arr=[root]
    var res=[]
    var go=true
    while(arr.length>0){
      var n=arr.length
      var now=[]
      if(go){
        while(n-->0){
          var node=arr.shift()
          now.push(node.val)
          if(node.left!=null)arr.push(node.left)
          if(node.right!=null)arr.push(node.right)
        }
        res.push(now)
      }else{
        while(n-->0){
          var node=arr.pop()
          now.push(node.val)
          if(node.right!=null)arr.unshift(node.right)
          if(node.left!=null)arr.unshift(node.left)
        }
        res.push(now)
      }
      go=!go
    }
    return res
  };

