var lampada = window.document.getElementById('lampada')

function status_quebrada(){
    return lampada.src.indexOf('quebrar') > -1
}

function ligar(){
    if (!status_quebrada()){
    lampada.src = 'Imagens/lamp_ligar.svg'
    }
}

function desligar(){
    if (!status_quebrada()){
    lampada.src = 'Imagens/lamp_desligar.svg'
    }
}

lampada.addEventListener ('click', quebrar)

function quebrar(){
    lampada.src = 'Imagens/lamp_quebrar.svg'
}