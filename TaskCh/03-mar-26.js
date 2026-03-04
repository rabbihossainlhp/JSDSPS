
//again remove duplicate using "map"...
const removeDuplicates = (arr)=>{
    const map = new Map();
    for(let i=0; i<arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i],true);
        }
    }
    return Array.from(map.keys())
    
}



console.log(removeDuplicates([3,2,2,4,43,3]))









///Another core Interview patter. with "map" internal logic...
function countFrequency(arr) {
    const map = new Map();
    for(let i=0; i<arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i],1);
        }
        else{
            map.set(arr[i], map.get(arr[i])+1);
        }
    }

    return Object.fromEntries(map);
}



console.log(countFrequency(["a","d","a"]))








//Now this challenge comes from real job scenario.....

function getDashInfo(arr){
    const map = new Map();
    for(let i=0; i<arr.length; i++){
        for(let key in arr[i]){
            map.has(arr[i][key]) ? map.set(arr[i][key], map.get(arr[i][key])+1) : map.set(arr[i][key],1);
        }
    }

    return map;
}


console.log(getDashInfo(
    [
  { status: "completed" },
  { status: "pending" },
  { status: "completed" },
  { status: "failed" },
  { status: "pending" }
]
))


/**
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |This is the better and clean version of "getDashInfo"
 */

function getDashInfo(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const status = arr[i].status;

    if (!map.has(status)) {
      map.set(status, 1);
    } else {
      map.set(status, map.get(status) + 1);
    }
  }

  return Object.fromEntries(map);
}