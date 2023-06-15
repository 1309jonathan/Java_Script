//Antigamente

// const jogador = function(nome, posicao, numGol){
//     Nome = nome,
//     Posicao = posicao,
//     Gols = numGol

//     this.getNome = function(){
//         return Nome
//     }
//     this.getPos = function(){
//         return Posicao
//     }
//     this.getGol = function(){
//         return Gols
//     }
// }

// const Neymar = new jogador("Neymar", "Atacante", 400)
// console.log(Neymar.getNome())
// const Renato = new jogador("Renato Augusto", "Meio Campo", 81)
// console.log(Renato.getNome())
// const Vinicius = new jogador("Vinícius Jr.", "Atacante", 227)
// console.log(Vinicius.getNome())

//Atualmente

class Jogador{
    constructor(nome, posicao, numGol){
        this.nome = nome
        this.posicao = posicao
        this.numGol = numGol
    }
    golsMarcados(){
        console.log(`O ${this.nome} já marcou ${this.numGol} em sua carreira`)
    }
}

const Neymar = new Jogador('Neymar', 'Atacante', 400)
Neymar.golsMarcados()
const Renato = new Jogador("Renato Augusto", "Meio Campo", 81)
Renato.golsMarcados()
const Vinicius = new Jogador("Vinícius Jr.", "Atacante", 227)
Vinicius.golsMarcados()