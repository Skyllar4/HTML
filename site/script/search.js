document.querySelector('#search').addEventListener('click', () => {
    document.querySelector('.sb-search').classList.toggle('show')
    document.querySelector('#search').classList.toggle('menu__find-btn-hidden')
})

document.querySelector('.menu__closed-search').addEventListener('click', () => {
    document.querySelector('.sb-search').classList.toggle('show')
    document.querySelector('#search').classList.toggle('menu__find-btn-hidden')
})
