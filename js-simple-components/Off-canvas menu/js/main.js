/* 
1. Create 2 sections - move the menu to the left to hide it
2. When click, move the menu to the right to show it
*/

const button = document.querySelector('button')
const body = document.body

button.addEventListener('click', function() {
    if(body.classList.contains('offsite-is-open')){
        body.classList.remove('offsite-is-open')
    }else {
        body.classList.add('offsite-is-open')
    }
})



