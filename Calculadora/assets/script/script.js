document.querySelector('form').addEventListener('submit', event => {
    console.log('Enviou!')
    event.preventDefault()
})

let numberOne = document.querySelector('#number_one')
let numberTwo = document.querySelector('#number_two')
let result = document.querySelector('span')

function add() {
    result.innerHTML = parseInt(numberOne.value) + parseInt(numberTwo.value)
}

function subtract() {
    result.innerHTML = parseInt(numberOne.value) - parseInt(numberTwo.value)
}

function multiply() {
    result.innerHTML = parseInt(numberOne.value) * parseInt(numberTwo.value)
}

function share() {
    result.innerHTML = parseInt(numberOne.value) / parseInt(numberTwo.value)
}