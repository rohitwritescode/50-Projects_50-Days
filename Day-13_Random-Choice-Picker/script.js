const tags = document.getElementById('tags')
const textArea = document.getElementById('textarea')

textArea.focus()

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(inputData) {
    const rawTags = inputData.split(',' || ', ');
    const filteredTags = rawTags.filter(rawTag => rawTag !== '');

    tags.innerHTML = ''

    filteredTags.forEach(filteredTag => {
        
        const createdTag = document.createElement('span')
        createdTag.classList.add('tag')
        createdTag.innerText = filteredTag
        tags.appendChild(createdTag)
    })
}

function randomSelect() {
    const highlightJump = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)        

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100);
    }, highlightJump * 100);
}

function pickRandomTag() {
    const tagsToPick = document.querySelectorAll('.tag')
    return tagsToPick[Math.floor(Math.random() * tagsToPick.length)]
}

function highlightTag(tagToHighlight) {
    tagToHighlight.classList.add('highlight')
}

function unHighlightTag(tagToUnhighlight) {
    tagToUnhighlight.classList.remove('highlight')
}