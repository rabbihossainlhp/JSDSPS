var climbStairs = function(n) {
    if(n<=0 || n===1) return 1;
    let first = 1;
    let second = 2;

    for(let i = 3; i<=n; i++){
        let next = first+second;
        first = second;
        second = next;
    }
    

    return second
};


console.log(climbStairs(5))