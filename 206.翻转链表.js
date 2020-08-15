/**
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     let pre = null
//     let current = head
//     while(current){
//        let nextNode = current.next
//        current.next = pre
//        pre = current
//        current = nextNode
//     }
//     return pre
// };
/**
 * 递归
 */
var reverseList= function(head){
    if(!head || !head.next) return head
    const p = reverseList(head.next)
    head.next.next = head
    head.next = null
    return p
}