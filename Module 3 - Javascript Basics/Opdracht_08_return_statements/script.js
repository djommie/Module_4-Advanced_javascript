// This function produces something, it checks if the input is bigger than 100 and returns a boolean value. 
const biggerThan = function (number) {
    if (number <= 100) {
        return false
    }
    else {
        return true
    }
}


// This function produces something and does something, it prints a statement to the console based on the input.
console.log(biggerThan(100))
console.log(biggerThan(110))
console.log(biggerThan(90))

const bouncer = function (maxPeople, currentPeople, age) {
    if (currentPeople >= maxPeople) {
        return console.log("It's too busy now, come back  later.")
    }
    else if (age < 18) {
        return console.log("This is a club for adults.")
    }
    else {
        return console.log("Come in.")
    }
}

bouncer(100, 102, 19)
bouncer(100, 89, 19)
bouncer(100, 89, 14)


// This function does something, it calculates an average and returns the rounded number.
const calculateAverage = function (number1, number2, number3, number4, number5) {
    let answer = Math.round((number1 + number2 + number3 + number4 + number5) / 5)
    return answer
}

console.log(calculateAverage(5, 12, 64, 54, 76))
console.log(calculateAverage(6, 14, 234, 5634, 7))
console.log(calculateAverage(35, 2, 664, 423, 41))
console.log(calculateAverage(86, 1, 6213, 52315, 7))
console.log(calculateAverage(137, 413, 23, 5412, 74336))