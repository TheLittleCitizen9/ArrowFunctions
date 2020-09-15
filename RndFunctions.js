var fibonacci = function(number){
    if(number === undefined){
        number = 10
    }
    var current = 0
    var tempCurrent = current
    var next = 1
    var fibonacciArray = []
    var index = 0;

    while(current < number){
        fibonacciArray.push(current)
        current = next
        next = tempCurrent + next
        tempCurrent = current
    }

    var interval = setInterval(function(){
        console.log(fibonacciArray[index++]);
        if(index == fibonacciArray.length){
            clearInterval(interval);
        }
    }, 1000)
}