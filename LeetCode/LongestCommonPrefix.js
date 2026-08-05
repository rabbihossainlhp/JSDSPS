//14. Longest Common Prefix
var longestCommonPrefix = function(strs) {
    strs.sort();
    let start = strs[0];
    let end = strs[strs.length-1];
    let result = "";

    for(let i = 0; i<start.length; i++){
        if(start[i] === end[i]){
            result += start[i];
        }else break;
    }

    return result;
    
};


console.log(longestCommonPrefix(["flower","flow","flight"]));
