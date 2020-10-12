/**
 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。


示例：

输入：{"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":{"$id":"6","left":null,"next":null,"right":null,"val":6},"next":null,"right":{"$id":"7","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}
输出：{"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":{"$id":"6","left":null,"next":null,"right":null,"val":7},"right":null,"val":6},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"7","left":{"$ref":"5"},"next":null,"right":{"$ref":"6"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"7"},"val":1}

解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。

提示：
你只能使用常量级额外空间。
使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。

 */

 /**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */


function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };
    var length = 0;
    var head = null;

    this.append = function (element) {
        var node = new Node(element);　　　　　　　　//构造新的元素节点
        var current;
        if (head === null) {　　　　　　　　　　　　　//头节点为空时  当前结点作为头节点
            head = node;
        } else {
            current = head;
            while (current.next) {　　　　　　　　　　//遍历，直到节点的next为null时停止循环，当前节点为尾节点
                current = current.next;
            }
            current.next = node;　　　　　　　　　　　　//将尾节点指向新的元素，新元素作为尾节点
        }
        length++;　　　　　　　　　　　　　　　　　　　　//更新链表长度
    };
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            var current = head;
            var index = 0;
            var previous;
            if (position == 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.insert = function (position, element) {
        if (position > -1 && position <= length) {　　　　　　　　//校验边界
            var node = new Node(element);
            const current = head;
            var index = 0;
            var previous;
            if (position == 0) {　　　　　　　　　　　　　　　　　　　　//作为头节点，将新节点的next指向原有的头节点。
                node.next = current;
                head = node;　　　　　　　　　　　　　　　　　　　　　　　　//新节点赋值给头节点
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//遍历结束得到当前position所在的current节点，和上一个节点
                previous.next = node;　　　　　　　　　　　　　　　　　　　　//上一个节点的next指向新节点  新节点指向当前结点，可以参照上图来看
                node.next = current;
            }
            length++;
            return true;
        } else {
            return false;
        }

    };
    this.toString = function () {
        var current = head;
        var string = '';
        while (current) {
            string += ',' + current.element;
            current = current.next;
        }
        return string;
    };
    this.indexOf = function (element) {
        var current = head;
        var index = -1;
        while (current) {
            if (element === current.element) {　　　　　　　　　　　　//从头节点开始遍历
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.getLength = function () {
        return length;
    }
    this.getHead = function () {
        return head
    }
}

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root){
        return root
    }
    const queueList = new LinkedList()
    queueList.append(root)
    while(queueList.getLength() > 0){
        const length = queueList.getLength()
        for(let i =0;i<length ;i++ ){
            const curNode = queueList.removeAt(0)
            if(i < length -1){
                curNode.next = queueList.getHead()
            }
            if(curNode.left){
               queueList.append(curNode.left)
            }
            if(curNode.right){
                queueList.append(curNode.right)
            }
        }
    }
    return root
};