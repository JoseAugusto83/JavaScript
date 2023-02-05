const linksInternos = document.querySelectorAll('nav a[href^="#"]');


function scrollSuave(event){
    event.preventDefault()
    href = this.getAttribute('href');
    section = document.querySelector(href)

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'

    })

}

linksInternos.forEach((links) => {
    links.addEventListener('click', scrollSuave);
})