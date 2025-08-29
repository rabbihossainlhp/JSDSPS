
// Day-1 JSDS_______________________________________________________

//TODO FindOut prime number via function 
// const getPrime = (number)=>{
//     for (let i = 2; i<=number; i++){
//         let prime=true;
//         for(let j = 2; j<= Math.sqrt(i); j++){
//             if( i%j === 0 ){
//                 prime=false;
//                 break;
//             }
//         }
//         prime? console.log(i):null;
//     }
// }

// getPrime(5045);

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

//TODO Sum of digits in a number
// const sumOfDigits = (num)=>{
//     let sum = 0;
//     for( let i = 1; i<=num; i++){
//         sum += i;
//     }console.log(sum);
// }

// sumOfDigits(1545455);

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

//TODO GET Factorial of a number with funciton

// const Factorial = (n)=>{
//     let fact = 1;
//     if(n<0 ){
//         console.log("Factorial not possible");
//         return;
//     }
//     for(let i = n; i>=1; i--){
//         fact *= i;
//     }console.log(fact);
// }

// Factorial(20);

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

// //TODO Find Maximum number in an array    

// const findMaxOf_array = [12,34,56,78,90,11,203,45,67,89];

// const MaxArray = (array)=>{
//     let max = array[0];
//     for(let i = 0; i<array.length; i++){
//         if(array[i]>max){
//             max = array[i];
//         }
//     }
//     return max;
// }

// console.log(MaxArray(findMaxOf_array));

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

// //TODO Find Minimum  number in an array    

// const findMinOf_array = [12,34,56,8,9,11,203,45,67,89];

// const MinArray = (array)=>{
//     let min = array[0];
//     for(let i = 0; i<array.length; i++){
//         if(array[i]<min){
//             min = array[i];
//         }
//     }
//     return min;
// }

// console.log(MinArray(findMinOf_array));

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

// //TODO Print array in reverse

// const arr = [12,34,56,8,9,11,203,45,67,89];

// const reverseArray= (array)=>{
//     for(let i = array.length-1; i>=0; i--){
//         console.log(array[i]);
//     }
// }

// reverseArray(arr); 

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

// //TODO Search an element in an array (linear search and binary search)

// const searching_array_linner = (array, target)=>{
//     for (let i of array){
//         if (i=== target){
//             return i;
//         }
//     }
// }

// const test_array = [12,34,56,78,90,11,203,45,67,89];
// console.log(searching_array_linner(test_array,78));

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

// //TODO Binary Search (only works on sorted array)

// const searching_array_binary = (array, target)=>{
//     let left = 0;
//     let right = array.length -1;

//     while(left <= right){
//         let middle = Math.floor((left+right)/2);

//         if(array[middle] === target){
//             return middle;
//         }else if(array[middle] < target){
//             left = middle+1;
//         }else{
//             right = middle -1;
//         }
//     }
// }

// const test_array2 = [12,34,56,78,90,203,445,819];
// console.log(searching_array_binary(test_array2,445));


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

// //TODO Frequency Count 

// let array = [1,2,3,4,5,6,7,8,9,10,2,5,4,6,7,1,3,2];

// const frequencyCount = (array)=>{
//     let freq = {};
//     for (let elem of array){
//         freq[elem] = (freq[elem] || 0) + 1;
//     }
//     return freq;
// }

// console.log(frequencyCount(array))   

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

// //TODO Remove duplicate element

// const array = [1,2,3,4,5,6,7,8,9,10,2,5,4,6,7,1,3,2];

// const Remove_Duplicate = (arr)=>{
//     let newarray = [];
//     for(let elm of arr){
//         if(!newarray.includes(elm)){
//             newarray.push(elm)
//         }
//     }
//     return newarray;
// }

// console.log(Remove_Duplicate(array))