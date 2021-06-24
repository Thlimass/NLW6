import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
  button.addEventListener("click", event => {
    modalTitle.innerHTML = "Marcar como lida"
    modal.open()
  })
})

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
  button.addEventListener("click", event => {
    modalTitle.innerHTML = "Excluir essa pergunta"
    modal.open()
  })
})




