//2666 Allow one function call...


var once = function(fn) {
    let isCalledFn = false;
    return function(...args){
        if(isCalledFn){return undefined}
        let result = fn(...args);
        isCalledFn = true;
        return result;
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1,2,6));
console.log(onceFn(1,2,4))



//wow it was too easy ...