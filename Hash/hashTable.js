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



    //GET function
    get(key){
        let key_index = this._hashFunc(key);

        if(this.table[key_index]===undefined){
            return undefined;
        };

        let chain = this.table[key_index];
        if(chain){
            for(let i=0; i<chain.length; i++){
                if(chain[i][0]===key){
                    return chain[i][1];
                }
            }
        }
        return undefined;
        
    }




    //Get All Keys.....!
    getAllKeys(){
        let keys = [];
        for(let i = 0; i<this.table.length; i++){
            if(this.table[i]){
                for(let j=0; j<this.table[i].length; j++){
                    keys.push(this.table[i][j][0])
                }
            }
        }

        return keys;
    }

    //Get all values.....
    getAllValues(){
        let values = [];
        for(let i = 0; i<this.table.length; i++){
            if(this.table[i]){
                for(let j=0; j<this.table[i].length; j++){
                    values.push(this.table[i][j][1]);
                }
            }
        }
        return values;
    }
}




let NewHash = new HashTable(12);
NewHash.set("Roll",1313);
NewHash.set("Name","Hayat");
NewHash.set("Name","Mahmud");//This will replace previous vaule because of the same key (logic in the function code)


console.log(NewHash.get("Name"));
console.log(NewHash)
console.log(NewHash.getAllKeys());
console.log(NewHash.getAllValues())