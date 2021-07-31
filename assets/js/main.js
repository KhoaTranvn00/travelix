$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)

// Header sticky
const headerTop = $('.header-topbar-container')
const headerNav = $('.header-nav')

window.addEventListener('scroll', scrollFunction)

function scrollFunction() {
    if(document.documentElement.scrollTop >= 20 || document.body.scrollTop >= 20) {
        headerTop.classList.add('hide')
        headerNav.classList.add('scroll')
    } else {
        headerTop.classList.remove('hide')
        headerNav.classList.remove('scroll')
    }
}

// Search btn
const btnSearch = $('.header-nav__search-icon')
const inputSearch = $('.header-nav__search-input')
btnSearch.addEventListener('click', () => {
    inputSearch.classList.toggle('open')
})

// link active
const links = $$('.header-nav__item')

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        $('.header-nav__item--active').classList.remove('header-nav__item--active');
        link.classList.add('header-nav__item--active');
    })
});


// searchHeader active
const searchHeaders = $$('.search-header__item')

searchHeaders.forEach(searchHeader => {
    searchHeader.addEventListener('click', (e) => {
        e.preventDefault();
        $('.search-header__item--active').classList.remove('search-header__item--active');
        searchHeader.classList.add('search-header__item--active');
    })
});



// searchHeaderTlMb active
const searchHeadersTlMb = $$('.search-header-tb-mb__item-link')

searchHeadersTlMb.forEach(searchHeaderTlMb => {
    searchHeaderTlMb.addEventListener('click', (e) => {
        e.preventDefault();
        $('.search-header-tb-mb__item-link--active').classList.remove('search-header-tb-mb__item-link--active');
        searchHeaderTlMb.classList.add('search-header-tb-mb__item-link--active');
    })
});









