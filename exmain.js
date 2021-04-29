const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const player3 = document.getElementById('player3')
const player4 = document.getElementById('player4')
const namePlayer1 = document.getElementById('namePlayer1')
const newNamePlayer1 = document.getElementById('newNamePlayer1')
const formNamePlayer1 = document.getElementById('formNamePlayer1')

let lista = []

//Crear los td y sus contenidos
//validar input
//remover el is-invalid
function removeClassPlayer1() {
    player1.classList.remove("is-invalid")
}
function removeClassPlayer2() {
    player2.classList.remove("is-invalid")
}
function removeClassPlayer3() {
    player3.classList.remove("is-invalid")
}
function removeClassPlayer4() {
    player4.classList.remove("is-invalid")
}

namePlayer1.addEventListener('click', function() {
    formNamePlayer1.style.display = 'block'
})

function changeName1(event) {
    event.preventDefault()
    newPlayer1.innerHTML = newNamePlayer1.value
    formNamePlayer1.style.display = 'none'
}

//add inputs
//borrar imputs
//calcular totales
//renderizar manos
//