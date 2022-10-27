function adicionarCaracter(numero) {
    
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay + numero
}

function limpaTela() {
    document.querySelector(".display").value = ""
}

function calcular() {
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorDisplay)
}

function invertNumber() {
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay * -1
}