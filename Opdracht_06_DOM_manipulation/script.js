const buttons = document.querySelectorAll(".big-five-button");
const rmbtn = document.querySelector("#remove-first-item-button")
const rmAllBtn = document.querySelector("#remove-all-button")

var spottedList = document.getElementById("spotted-animals-list");

buttons.forEach(element => element.addEventListener('click', function (event) {
    let newLi = document.createElement("li");
    newLi.innerHTML = element.innerHTML;
    spottedList.appendChild(newLi);
}))

rmbtn.addEventListener('click', function (event) {
    let child = spottedList.getElementsByTagName('li')[0];
    spottedList.removeChild(child);
})

rmAllBtn.addEventListener('click', function (event) {
    while (spottedList.firstChild) {
        spottedList.removeChild(spottedList.firstChild)
    }
})
