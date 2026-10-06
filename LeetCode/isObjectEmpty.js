//2727 is object empty


var isEmpty = function(obj) {
    if(Object.keys(obj).length > 0 || obj.length >0){
        return false;
    }
    return true
};


const obj = {"K":2}

console.log(isEmpty(obj))