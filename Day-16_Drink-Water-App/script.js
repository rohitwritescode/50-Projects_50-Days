const cup250ml = document.querySelectorAll('.cup-small');
const cup330ml = document.querySelectorAll('.cup-smallish');
const cup500ml = document.querySelectorAll('.cup-med');
const cup750ml = document.querySelectorAll('.cup-lg');
const cup1l = document.querySelectorAll('.cup-xl');

userInputCups = document.querySelectorAll('.cup')

const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remaining = document.getElementById('remaining')

userInputCups.forEach((cup, idx) => {
    cup.addEventListener('click', ()=> {
        cup.classList.toggle('full')
        if(cup.innerText === '250ml') updateBigCup(25)
    })
})

function updateBigCup(fillPercent) {
    percentage.style.visibility = 'visible'
    waterFilled = percentage.style.height
    percentage.style.height = waterFilled + `${fillPercent}%`
}