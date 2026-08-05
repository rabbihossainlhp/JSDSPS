//check palindrom integer number...
//9.Palindrom number.....
var isPalindrome = function(x) {
    let reverse = x.toString().split('').reverse().join('');
    return parseInt(reverse) === x? true: false;
};


console.log(isPalindrome(212))