//today I got a challenge from stack about valid parentheses....
//though I implemented it before....

function isValidParentheses(str){
    const stack = [];
    let bracketsCheck = {
        '(':')',
        '{':'}',
        '[':']',
    }

    for(let char of str){

        if(char === '{' || char === '[' || char === '('){
            stack.push(char);

        }

        if(char === '}' || char === ']' || char === ')'){
            if(stack.length === 0){
                return false;
            }

            let top = stack.pop();
            if(bracketsCheck[top] !== char) return false;
            

        }
    
    }
    return stack.length === 0;
}


console.log(isValidParentheses('({)'))