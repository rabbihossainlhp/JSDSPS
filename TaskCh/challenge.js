//Count Even Numbers..

const countEven = (numbers) =>{
    let counter = 0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 == 0){
            counter++;
        }
    }
    return counter;
}

console.log(countEven([2,3,5,3,6,6,6]))