/**
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
。
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
   if(!head) return head
   let cur = head ,pre = null
   while (m>1) {
       pre = cur
       cur = cur.next
       m--
       n--
   }
   let con = pre ,tail = cur
   let three
   while (n>0) {
      three = cur.next
      cur.next =pre
      pre = cur
      cur = three
      n--
   }
   if(con){
       con.next = pre
   }else{
       head = pre
   }
   tail.next = cur
   return head
};