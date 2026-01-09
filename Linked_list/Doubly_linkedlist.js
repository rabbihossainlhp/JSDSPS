//Here I'll practice about "Doubly-Linkedlist"....\


//create custom node first like single-linkedlist....
class Node {
    constructor(value){
        this.value = value;
        this.next = null; 
        this.prev = null;
    }
}





class doubly_linkedlist {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }


    //PUSH method.....
    push(value){
        let newNode = new Node(value);


        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
    }
}





let test_doubleList = new doubly_linkedlist(1);
test_doubleList.push(3)

console.log(test_doubleList)