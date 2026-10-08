//11. Container with most water...

var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;

    while (left <= right) {
        if (height[right] < height[right - 1]) {
            right = right - 1;
        }
        right--;

        if (height[left] < height[left + 1] && height[left] <= right) {
            left = left + 1;
        }
        left++;

        let w = height[right] - height[left];
        let h = Math.min(height[left], height[right]);    
        result = w * h;


    }



    console.log(result)
    return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))