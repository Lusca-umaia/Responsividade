let fD = document.getElementById('fD')
let init = document.getElementById('init')
let form = document.getElementById('form')
let grid = document.getElementById('grid')

fD.addEventListener('click', function () {
    form.classList.remove("grid");
    form.style.flexDirection = "column"
})

init.addEventListener('click', function () {
    form.classList.remove("grid");
    form.style.flexDirection = "initial"
})

grid.addEventListener('click', function () {
    form.classList.add("grid");
})
