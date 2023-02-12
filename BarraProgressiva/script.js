let h2 = document.querySelectorAll("h2");
let texto = document.querySelectorAll(".texto p")
let fixed = document.querySelector(".fixed")

texto = Array.from(texto)

function navText(item, index){
    h2.forEach((h2) =>{
        h2.classList.remove('borda')
    })
    item.classList.add('borda')
    texto.forEach((item) =>{
        item.classList.remove("ativo")
    })
    texto[index].classList.add('ativo')
}

h2.forEach((item, index) => {
    item.addEventListener('click', function(){
        navText(item, index)
    })
})



function progressiveBar(event){
    let scrollAtual = window.scrollY;
    let pageHeight = document.querySelector('body').clientHeight;
    let windowsHeight = window.innerHeight;
    let porcent = 100/(pageHeight - windowsHeight + 100) * scrollAtual
    fixed.style.width = porcent + '%'
    
}

document.addEventListener("scroll", progressiveBar)