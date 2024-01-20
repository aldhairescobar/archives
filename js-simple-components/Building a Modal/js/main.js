/* 

1. Open the modal when click the button
2. Close the modal in some way

*/

const button = document.querySelector('button')
const body = document.body
const closeButton = document.querySelector('.close-modal')

button.addEventListener('click', function() {
    body.classList.add('modal-is-open')
})

closeButton.addEventListener('click', function() {
    body.classList.remove('modal-is-open')
})
