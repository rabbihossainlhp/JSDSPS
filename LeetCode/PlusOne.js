//66--> Plus one....leetcode....

var plusOne = function(digits) {
    let addedOne =  BigInt(digits.join('') )+ 1n;
    return String(addedOne).split('').map(Number)
};

console.log(plusOne([1,2,3]))