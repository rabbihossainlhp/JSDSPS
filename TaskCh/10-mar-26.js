//10 march 2026 
//new day's challenge with again map concept....

function containsDuplicate(arr){
    const map = new Map();
    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i])){
            return true;
        }else{
            map.set(arr[i],true);
        }
    }
    return false;
}


console.log((containsDuplicate([1,1,4,5,6,7])))