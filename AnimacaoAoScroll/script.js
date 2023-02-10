let sections = document.querySelectorAll('section')



function animacaoScroll(){
    for(let i = 0; i < sections.length; i += 1){
        let distanciaTop = sections[i].getBoundingClientRect().top;
        let section = sections[i];
        if(distanciaTop <= 500){
            section.classList.add('ativo');
        }
    }
}


window.addEventListener('scroll', animacaoScroll)


