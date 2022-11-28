let selectt = document.getElementById('selectt')
let cell = document.getElementById('cell')
selectt.addEventListener('change', function () {
    console.log(selectt.value)
    if (selectt.value == 2) {
        cell.classList.remove('cellGroupTwo');
        cell.classList.remove('cellGroupThree')
        cell.classList.add('cellGroupOne');
    }

    if (selectt.value == 3) {
        cell.classList.remove('cellGroupOne');
        cell.classList.remove('cellGroupThree')
        cell.classList.add('cellGroupTwo');
    }

    if (selectt.value == 5) {
        cell.classList.remove('cellGroupOne');
        cell.classList.remove('cellGroupTwo');
        cell.classList.add('cellGroupThree');
    }
})