/**
 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗

 */
/**
 * Definition for singly-linked list.

 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   const dirmy = new ListNode(0)
   dirmy.next = head
   let first = dirmy
   let last = dirmy
   /* 让第一个指针走到 n + 1位置  */
   for(let i=0;i<n+1;i++){
       first = first.next
   }
   while(first !== null){
       first = first.next
       last = last.next
   }
   last.next = last.next.next
   return dirmy.next
};