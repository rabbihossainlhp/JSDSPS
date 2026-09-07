//2626 --> array reduce transformation.

var reduce = function(nums, fn, init) {
    if(nums.length === 0) return init;

    let res = init;

    for(let i=0; i<nums.length; i++){
        res = fn(res,nums[i])
    }

    return res;
};




//lets test it
let exNum = [1,2,3,4];
const exReducer = (acc,curr)=>{
    return acc+curr*curr;
}

console.log(reduce(exNum,exReducer,100))