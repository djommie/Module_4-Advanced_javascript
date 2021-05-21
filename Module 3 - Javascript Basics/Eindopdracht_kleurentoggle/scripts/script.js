let toggleNavStatus = false;

const menuBtn = document.querySelector('.menu__btn')

let toggleNav = function () {
    let getNavbar = document.querySelector(".menu__list");

    if (toggleNavStatus === false) {
        getNavbar.style.visibility = "visible";

        toggleNavStatus = true
    }

    else if (toggleNavStatus === true) {
        getNavbar.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}

let changeColor = function (color) {
    document.body.style.background = color;
    document.querySelector('.text').innerHTML = color;
}

function handleKeyPress(event) {
    var key = event.keyCode;
    var color;

    if (key === 49) {
        color = 'lightgray';
    }
    else if (key === 50) {
        color = 'red';
    }
    else if (key === 51) {
        color = 'orange';
    }
    else if (key === 52) {
        color = 'purple';
    }
    else if (key === 53) {
        color = 'green';
    }

    if (color) {
        changeColor(color)
    }
}

document.addEventListener('keypress', handleKeyPress)

// Als gebruiker wil ik in plaats van klikken met mijn muis over de hamburger kunnen hoveren, 
// waardoor het menu verschijnt. Wanneer ik als gebruiker met mijn muis weer weg ga bij de hamburger verdwijnt het menu weer.
// Als het menu weer verdwijnt zodra je met de muis weg gaat bij de hamburger, zoals aangegeven in de opdracht, dan kan je het menu natuurlijk niet meer gebruiken.
// menuBtn.addEventListener("mouseover", toggleNav);
// menuBtn.addEventListener("mouseout", toggleNav);