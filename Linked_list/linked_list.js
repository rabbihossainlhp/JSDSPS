// We'l learn "Linked List" here......


//so let's create our first node....
class node {
    constructor(value){
        this.head = value;
        this.next = null;
    }
}


class linkedList {
    constructor(value) {
        this.head = new node(value);
        this.tail = this.head;
        this.length = 1;
    }

    //first challenge which is push method in this unknown DS....
    push ( value ) {
        const new_node = new node( value );

        if(!this.head){
            this.head = new_node;
            this.tail = new_node;
        }

        this.tail.next = new_node;
        this.tail = new_node;
        this.length ++;
    }


    //another method is pop()
    pop(){
        let temp = this.head;
        let prev = this.head;

        if(!this.head){
            return undefined;
        }

        while(temp.next){
            prev = temp;
            temp = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length --;


        if(this.length===0){
            this.head = null;
            this.tail = null;
        }

        return temp;
    }
}






const testLinkedList = new linkedList(2);
testLinkedList.push(23);
testLinkedList.push(34);
testLinkedList.push(3);
const rmvnode = testLinkedList.pop()
console.log(rmvnode)
console.log(testLinkedList)