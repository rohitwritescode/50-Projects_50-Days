const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (el) {
        const x = el.clientX
        const y = el.clientY

        const buttonTop = el.target.offsetTop
        const buttonLeft = el.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})