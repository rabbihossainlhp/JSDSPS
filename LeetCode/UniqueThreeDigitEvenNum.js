//3483 Unique 3-Digit Even Numbers.....>


var totalNumbers = function(digits) {
    let existIngredients = new Map()
    for(let i=0; i<digits.length; i++){
        if(existIngredients.has(digits[i])){
            existIngredients.set(digits[i],existIngredients.get(digits[i])+1);
        }else{
            existIngredients.set(digits[i],1);
        }
    }



    let answareCount = 0;
    for(let i=100; i<=999; i+=2){
        let numStr = i.toString();
        let recieNeeds = {};
        for(let char of numStr){
            let singleDigit = parseInt(char)
            recieNeeds[singleDigit] = (recieNeeds[singleDigit] || 0) +1
        }


        let canMake = true;
        for(let digit in recieNeeds){
            let numberDigit = parseInt(digit);
            let amountNeed = recieNeeds[numberDigit];

            let availableAmmount = existIngredients.get(numberDigit) || 0;

            if(availableAmmount<amountNeed){
                canMake = false;
                break;
            }
        }

        if(canMake){
            answareCount++
        }
    }
    return answareCount;
};



console.log(totalNumbers([1,2,3,4]))




//this was more hard though its a easy lavel qs in leetcode, also has few lackings of comfortablity with this like problem>