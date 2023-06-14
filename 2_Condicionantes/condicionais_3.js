var selecao='Argentina'

if (selecao == 'Brasil' ){                                          /*|| - comparativo ou*/
    console.log(`${selecao} já ganhou a copa 5 vezes`)
}else if( selecao == 'Argentina' || selecao == 'Uruguai'){
    console.log(`${selecao} já ganhou 2 copas`)
}else{
    console.log(`${selecao} nunca ganhou uma copa`)
}