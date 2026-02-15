// now I'm gonna try a difficult type of DSA which is "Hash Table";

class HashTable {
    constructor(size = 5){
        this.keyMap = new Array(size);
    }


    _hashFunc(key){
        let sum = 0;
        let prime_number = 31;

        for( let i = 0; i<Math.min(key.length, 100); i++){
            let charCode = key.charCodeAt(0) - 96;
            sum = (sum * prime_number + charCode) % this.keyMap.length;
        }

        return sum;
    }


    set(key,value){
        let index = this._hashFunc(key);

        if(!this.keyMap[index]){
            this.keyMap = [];
        }

        this.keyMap[index].push([key,value]);
    }
}



const testHash = new HashTable();
testHash.set("Hellow","43432432")

console.log(testHash)