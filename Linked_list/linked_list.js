// // We'l learn "Linked List" here......


// //so let's create our first node....
// class node {
//     constructor(value){
//         this.head = value;
//         this.next = null;
//     }
// }


// class linkedList {
//     constructor(value) {
//         this.head = new node(value);
//         this.tail = this.head;
//         this.length = 1;
//     }

//     //first challenge which is push method in this unknown DS....
//     push ( value ) {
//         const new_node = new node( value );

//         if(!this.head){
//             this.head = new_node;
//             this.tail = new_node;
//         }

//         this.tail.next = new_node;
//         this.tail = new_node;
//         this.length ++;
//     }


//     //another method is pop()
//     pop(){
//         let temp = this.head;
//         let prev = this.head;

//         if(!this.head){
//             return undefined;
//         }

//         while(temp.next){
//             prev = temp;
//             temp = prev.next;
//         }

//         this.tail = prev;
//         this.tail.next = null;
//         this.length --;


//         if(this.length===0){
//             this.head = null;
//             this.tail = null;
//         }

//         return temp;
//     }


// }






// const testLinkedList = new linkedList(2);
// testLinkedList.push(23);
// testLinkedList.push(34);
// testLinkedList.push(3);
// const rmvnode = testLinkedList.pop()
// console.log(rmvnode)
// console.log(testLinkedList)




//after a long time later I'm gonna start again the practice of this,,, though my exam is knocking me... haha ,,,,,,>>>


//first need to create a node mainly....
class node {
    constructor(value){
        this.head = value;
        this.next = null;
    }
}




//okey now time to create first custom linkedlist...

class customLinkedList {
    constructor(value){
        this.head = new node(value);
        this.tail = this.head;
        this.length = 1;
    }



    //push method...

    push(value){
        let newNode = new node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

    
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
    }

    pop(){

        if(!this.head){
            return undefined;
        }


        let temporary = this.head;
        let previous = this.head;

        while(temporary.next){
            previous = temporary;
            temporary = previous.next;
        }

        this.tail = previous;
        this.tail.next = null;
        this.length --;


        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

    }



    //unshift method...
    unshift(value){
        let newNode = new node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
    }


    //shift method.....
    shift(){
        if(!this.head){
            return undefined
        }

        let temp = this.head;

        this.head = this.head.next;
        temp.next = null;
        this.length --;

        if(this.length === 0){
            this.tail = null;
        }
    }
}


const clgLinkedList = new customLinkedList(1);
console.log(clgLinkedList);

clgLinkedList.push(2);
clgLinkedList.push(32);
clgLinkedList.push(24);
clgLinkedList.pop()
clgLinkedList.pop()
// clgLinkedList.pop()
// clgLinkedList.pop()
// clgLinkedList.pop()

console.log(clgLinkedList)

clgLinkedList.unshift(0);
clgLinkedList.unshift(11);
clgLinkedList.unshift(121);
console.log(clgLinkedList)


clgLinkedList.shift();
clgLinkedList.shift();
clgLinkedList.shift();



console.log(clgLinkedList)