// // Day-1 JSDS (leetcode)

// //TODO Problem 1; add digits
// var addDigits = function(num) {
//     while(num>=10){
//         let sum = 0;
//         let seperateNumString = num.toString().split("");
//         for(let i = 0; i < seperateNumString.length; i++){
//             sum += parseInt(seperateNumString[i]);
//         }
//         num = sum;
//     } return num;
// }

// addDigits(44)
// console.log(addDigits(38));
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
**/ 
// //TODO Problem-2; Number Complement

// let NumberComplement = (number)=>{
//     let result;
//     if(number === 0) {
//         result = 0;
//         return result;
//     }
//     let complement = [];
//     let binaryNumber = number.toString(2).split("");
//     for(let BN of binaryNumber){
//         if(BN === "0"){
//             complement.push("1");
//         }else if(BN === "1"){
//             complement.push("0");
//         }
//     }
//     result = parseInt( complement.join(""), 2);
//     return result;

    
// }

// console.log(NumberComplement(0));

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
**/ 
//TODO Problem-3; Running Sum of 1d Array   
// let RunningSum = function(array){
//     let sum = 0;
//     let result = [];
//     for (let i = 0; i<array.length; i++){
//         sum += array[i];
//         result.push(sum);
//     }
//     return result;
// } 

// const arr = [1,2,3,4];
// console.log(RunningSum(arr));

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
**/ 
//TODO Problem-4; Richest Coustomer Welth     
// const RichestCoustomerWelth = function(accounts) {
//     let result = 0;
//     for (let account of accounts){
//         let sum = 0;
//         for(let i = 0; i<account.length; i++){
//             sum += account[i];
//         }
//         if (result <= sum ){
//             result = sum;
//         }
//     }  
//     return result;
// }

// let arr = [[1,2,43,4],[4,5,6,5]];

// console.log(RichestCoustomerWelth(arr));

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * console.log(test_array.shift())

 * 
 * 
**/ 
//TODO Problem-5; Finding the Maximum Frequency in an array 

let exarray = [1,2,3,4,5,4,2,1,6,7,7,7];
let exarray2 = [1,2,3,4,5,6,7];

// function Maximum_Frequency(arr){
//     let freq = {};
//     let sum = 0;
//     let max = 0;

//     for(let element of arr){
//         freq[element] = (freq[element] || 0) +1;
//     }

//     for(key in freq){
//         if(freq[key] > max){
//             max = freq[key];
//         }
//     }

//     for(let key in freq){
//         if(freq[key]===max){
//             sum += freq[key];
//         }
//     }
//     return sum ;
    
// }

// console.log(Maximum_Frequency(exarray));
// console.log(Maximum_Frequency(exarray2));

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
**/ 
//TODO Problem-6; Remove duplicates from sorted array...

// const array = [0,1,1,2,3,3,4,5,6,6,6,7,8,9,9,10];

// const removeDuplicateElement =  (nums)=>{
//     if(nums.length === 0) return 0;
//     let k = 1;
//     for(let i=1; i<nums.length; i++){
//         if(nums[i] !== nums[i-1]){
//             nums[k] = nums[i];
//             k++
//         }
//     }return k;
// }
    
// console.log(removeDuplicateElement(array));

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
**/ 
//TODO Problem-7; Find The Difference

let s = "";
let ss = "fsfsyt";

var findDifference = function (s,t){
    let start = 0;
    let res = "";
    for(let i = 0; i<t.length; i++){
        if(s[start] !== t[i]){
            res += t[i];
        }
        start++;
    }
    return res;
}

console.log(findDifference(s,ss))




/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
**/ 
//TODO Problem-7; Two Sum

///One more common popular problem of array which is Two sum.....
const twoSum = (nums,target) => {
    for( let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            const checking = nums[i]+nums[j];
            if(checking === target){ 
                return [i,j];
            }
        }
    }
}
console.log(twoSum([1,2,3,4,3,4,5,6,7],9))












//now time to solve a leetcode problem date---> 05.02.2026
// I direct copy the problem's boilerplate from leetcode and that is ...

var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};


/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);

    if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length -1]){
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let removedItem = this.stack.pop();

    if(removedItem === this.minStack[this.minStack.length -1]){
        this.minStack.pop();
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length -1]
};



//  * Your MinStack object will be instantiated and called as such:
var obj = new MinStack()
obj.push(2)
obj.push(3)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()

// console.log(obj)
// console.log(param_4)








//isValidParentheses challenge.....leetcode-20 & date---> 06-02-2026

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketsPairs = {
        "(":")",
        "{":"}",
        "[":"]"
    }


    for(let char of s){
        if(char in bracketsPairs){
            stack.push(char);
        }
        else{
            if(stack.length === 0){
                return false
            }

            let top = stack.pop();

            if(bracketsPairs[top]  !== char){
                return false
            }
        }
    }
    
    return stack.length === 0;
};


console.log(isValid("())"))