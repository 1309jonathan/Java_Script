function tabuada(){
    var num1 = window.document.getElementById('num1')
    var num2 = window.document.getElementById('num2')

    if(num1.value.length==0 || num2.value.length==0){
        window.alert('Confira os dados')
    }else{
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var r = ''
    var x = 0
    var res = window.document.getElementById('resposta')
    res.innerHTML = `A tabuada do ${n1} é: <br>`

    do{ 
        r = n1 * x
        res.innerHTML += `${x} X ${n1} = ${r} <br>`
        x++
    }while(x <= n2)
}
}