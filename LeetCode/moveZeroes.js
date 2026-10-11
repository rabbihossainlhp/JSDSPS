//283: Move zeroes-----.

var moveZeroes = function(nums){
    let fast = 0;
    let slow = 0;

    while(fast<nums.length){
        if(nums[fast] !== 0){
            nums[slow] = nums[fast];
            slow++
        }
        fast++
    }
    while(slow < nums.length){
        nums[slow] = 0;
        slow++;
    }

    return nums;
}



console.log(moveZeroes([1,2,0,3,43,0,21]))