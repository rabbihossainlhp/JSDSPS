//Now time to try the "QUEUE" data structure.....
//first create a coustom node hrere.....
class  Node {
    constructor(value){
        this.value = value;
        this.right = null;
    }
}


//now have to create a custom "queue" with the class....
class NewQueue {
    constructor(value){
        let newItem = new Node(value);
        this.first = newItem;
        this.last = newItem;
        this.length = 1;
    }

    //now "Enqueuing"
    enqueue(value){
        let newItemNode = new Node(value);

        this.last.right = newItemNode;
        this.last = newItemNode;
        this.length ++;

        return newItemNode;
    }



    dequeue(){
        let temp = this.first;
        if(this.length === 0){
            return undefined;
        }
        if(this.length === 1){
            this.first = null;
            this.last = null;
            this.length = 0;
        }

        this.first = this.first.right;
        temp.right = null;
        this.length --;

        return this;



    }
}






//printout the initial queue for testing...
const testQueue = new NewQueue(0);
console.log(testQueue)

//test Enqueue method...
testQueue.enqueue(2);
testQueue.enqueue(3)
testQueue.enqueue(4);
console.log(testQueue)
testQueue.dequeue();
console.log(testQueue)