let count = 0;
let counter = document.getElementById("counter")
let saved = document.getElementById("counts")

function increase() {
    count += 1
    counter.textContent = count;
}

function decrease() {
    count -= 1;
    counter.textContent = count;
}

function save() {
    let counts = count + " , "
    saved.textContent += counts
    counter.textContent = 0;
    count = 0
}