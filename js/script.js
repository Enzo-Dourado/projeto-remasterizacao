
function clicMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    }
    else {
        menu.style.display = 'block'
    }
}

function alerta() {
    var saudacao = prompt('Qual seu nome?')
    var alerta = alert(`Seja bem-vindo(a), ${saudacao}`)
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        menu.style.display = 'block'
    }
    else {
        menu.style.display = 'none'
    }
}
