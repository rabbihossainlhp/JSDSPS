//write a function to add two numbers.......
function addTwo(param1,param2){
    return param1+param2;
};


//write a function to add total numbers from paramitter,,,,,
function addTotal (...params){
    let total = 0;
    params.forEach(el=>{
        total+=el;
    });

    return total;
};




//test them.....

console.log(addTotal(1,2,3,4,4))
console.log(addTwo(3,2))
