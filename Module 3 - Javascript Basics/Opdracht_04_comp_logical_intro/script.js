const age = 50;
const isFemale = true;
const driverStatus = 'bob';
const name = 'Bram';
let gratisBier = null
const totalAmount = 23

if (age >= 18) {
    console.log("Here's your drink!")
}
else {
    console.log("Here's your pacifier!")
}

if (isFemale == true) {
    console.log("Thanks for being a female")
}
else {
    console.log("The partiarchy has arrived")
}

if (driverStatus == 'bob') {
    console.log("Please drive safe!")
}
else {
    console.log("I'll call you a taxi")
}

if (age >= 18 && age < 26) {
    console.log("Je krijgt 50% korting!")
}
else {
    console.log("Je moet 50% extra betalen!")
}

if (name == 'Bram' || name == 'Sarah') {
    gratisBier = true;
}
else {
    gratisBier = false;
}

console.log(gratisBier)

if (totalAmount > 25 && totalAmount <= 50) {
    console.log("Bitterballen")
}
else if (totalAmount > 50 && totalAmount < 100) {
    console.log("nachos!")
}
else if (totalAmount >= 100) {
    console.log("Champagne!")
}
else {
    console.log("Order more cheapskate!")
}