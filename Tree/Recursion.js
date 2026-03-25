function countDown (number){
    if(number === 0) return;
    console.log(number);
    countDown(number -1);
};

countDown(5)




//factorial...
function factorial (num){
    if(num ===0) return 1;

    return num* factorial(num-1)
}

console.log(factorial(4))