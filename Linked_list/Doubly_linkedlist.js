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


    //POP method....
    pop(){
        if(!this.head){
            return undefined;
        }else if(this.length === 1){
            this.head = null;
            this.tail = null;
        }

        let temp = this.tail; //it was "this.head" when using a loop.
        // let prev = this.head;

        // while(temp.next){
        //     prev = temp;
        //     temp = prev.next;
        // } //we can easily do this without any loop cause this is a dobly linkedlist.....


        
        this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;

        this.length --;

        return temp;

    }


    //UNSHIFT method.....
    unshift(value){
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length ++;

        return this;
    }


    //now time to implement SHIFT method.... similar with single linkedlist.....
    shift(){
        if(!this.head){
            return undefined;
        }

        
        this.head = this.head.next;
        this.head.prev = null;
        this.length --;

        if(this.length === 1){
            this.tail = null;
            this.head = null;
        }

        return ;
    }



    //now time to implement reverse mechanism......
    normalReverse (){
        let temp = this.head;

        if(!this.head){
            return undefined;
        }

        this.head = this.tail;
        this.tail = temp;

        let next = temp;
        let prev = null;

        for(let i = 0; i<this.length; i++){
            next = temp.next;

            temp.next = prev;
            temp.prev = next;
            
            prev = temp;
            temp = next;
        }

        return ;
    }
}





let test_doubleList = new doubly_linkedlist(1);
test_doubleList.push(3);
test_doubleList.push(4);
// test_doubleList.push(5);

//normal log for printing the list.....
console.log(test_doubleList)

// //log for pop method.
// test_doubleList.pop();
// console.log(test_doubleList)

// //log for unshift method.
// test_doubleList.unshift(4);
// console.log(test_doubleList)


// //log for shift method.
// test_doubleList.shift();
// console.log(test_doubleList)

//checking normalReverse...
test_doubleList.normalReverse()
console.log(test_doubleList)
