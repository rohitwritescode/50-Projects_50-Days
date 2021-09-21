const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody() {

    if (activeSlide === 0) 
    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1632067145635-8dede79be781?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"

    if (activeSlide === 1) 
    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1631932100997-f194aeb50c45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"

    if (activeSlide === 2) 
    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1554768707-a66bcfe69e89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"

    if (activeSlide === 3) 
    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1581337377333-904020186445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"

    if (activeSlide === 4) 
    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1517094629229-f5e0c2f88440?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}