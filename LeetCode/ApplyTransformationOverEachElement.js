//2635 apply transformation over each element in array

var map = function(arr, fn) {
    const newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(fn(arr[i],i));
    }
    return newArr;
};


console.log(map([1,2,3],plusOne));



function plusOne(n,i){
    return n+i;
}

