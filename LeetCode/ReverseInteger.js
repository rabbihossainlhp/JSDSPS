//leetcode --> 7 Reverse Integer.....


var reverse = function(x) {
    let isNegative = false;
    let assingedValue = x | 0;

    assingedValue < 0 ? isNegative=true : isNegative=false;

    console.log(assingedValue)
    let calc = assingedValue.toString().split("");
    let newArr = [];
    for(let i=0; i<calc.length; i++){
        newArr.push(calc[i]);
    }
    
    let result = isNegative?  parseInt(newArr.reverse().join("")) * -1: parseInt(newArr.reverse().join("")) ;

    if(result < -2147483648 || result > 2147483647) return 0;

    return result;
};


console.log(reverse(1534236469

))