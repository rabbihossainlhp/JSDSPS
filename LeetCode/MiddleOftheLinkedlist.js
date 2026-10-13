//876 Middle of the linked list...

 function ListNode(val) {
    this.val = val;
    this.next = null;
 }


const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
const node6 = new ListNode(6);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;




var middleNode = function(head) {
    let fast = head;
    let slow = head;


    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;

    }
    return slow;
};


console.log(middleNode(node1))