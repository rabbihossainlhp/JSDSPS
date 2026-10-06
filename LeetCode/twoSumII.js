///One more common popular problem of array which is Two sum.....
// const twoSum = (nums,target) => {
//     for( let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             const checking = nums[i]+nums[j];
//             if(checking === target){ 
//                 return [i+1,j+1];
//             }
//         }
//     }
// }
// console.log(twoSum([2,7,11,15],9)) 

/////First I was applied this solution and this was not working during submission though looking acceptable cause its seems like test case will pass perfectly
//lets apply two pointer pattern....
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length -1;
    let res = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[left]+numbers[right]> target){
            right --;
        }
        if(numbers[left]+numbers[right]< target){
            left++
        }

        if(numbers[left]+numbers[right] === target){
            res.push(left+1,right+1)
            break
        }
    }
    return res;
};

console.log(twoSum([2,7,11,15],26)) 
