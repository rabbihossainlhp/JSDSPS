//today 7th march. I'm gonna solve few challenge about prefix sum maybe....
//first challenge about runingTotal.....using prefix sum

function runningTotal(arr){
    const resultArr = [];
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        resultArr.push(sum);
    }

    return resultArr;
}


console.log(runningTotal([5, 10, 15, 20]));





//second challenge is similer but come from job scenario...

function cartRunningTotal(items){
    let sumArr = [];
    let sum = 0;
    items.forEach(item=>{
        sum += item.price;
        sumArr.push(sum);
    })
    return sumArr;
}



//log them
console.log(cartRunningTotal([
  { name: "Phone", price: 500 },
  { name: "Case", price: 20 },
  { name: "Charger", price: 30 }
]))