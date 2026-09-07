//2665 Counter II...

var createCounter = function(init) {
    let initialVal = init; 
    let currentCount=init;
    return{
        increment(){
            return ++currentCount;
        },

        reset(){
            currentCount = initialVal
            return currentCount;
        },

        decrement(){
            return --currentCount;
        }
    }
};





// const counter = createCounter(5)
// console.log(counter.increment()) //6
// console.log(counter.reset()) //5
// console.log(counter.decrement()) //4



const counter = createCounter(0);
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
console.log(counter.reset()); // 0