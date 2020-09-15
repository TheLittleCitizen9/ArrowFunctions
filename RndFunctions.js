var fibonacci = (number) => {
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

    var interval = setInterval(() =>{
        console.log(fibonacciArray[index++]);
        if(index == fibonacciArray.length){
            clearInterval(interval);
        }
    }, 1000)
}

var onlyEvent = (arr) => {
    var result = []
    var tempArr = []
    for(var i=0; i < arr.length; i++){
        for(var index=0; index < arr[i].length; index++){
            if(arr[i][index] % 2 === 0){
                tempArr.push(arr[i][index])
            }
        }
        result.push(tempArr)
        tempArr = []
    }
    console.log(result)
}