// function addRedBorder(id){
//     element = document.querySelector(`#${id}`);
//     element.style.boxShadow = "10px 10px red"
// }

// addRedBorder("quinta");

function highLightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highLight"); //toggle - se tem, ela vai tirar, se não tem, ele vai comocar (como se fosse um interruptor")
}

// Exemplo de evento do teclado
// function checkKeyboardCode(){
//     document.addEventListener('keydown', (event) => {
//         var name = event.key;
//         var code = event.code;
//         //Alerta! A chave nome e a chave código no evento keydown
//         alert(`key pressed ${name} \r\n key code value: ${code} `);
//     },false)
// }

// checkKeyboardCode()

//Escolha dos ingressos via teclado, digitando 1, 2, 3 ou 4
const ingressos =[];

function addKeyboardEventListener(){

    document.addEventListener( "keydown", (event) => {

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if(code == 'Digit1'){
            ingresso1.classList.toggle("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }

        var code = event.code;
        if(code == 'Digit2'){
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.toggle("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }

        var code = event.code;
        if(code == 'Digit3'){
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.toggle("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }

        var code = event.code;
        if(code == 'Digit4'){
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.toggle("card-highLight");
        }
    },false);
}

selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)){
        ingressos.pop(selector)
    }else{
        ingressos.push(selector)
    }
}

showSelectedCards = () => {
    if(ingressos.length > 0){
        alert("Ingressos selecionados: " + ingressos);
    }
}
addKeyboardEventListener();