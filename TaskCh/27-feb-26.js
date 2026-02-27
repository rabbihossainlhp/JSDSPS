//Challenge with HashTable concept....
function removeDuplicates(arr) {
    let storeResult = {}
    for(let i=0; i<arr.length; i++){
        if(!storeResult.hasOwnProperty(arr[i])){
            storeResult[arr[i]] = arr[i];
        }
    }
    return Object.values(storeResult);
}


console.log(removeDuplicates([4,3,5,5,2,1,3]))














// Simple data caching during api calling concept...
const cache = {};

async function getProfile() {
  if (cache["profile"]) {
    console.log("Using cached data");
    return cache["profile"];
  }

  console.log("Calling API...");
  const response = await fetch("/api/profile");
  const data = await response.json();

  cache["profile"] = data;

  return data;
}