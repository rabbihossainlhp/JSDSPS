//125 ... Valid Palindrome


var isPalindrome = function(s) {
    let shape = "";

    let result = s.toLowerCase().split("");
    for(let i=0; i<result.length; i++){
        const code = result[i].charCodeAt(0);

        if((code >= 97 && code <=122) || code >= 48 && code <=57){
            shape +=result[i];
        }
    }


    if(shape.length === 1 || 0 ) return true;

    let left = 0;
    let right = shape.length-1
    let is_palindrom = true;

    while (left<right){
        if(shape[left] === shape[right]){     
            is_palindrom = true;
            left ++ ;
            right --;
        }
        else{
            is_palindrom = false
            break
        }

    }

    return is_palindrom;
};

console.log(isPalindrome("WGlGl"))



//Unsolve this problem 