//Problem==> 58 Lenght of last word....

var lengthOfLastWord = function(s) {
    let sIntoArray = s.split(" ").filter(Boolean);
    return sIntoArray[sIntoArray.length -1].length;
};


console.log(lengthOfLastWord( "   fly me   to   the moon  "))