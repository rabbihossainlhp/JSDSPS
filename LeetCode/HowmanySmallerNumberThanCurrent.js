//1365---> Ho many Nummbers are smaller than the current number....


var smallerNumberThanCurrent = function(nums){
    let counter = 0;
    let result  = [];
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(nums[j]<nums[i] && j!==i){
                counter +=1;
            }
        }
        result[i] = counter;
        counter = 0;
    }

    return result;
}





console.log(smallerNumberThanCurrent([7,7,7,7]))