//Date-->19-03-2026

//custom listNode
function ListNode(val,next=null){
    this.val = val;
    this.next = next;
};


function arrayToList(arr){
    let dummy = new ListNode(0);
    let cur = dummy;

    for(let n of arr){
        cur.next = new ListNode(n);
        cur = cur.next;
    }

    return dummy.next;
}








let l1 = arrayToList([1,2,4]);
let l2 = arrayToList([1,2,3])

console.log(mergeTwoLists(l1,l2))