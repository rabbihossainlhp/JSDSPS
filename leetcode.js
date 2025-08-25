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
//TODO Problem-2; Number Complement

let NumberComplement = (number)=>{
    let result;
    if(number === 0) {
        result = 0;
        return result;
    }
    let complement = [];
    let binaryNumber = number.toString(2).split("");
    for(let BN of binaryNumber){
        if(BN === "0"){
            complement.push("1");
        }else if(BN === "1"){
            complement.push("0");
        }
    }
    result = parseInt( complement.join(""), 2);
    return result;

    
}

console.log(NumberComplement(0));