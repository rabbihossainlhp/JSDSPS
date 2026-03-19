//Date-->19-03-2026

//custom listNode
function ListNode(val,next=null){
    this.val = val;
    this.next = next;
};





var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let tail = dummy;

    while(list1 !==null && list2 !==null){
        if(list1.val <= list2.val){
            tail.next = list1;
            list1 = list1.next;
        }else{
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    tail.next = list1 !==null ? list1:list2;


    return dummy.next;
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



export  {ListNode,arrayToList};