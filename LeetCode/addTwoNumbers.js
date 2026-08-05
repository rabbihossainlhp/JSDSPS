function ListNode(val,next){
    this.val = val? val:null;
    this.next = next? next: null;
}


var addTwoNumbers = function(l1, l2) {
    console.log(l1,l2)
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;


    while(l1 !== null || l2 !== null || carry >0){
        let val1 = l1 ? l1:0;
        let val2 = l2 ? l2:0;

        let sum = val1+val2+carry;
        let digit = sum % 10;
        carry = Math.floor(sum/10);

        current.next = new ListNode(digit);
        current = current.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }


    return dummy.next;
}


console.log(addTwoNumbers([2,4,3],[5,6,4]))  //this is an unsolved problem

