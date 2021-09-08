const progressBar = document.getElementById('progress')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

nextButton.addEventListener('click', () => {
    currentActive++;
    
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    updateProgess(circles, currentActive)
})

prevButton.addEventListener('click', () => {
    currentActive--;
    
    if(currentActive < 1) {
        currentActive = 1;
    }
    updateProgess(circles, currentActive)
})

function updateProgess(circular_nodes, activeNode) {
    circular_nodes.forEach((circular_node, i) => {
        if(i < activeNode) {
            circular_node.classList.add('active')
        } else {
            circular_node.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll('.active')
    progressBar.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(activeNode === 1) {
        prevButton.disabled = true
    } else if (activeNode ===  circular_nodes.length) {
        nextButton.disabled = true
    } else {
        prevButton.disabled = false
        nextButton.disabled = false
    }
}