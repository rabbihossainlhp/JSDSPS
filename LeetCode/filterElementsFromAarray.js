//2634. Filter Elements from Array

var filter = function(arr, fn) {
    let filterdArr = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i],i)){
            filterdArr.push(arr[i])
        }
    }
    return filterdArr;
};



const arr = [0,10,20,30];

console.log(filter(arr,fn))



function fn(n,i){
    return n+1
}