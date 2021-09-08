const leftPanel = document.querySelector('.left')
const rightPanel = document.querySelector('.right')
const container = document.querySelector('.container')

leftPanel.addEventListener('mouseenter', ()=> {
    container.classList.add('hover-left')
})

leftPanel.addEventListener('mouseleave', ()=> {
    container.classList.remove('hover-left')
})

rightPanel.addEventListener('mouseenter', ()=> {
    container.classList.add('hover-right')
})

rightPanel.addEventListener('mouseleave', ()=> {
    container.classList.remove('hover-right')
})