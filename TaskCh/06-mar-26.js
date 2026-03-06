//Maybe today will dive in clouser........
//ok its normal challenge about clouser....

function createCounter(){
    let count = 0;

    return function innerFunction(){
        count ++;
        return count;
    }
}



const counter = createCounter();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 










//this is interview test....
const container = document.getElementById('button');

const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Sam" },
]

users.forEach(user=>{
    const button = document.createElement('button');
    button.textContent = user.name;

    button.addEventListener('click',()=>{
        console.log(user.name);
    })

    container.appendChild(button);
})