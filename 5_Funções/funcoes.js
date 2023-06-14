function presente(dinheiro, valor){
    if (dinheiro < valor){
        return `Não vai dar para comprar o presente`
    }else{
        return `Você precisa realmente comprar esse presente?`
    }
}

let x = presente(100, 90)
console.log(x)