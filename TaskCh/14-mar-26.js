// recursion in array....
function findMax(arr, index = 0){
    // if(index===arr.length) return 0;
    if(index === arr.length-1) return arr[index];
    return Math.max(arr[index],findMax(arr,index+1));
}


console.log(findMax([1,2,3,4,2,1,7]))