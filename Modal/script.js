let contato = document.querySelector('.contact')
let fechar = document.querySelector('.fechar')
let modal = document.querySelector('.modal-container')

function modalAtivo(event){
    event.preventDefault()
    modal.classList.toggle('ativo')
}

function cliqueForaModal(event){
    if(event.target === this){
        modalAtivo(event)
    }
}


contato.addEventListener('click', modalAtivo)
fechar.addEventListener('click', modalAtivo)
modal.addEventListener('click', cliqueForaModal)