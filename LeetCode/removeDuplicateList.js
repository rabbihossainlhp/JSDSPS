// import { arrayToList, ListNode } from "./mergeTwoList.js";
const {arrayToList} = require('./mergeTwoList');

var deleteDuplicates = function(head) {
    let current = head;

    while(current && current.next){
        if(current.val=== current.next.val){
            current.next = current.next.next;
        }
        else{
            current = current.next;
        }
    }

    return head;
};


const l1 = arrayToList([1,1,2,3,3])

console.log(deleteDuplicates(l1));