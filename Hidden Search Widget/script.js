const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active') // toggle is used to add and remove the class (active)   
    input.focus() // focus remains to stay on the input box once clicked 
})