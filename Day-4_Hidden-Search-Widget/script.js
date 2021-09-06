searchContainer = document.querySelector('.search-container')
searchButton = document.querySelector('.btn')
searchInput = document.querySelector('.input')

searchButton.addEventListener('click', () => {
    searchContainer.classList.toggle('active')
    searchInput.focus()
})
