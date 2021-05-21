//A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = (array) => array.find(x => x.name === 'Spiderman')

console.log("Find Spoderman:", findSpiderMan(superheroes))
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//B
const doubleArrayValuesForEach = function (array) {
    array.forEach(function (x, index) {
        array[index] = x * 2
    })
    return array
}

const doubleArrayValuesMap = function (array) {
    array = array.map(x => x * 2);
    return array
}

console.log("Double forEach:", doubleArrayValuesForEach([1, 2, 3]))
console.log("Double map:", doubleArrayValuesMap([1, 2, 3]))
// result should be [2, 4, 6]

//C
const containsNumberBiggerThan10 = function (array) {
    if (array.every((currentValue) => currentValue < 10) == true) {
        return false
    }
    else {
        return true
    }
}

console.log("This array contains a number bigger than 10:", containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))
// result should be true
console.log("This array contains a number bigger than 10:", containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]))
// result should be false

//D
const isItalyInTheGreat7 = (array) => array.includes('Italy')

console.log("Is Italy in the great 7:", isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))
// result should be true

//E
const tenfold = function (array) {
    array.forEach(function (x, index) {
        array[index] = x * 10
    })
    return array
}

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

//F
const isBelow100 = (array) => array.every((currentValue) => currentValue < 100)

console.log("Every number array is below 100:", isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false

//G
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const bigSum = (array) => array.reduce(reducer)

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118