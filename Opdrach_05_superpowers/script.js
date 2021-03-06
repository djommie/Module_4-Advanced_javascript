const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
];

// 1.
const heroNames = function (heroes) {
    return heroes.map(hero => { return hero.name })
}

console.log("These are the hero names:", heroNames(superheroes))

// 2.
const lightHeroes = function (heroes) {
    return heroes.filter(hero => hero.weight <= 190).map(hero => { return hero.name })
}

console.log("These heroes are a little light:", lightHeroes(superheroes))

// 3.
const poundHeroes = function (heroes) {
    return heroes.filter(hero => hero.weight == 200).map(hero => { return hero.name })
}

console.log("These heroes weigh exactly 200 pounds", poundHeroes(superheroes))

// 4.
const firstAppearances = function (heroes) {
    return new Set(heroes.map(hero => { return hero.first_appearance }))
}

console.log(firstAppearances(superheroes))

// 5.
const DCHeroes = function (heroes) {
    return heroes.filter(hero => hero.publisher == "DC Comics")
}

console.log("DC Comics Heroes:", DCHeroes(superheroes))

const marvelHeroes = function (heroes) {
    return heroes.filter(hero => hero.publisher == "Marvel Comics")
}

console.log("Marvel Heroes:", marvelHeroes(superheroes))

// 6.
const reducer = (accumulator, currentvalue) => accumulator + currentvalue

const DCWeight = function (heroes) {
    return DCHeroes(heroes).map(hero => { return parseInt(hero.weight) }).reduce(reducer)
}

console.log("Total weight if all DC characters:", DCWeight(superheroes))

const marvelWeight = function (heroes) {
    return marvelHeroes(heroes).filter(hero => hero.weight != "unknown").map(hero => { return parseInt(hero.weight) }).reduce(reducer)
}

console.log("Total weight if all Marvel characters:", marvelWeight(superheroes))