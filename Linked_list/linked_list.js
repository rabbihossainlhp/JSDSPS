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


    //get the first element/item of this linkedlist.....
    getFisrtElement(){
        if(!this.head){
            return undefined;
        }

        return this.head;
    }

    getLastElement(){
        if(!this.head){
            return undefined;
        }

        let temp = this.head;
        while(temp){
            if(!temp.next){
                return temp
            }
            temp = temp.next;
        }

        return temp;
    }


    //now this willbe little bit complicated to get element by index....
    getElementByIndex(idx){
        if(!this.head){
            return undefined;
        }

        let result = this.head;

        for(let i = 0; i < idx; i++){
            result = result.next;
        }

        return result;
    }



    //now I'll try to a "set" method which will update the item based on index basically.....
    set(idx,val){
        if(!this.head || idx<0 || idx === null ){
            return undefined;
        }

        let point = this.head;

        for(let i = 0; i<idx; i++){
            point = point.next;
        }

        point.head = val;

        return point;



        // let temp = this.getElementByIndex(idx);
        // if(temp){
        //     temp.head = val;
        // }

        // return temp
    }


    //okey !! another challenge is here which is "insert " method.....
    insert(idx, val){
        if(idx < 0 || idx === null || idx > this.length){
            return undefined;
        }

        let point = this.head;

        if(idx === 0){
            let new_node = new node(val);
            new_node.next = this.head;
            this.head = new_node;
            this.length ++;
            return this.head;
        }
        else if(idx === this.length){
            this.push(val)
            return;
        }

        //for middle inserting....
        for(let i = 0; i < idx-1; i++){
            point = point.next;
        }

        let new_node = new node(val);
        new_node.next = point.next;
        point.next = new_node;
        this.length ++;
        return new_node;
    }

}







const clgLinkedList = new customLinkedList(1);
// console.log(clgLinkedList);

clgLinkedList.push(2);
clgLinkedList.push(32);
clgLinkedList.push(24);
// clgLinkedList.pop()
// clgLinkedList.pop()
// // clgLinkedList.pop()
// // clgLinkedList.pop()
// // clgLinkedList.pop()

// // console.log(clgLinkedList)

// clgLinkedList.unshift(0);
// clgLinkedList.unshift(11);
// clgLinkedList.unshift(121);
// clgLinkedList.unshift(90);

// // console.log(clgLinkedList)


// // clgLinkedList.shift();
// clgLinkedList.shift();
// clgLinkedList.push(3)
// clgLinkedList.push(44)



// console.log(clgLinkedList)
// console.log(clgLinkedList.getFisrtElement())
// console.log(clgLinkedList.getLastElement())
// console.log(clgLinkedList.getElementByIndex(1))

// console.log(clgLinkedList.set(0,60));
console.log(clgLinkedList)

clgLinkedList.insert(4,1000);
clgLinkedList.insert(5,"hello");
clgLinkedList.insert(6,"do");







console.log(clgLinkedList)

// console.log(clgLinkedList.getElementByIndex(2))