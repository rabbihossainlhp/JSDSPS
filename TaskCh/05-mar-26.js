//Today I go few complex challenge which about sliding window....

function maxSubarraySum(arr, k){
    let result = 0;
    for(let i=0; i<=arr.length -k; i++){
        const calculate = arr.slice(i,i+k).reduce((acc,curValue)=>{
            return acc+curValue;
        },0)

        if(calculate >= result){
            result = calculate;
        }
    }

    return result;
}



console.log(maxSubarraySum([2,1,5,1,3,2], 3))








//another one from real-job scenario but the same concept....
function maxTraffic(visits, windowSize){
    let sum = 0;
    for(let i=0; i<=visits.length -windowSize; i++){
        const cal = visits.slice(i, i+windowSize).reduce((acc,curVal)=>{
            return acc+curVal;
        })

        if(cal>=sum){
            sum=cal;
        }
    }

    return sum;
}



console.log(maxTraffic([10, 20, 30, 25, 15, 40, 50],3))






//Better solution of first prblem...

function maxSubarraySum(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum + arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}