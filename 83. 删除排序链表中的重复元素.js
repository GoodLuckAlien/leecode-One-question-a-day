/**
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2
示例 2:

输入: 1->1->2->3->3
输出: 1->2->3
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head || !head.next ) return head
    let pirot = new ListNode(0)
    pirot.next = head
    let pre = pirot
    let cur = head
    let value = cur.val
    while (cur && cur.next) {
        if(cur.next.val === value ){
            pre.next = cur.next
            cur = pre.next
        }else{
            pre = pre.next
            cur = cur.next
            value = cur.val
        }
    }
    return pirot.next
};