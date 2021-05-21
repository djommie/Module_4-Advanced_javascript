
// hey kiddo
const isEighteen = function (age) {
    console.log('Checking if', age, 'is higher than or equal to 18')
    if (age >= 18) {
        return true
    }
    else {
        return false
    }
}

const greet = function (age) {
    if (isEighteen(age)) {
        return "Hello there (General Kenobi)"
    }
    else {
        return "Hey kiddo"
    }
}

console.log(isEighteen(18))
console.log(isEighteen(17))
console.log(greet(17))
console.log(greet(19))


// VAT calculations
// exercise 1

const price = 200
const vat = 21

const calculateVAT = function (price, vat) {
    return price * (vat / 100)
}

const calculatePrice = function (price, vat) {
    return price + calculateVAT(price, vat)
}

console.log(calculatePrice(100, 21))

// exercise 2

const calculateBase = function (price, vat) {
    return price / ((100 + vat) / 100)
}

const calculateBoth = function (price, vat) {
    return [(price - calculateBase(price, vat)).toFixed(2), calculateBase(price, vat).toFixed(2)]
}

console.log(calculateBoth(price, vat))
