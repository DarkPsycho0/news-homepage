const menu = document.querySelector('.menu')
const abrirMenu = document.querySelector('.open')
const fecharMenu = document.querySelector('.close')

abrirMenu.addEventListener('click', () => {
    menu.style.display = 'flex'
    fecharMenu.classList.remove('none')
})

fecharMenu.addEventListener('click', () => {
    menu.style.display = 'none'
    fecharMenu.classList.add('none')
})