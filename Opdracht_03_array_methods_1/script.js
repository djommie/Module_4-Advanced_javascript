// A
const addTheWordCool = function (array) {
    array.push("cool")
    return array
}

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

//B
const amountOfElementsInArray = (array) => array.length;

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
// 3

//C
const selectBelgiumFromBenelux = (array) => array[0];

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

//D
const lastElementInArray = (array) => array[array.length - 1];

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = (array) => array.slice(1)

const impeachTrumpSplice = (array) => array.splice(1, 3)

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//F
const stringsTogether = (array) => array.join(" ")

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"

//G
const combineArrays = (array, array2) => array.concat(array2)

console.log(combineArrays([1, 2, 3], [4, 5, 6]))
// resultaat: [1,2,3,4,5,6]