//2619 array prototype last...... very easy filterd from js specific.


Array.prototype.last = function(){
    if(this.length === 0) {
        return -1;
    };
    return this[this.length-1];
}
const arr = [null, {}, 3];
arr.last();
console.log(arr.last())