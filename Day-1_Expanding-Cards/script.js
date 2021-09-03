const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses(panels)      
        panel.classList.add('active')  
    })
})

function removeActiveClasses(domObjects) {
    domObjects.forEach((object) => {
        object.classList.remove('active')
    })
}