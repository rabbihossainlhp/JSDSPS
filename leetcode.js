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

// const array = [1,2,6,7,8,4];

// const TwoSum = (nums,target)=>{

   

//     // let result = [];
//     // let first = 0; let second = 1;
//     // for (let i = 0; i< nums.length; i++){
//     //     if(nums[first] + nums[second] === target){
   
//     //         result.push(nums.indexOf(nums[first]));
//     //         result.push(nums.indexOf(nums[second]));
//     //         return result;
//     //     }else{
//     //         first ++;
//     //         second ++;
//     //     }
//     // }
// }

// TwoSum(array,10)
// console.log(TwoSum(array,7))