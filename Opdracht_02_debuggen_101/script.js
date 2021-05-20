const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

// 1.
for (let person of array) {
    console.log("Het gehele object:", person)
}

// 2.
for (let person of array) {
    console.log("Alleen de naam:", person.name)
}

// 3.
for (let person of array) {
    console.log("geboortejaar:", 2021 - person.age)
}

// 4.
for (let person of array) {
    console.log(person.name, "is een", person.profession)
}

// 5.
for (let person of array) {
    if (person.age > 50) {
        console.log("Ouder dan 50:", person.name)
    }
}