/**
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
示例:
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    /* 链表两两合并 */
    if(lists.length===0) return null
    if(lists.length<=2) return mergeTwoLists(...lists)
    let result
    for(let i=0 ;i<lists.length-1;i++ ){
       result = mergeTwoLists( result ? result : lists[i] ,lists[i+1] )
    }
    return result
};

function mergeTwoLists(l1,l2){
   if(!l1 && !l2) return null
   if(!l1) return l2
   if(!l2) return l1
   if(l1.val < l2.val ){
       l1.next = mergeTwoLists(l1.next,l2)
       return l1
   }else{
       l2.next = mergeTwoLists(l1,l2.next)
       return l2
   }
}