//Now time to implement "two sum" solution with map==>hashTable-concept.

function twoSum(arr, target){
    const map = new Map();
    for(let i=0; i<arr.length; i++){
        let currentNumber = arr[i];
        let complement = target -currentNumber;

        if(map.has(complement)){
            return [map.get(complement),i];
        }

        map.set(currentNumber,i)
    }

    return [];
}



console.log(twoSum([2, 3, 11, 7], 9))







//now a real project problem which is related with e-Commerce cart suggestion.

function suggestCart(arr,budget) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const currentPrice = arr[i].price;
    let complement = budget - currentPrice;

    if(map.has(complement)){
        return [map.get(complement),arr[i].id]
    }
    map.set(currentPrice,arr[i].id)
  }
return [];
}





console.log(suggestCart([
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 }
],300))







//Dom problem

'<button id="loadBtn">Load Users</button>'

let button = document.getElementById("loadBtn");

button.addEventListener('click',()=>{
    button.disabled=true;
    button.innerHTML=<h1>Loading...</h1>;

    fetch('https://example.com/api')
        .then(resposne => resposne.json())
            .then(data=> console.log(data))

        .catch(er=>{
            console.log(err)
        })

        .finally(()=>{
            button.disabled = false;
            button.innerHTML = <h1>Load User</h1>
        })
})