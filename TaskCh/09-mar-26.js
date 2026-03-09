//today's challeng is about 'tow pointers'......
function twoSumSorted(arr, target){
    let left = 0;
    let right = arr.length -1;

    while(left<right){
        let sum = arr[left]+arr[right];

        if(sum === target){
            return [arr[left],arr[right]];
        }

        else if(sum>target){
            right--;
        }else{
            left++
        }
    }
}


console.log(twoSumSorted([2, 3, 11, 7], 10))






//Reverse arry using tow pointer logic...
function reverseArray(arr){
    let left = 0;
    let right = arr.length-1;
    let temp = 0;

    while(left<right){
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr;
}


console.log(reverseArray([26,7,8]))






//isPlaindrom with current logic...
function isPalindrome(str){
    let left = 0;
    let right = str.length-1;

    

    while(left<right){
        if(str[left] !== str[right]){
            return false;
        }

        left ++;
        right --;
    }

    return true;
}




console.log(isPalindrome('gulu'))
