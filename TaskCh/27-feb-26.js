//Challenge with HashTable concept....
function removeDuplicates(arr) {
    let storeResult = {}
    for(let i=0; i<arr.length; i++){
        if(!storeResult.hasOwnProperty(arr[i].toString())){
            storeResult[arr[i]] = arr[i];
        }
    }
    return Object.values(storeResult);
}


console.log(removeDuplicates([4,3,5,5,2,1,3]))