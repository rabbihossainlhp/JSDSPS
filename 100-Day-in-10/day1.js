//Element Replace,,,,,,
function replaceElement(arr,elementToReplace,substractionElement){
    arr.forEach((element,idx) => {
        element === elementToReplace ? arr[idx] = substractionElement: arr[idx] = element
    });

    return arr;
}


console.log(replaceElement([1,2,1],1,3))