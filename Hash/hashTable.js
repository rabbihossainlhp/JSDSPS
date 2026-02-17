// now I'm gonna try a difficult type of DSA which is "Hash Table";






class HashTable {
    constructor(size=7){
        this.table = new Array(size);
        this.size = 0;
    }


    _hashFunc(key){
        let hash = 0;

        for(let i=0; i<key.length; i++){
            hash+= key.charCodeAt(i);
        }
        return hash%this.table.length;
    }


    set(key,value){
        let index = this._hashFunc(key);
        if(this.table[index]===undefined){
            this.table[index] = [];
        }

        let chain = this.table[index];
        for(let i=0; i<chain.length; i++){
            if(chain[i][0]===key){
                chain[i][1] = value;
                return;
            }
        }

        chain.push([key,value]);
        this.size ++;
    }
}