const insert = document.getElementById('insert')

window.addEventListener('keydown', (keyObject) => {
    insert.innerHTML = 
    `<div class="key">
        ${keyObject.key === ' ' ? 'Space' : keyObject.key}
        <small>event.key</small>
    </div>

    <div class="key">
        ${keyObject.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key">
        ${keyObject.code}
    <small>event.code</small>
</div>`
})