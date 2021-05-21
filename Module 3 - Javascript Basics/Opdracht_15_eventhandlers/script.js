const btn = document.getElementById('mybutton')
const btn2 = document.getElementById('mybutton2')
const body = document.querySelector("body")


const toggleColor = function () {
    body.classList.toggle('red-background'),
        body.classList.toggle('blue-background')
}

btn.addEventListener('click', function () {
    alert('button clicked')
})

btn2.addEventListener('click', toggleColor)