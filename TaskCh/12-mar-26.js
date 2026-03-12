//today's problem may come from queue...

function processTasks(tasks){
    while(tasks.length > 0){
        console.log(`Processing... ${tasks.shift()}`);
    }
}


console.log(processTasks(['task1','task2','task3','task4']))