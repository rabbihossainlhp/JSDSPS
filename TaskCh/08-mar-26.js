//today again I got maxSubarraySum(arr, k) this problem....

function maxSubarraySum(arr, k){
    let windowSum = 0;
    let maximumSum = 0;


    for(let i=0; i<k; i++){
        windowSum += arr[i];
    }

    maximumSum = windowSum;

    for(let i=k; i<arr.length; i++){
        windowSum = windowSum + arr[i] - arr[i-k];
        maximumSum = Math.max(maximumSum, windowSum);
    }

    return maximumSum;
}



console.log(maxSubarraySum([2,1,5,1,3,2], 3));







//now let's solve a real problem....

const maxTraffic = (visitor, target)=>{
    let windowSum = 0;
    let maximumSum = 0;

    for(let i=0; i<target; i++){
        windowSum += visitor[i];
    }

    maximumSum = windowSum;

    for(let i=target; i<visitor.length; i++){
        windowSum = windowSum + visitor[i] - visitor[i-target];
        maximumSum = Math.max(windowSum,maximumSum);
    }
    return maximumSum;
}


console.log(maxTraffic([100,121,124,1232,123,123,332,343],3))