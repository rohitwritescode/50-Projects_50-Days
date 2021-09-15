const cup250ml = document.querySelectorAll('.cup-small');
const cup330ml = document.querySelectorAll('.cup-smallish');
const cup500ml = document.querySelectorAll('.cup-med');
const cup750ml = document.querySelectorAll('.cup-lg');
const cup1l = document.querySelectorAll('.cup-xl');
const userInputCups = document.querySelectorAll('.cup')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remaining = document.getElementById('remaining')

const resetButton = document.querySelector('.reset')

liters.innerText = '2l'

userInputCups.forEach((cup, idx) => {
    cup.addEventListener('click', ()=> {
        cup.classList.add('full')
        setTimeout(() => {cup.classList.remove('full')}, 500);
        if(cup.classList.contains('full')) {
            if(cup.innerText === '250ml') updateBigCup(25)
            if(cup.innerText === '330ml') updateBigCup(33)
            if(cup.innerText === '500ml') updateBigCup(50)
            if(cup.innerText === '750ml') updateBigCup(75)
            if(cup.innerText === '1l') updateBigCup(100)
        }
    })
})

resetButton.addEventListener('click', ()=> {
    percentage.style.height = '0%'
    percentage.innerText = ''
    liters.innerText = '2l'
})

function updateBigCup(mlPercentageAdded) {
    percentage.style.visibility = 'visible'
    
    let currentLevel = percentage.style.height.split('%')
    console.log(currentLevel)
    if(currentLevel[0] === '') {
        percentage.style.height = `${mlPercentageAdded/2}%`
        percentage.innerText = `${mlPercentageAdded/2}%`
        liters.innerText = `${((100 - mlPercentageAdded/2) * 2)/100} l`
    } else {
        let waterFilled = +currentLevel[0]
        console.log(waterFilled)
        percentage.style.height = `${waterFilled + mlPercentageAdded/2}%`
        percentage.innerText = `${waterFilled + mlPercentageAdded/2}%`
        liters.innerText = `${((100 - (waterFilled + mlPercentageAdded/2)) * 2)/100} l`
        if(percentage.style.height >= '100%') {
            remaining.style.height = 0
        }
    }
}