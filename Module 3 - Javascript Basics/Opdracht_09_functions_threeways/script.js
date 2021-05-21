let number1 = 2
let number2 = 6

// function declaration

function fdCalc(number1, number2) {
    // Squares both numbers, adds them together, squares that sum and returns te result
    return ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2))
}

// function expression

const feCalc = function (number1, number2) {
    // Squares both numbers, adds them together, squares that sum and returns te result
    return ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2))
}

const afCalc = (number1, number2) => {
    // Squares both numbers, adds them together, squares that sum and returns te result
    return ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2))
}

console.log("Function declaration, numbers: " + number1 + " & " + number2 + " = " + fdCalc(number1, number2))
console.log("Function expression, numbers: " + number1 + " & " + number2 + " = " + feCalc(number1, number2))
console.log("Arrow function, numbers: " + number1 + " & " + number2 + " = " + afCalc(number1, number2))