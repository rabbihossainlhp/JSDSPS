//Date 31-mar-2026----> 
//LeetCode....>
//Search Insert Position...>



var searchInsert = function(nums, target) {
    let res = 0;
    for(let i of nums){
        if(target>i){
            res = nums.indexOf(i)+1;
        }
    }
    return res;
};



console.log(searchInsert([1,3,5,6],7))