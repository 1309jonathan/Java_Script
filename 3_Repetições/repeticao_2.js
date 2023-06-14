const mochila = [
    'Notebook', 
    'Caderno',
    'Pasta',
    'Celular',
    'Carteira'
]

for (let i = 0; i < mochila.length; i++){
    console.log(mochila[i])
    if (mochila[i] == 'Celular') break
}