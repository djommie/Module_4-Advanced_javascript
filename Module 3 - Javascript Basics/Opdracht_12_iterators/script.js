let colors = ['yellow', 'blue', 'red', 'orange']
i = 0

while (i < 4) {
    console.log(colors[i])
    i++
}

for (i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

colors.forEach(element => console.log(element))

// Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
// Mijn for loop neemt drie regels in beslag en mij while loop vier

// Hoeveel regels neemt mijn forEach method in beslag?
// één

// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// Een forEach method laat in één oogomslag zien welke elementen je wilt en wat je er mee wilt doen

// Kun je een array method gebruiken op een object? Het antwoord is nee.
// Nee

// Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
// Door de 'for in' statement te gebruiken

// Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
// Ja

const mens = {
    naam: 'Jimmy',
    leeftijd: '31',
    woonplaaats: 'Haarlem',
    lengte: '187cm',
    gewicht: '84kg'
}

for (const property in mens) {
    console.log(property, ':', mens[property])
}