const toggle = document.getElementById('toggle')
const Close = document.getElementById('close')
const Open = document.getElementById('open')
const modal = document.getElementById('modal')

toggle.addEventListener('click', ()=>{
    document.body.classList.toggle("show-nav")
})

Open.addEventListener('click', ()=>{
    console.log('open')
    modal.classList.add('show-modal')
})

Close.addEventListener('click', ()=>{
    modal.classList.remove('show-modal')
})

window.addEventListener('click', (e)=>{
e.target === modal ? modal.classList.remove('show-modal') : false
})