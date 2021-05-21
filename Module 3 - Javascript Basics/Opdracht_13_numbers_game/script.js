

const askName = function () {
    // vraagt om een naam, begroet en returnt naam.
    var name = prompt('Welkom, wat is je naam?')
    alert('Hey ' + name)
    return name
}

function getRandom(min, max) {
    // neemt twee getallen en returnt een willekeurig getal tussen en inclusief deze twee getallen 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let name = askName();
let min = prompt('Geef me het kleinste getal waar je mee wilt spelen')
let max = prompt('Geef me het grootste getal waar je mee wilt spelen')
let number = getRandom(min, max)
let attempts = 5


for (i = attempts - 1; i >= 0; i--) {
    guess = prompt('Voer een nummer in van 0 tot 25 om te beginnen met raden...');
    if (guess == number) {
        alert('Super knap gedaan hoor, je hebt gewonnen...')
        break
    }
    else {
        alert('nee joh!')
        alert('Je mag nog ' + i + ' keer raden')
    }
}
alert('Vaarwel ' + name + ' het ga je goed.')


