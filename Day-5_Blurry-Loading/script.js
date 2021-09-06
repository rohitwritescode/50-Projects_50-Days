const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.background');

let loadingProgess = 0;

loadingInterval = setInterval(() => {
    loadingProgess++;
    if (loadingProgess > 99) {
        clearInterval(loadingInterval)
    }
    loadingText.innerText = `${loadingProgess}%`
    loadingText.style.opacity = scale(loadingProgess, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(loadingProgess, 0, 100, 30, 0)}px)`
}, 30)

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}