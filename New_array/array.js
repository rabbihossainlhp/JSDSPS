// const string_array = ['a','b','c','d'];
// const bollean_array = [true,false];
// const integer_array = [1,2,3,4,5];
// const mixed_array = ['a','b',2,4,{a:'a'},['re']];

// console.log(mixed_array)




//let's try to create our custom/own array....
class newarray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    //this is custom push method we're creating....
    push(items){
        this.data[this.length] = items;
        this.length++;
        return this.length;
    }

    //this is the get method...
    get(index){
        return this.data[index] ;
    }

    //okey! now time to create another one which will be pop method();
    pop(){
        const result =  delete this.data[this.length-1];
        this.length--;
        return result;
        
    }


    //Shift method of an array..
    shift(){
        let firstItem = this.data[0];

        for(let i=0; i<this.length; i++){
            this.data[i]=this.data[i+1];
        }

        delete this.data[this.length-1];
        this.length --;
        return firstItem;
    }


    //delete method by array's index...
    delete(idx){
        let item = this.data[idx];

        for(let i=idx; i<this.length -1; i++){
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length -1];
        this.length --;
        return item;
    }
}


const test_array = new newarray();






test_array.push("hellow");
test_array.push("Nice");
test_array.push(true);



// console.log(test_array.get(1));
// console.log(test_array);
// // test_array.pop();
// // test_array.pop();
// // test_array.pop();
// console.log(test_array);

// console.log(test_array.shift());
console.log(test_array);

// // console.log(test_array.delete(0));


test_array.shift();

// console.log(test_array.shift())
console.log(test_array);




//let's solve few challange.......
//Reverse String.....

const firstString = "hellow world";

const revString = (string)=>{
    // let revArray = string.split("");
    // let revStr = ''
    // for(let i = revArray.length-1; i >= 0; i--){
    //     revStr+=revArray[i];
    // }
    // return revStr;

    //alternatively we can use more simple way to slove it

    const revrsString = string.split('').reverse().join('');
    return revrsString;

}

console.log(revString('hello'));



//another challange was reverse an Integer.....

const revInt = (int)=>{
    const int_as_string = int.toString().split('').reverse().join('');
    return parseInt(int_as_string);
}

console.log(revInt(-123));



///another one is sentence capitalization......\
const makeCapitalize = (sentence)=>{
    const Capitalize = sentence.split(' ').map(item =>{
        return item.charAt(0).toUpperCase() + item.slice(1);
    }).join(' ');
    
    return Capitalize;
    
}

console.log(makeCapitalize("hello world"));
console.log(makeCapitalize("naya naya learning"));




//okey now we'll try more interesting and common one which is "FizzBuzz"

const fizzBuzz = ( number ) => {
    for ( let i = 1; i <= number; i++ ) {
        if ( i % 3 === 0 && i % 5 === 0 ){
            console.log("FizzBuzz");
        }else if( i % 5 === 0) {
            console.log("Buzz");
        }else if( i % 3 === 0 ) {
            console.log("Fizz");
        }else {
            console.log(i);
        }
    }
}


fizzBuzz(15)





//here another hard challenge....
//which is basically I can take array and a chunck size as input then I have to split that array based on that size...

const chunckBasedArray = (arr,cSize) => {
    const newChunkArray = [];
    for(let i = 0; i<arr.length; i+=cSize){
        const chunckArray = arr.slice(i, i+cSize);
        newChunkArray.push(chunckArray);

    }
    return newChunkArray;
}


console.log(chunckBasedArray([2,3,5,4,3,2,4,3,2,2], 3))