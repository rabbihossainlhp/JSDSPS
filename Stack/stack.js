//Learn all about stack with challenge, method, mechanism etc from here......
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}



class CoustomStack {
    constructor(value){
        let newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }
    //first push method of the stack
    push(value){
        let newNode = new Node(value);

        if(this.length === 0){
            this.top = newNode;
        }

        newNode.next = this.top;
        this.top = newNode;
        this.length ++;

        return this;
    }


    //pop method of  this stack....
    pop(){
        let temp = this.top;

        if(this.length === 0 ){
            return undefined;
        }
        else if(this.top === null){
            this.top = null;
            this.length = 0;

            
        }

        this.top = temp.next;
        temp.next = null;

        this.length --;

        return temp;
    }
}




//lets print the stack....
const newStack = new CoustomStack(1)

//check the push method...
newStack.push(2);
newStack.push(3);

console.log(newStack)

//check pop method....
newStack.pop();
newStack.pop();
newStack.pop();
console.log(newStack);