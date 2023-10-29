const submit = document.getElementById('submit')
const submit2 = document.getElementById('submit2')
const popUp = document.querySelector('.icons')


submit.addEventListener('click', () =>{
    popUp.classList.toggle('active')
})

submit2.addEventListener('click', () =>{
    popUp.classList.toggle('active')
})

