class Produto{ //Criação de uma classe pois é caracterizado como um conjunto de objetos
    constructor(){ //Os parâmetros não serão criados aqui, mas serão inseridos via imput através de funções
        this.id = 1; //O ID já vai vir estabelecido | o this é uma palavra reservada que me permite criar funções dentro da própria classe
        this.arrayProdutos = [] //É preciso salvar as informações. o array vai salvar essas informações
    }

    Adicionar(){ //A função Adicionar será a nossa função principal, ela será a função que possibilitará tudo o que vai vir a seguir
        let produto = this.lerDados() //O let cria uma variavel que é válida somente dentro da função e é preciso criar esta função para fazer referência ao valor retornado
        // Se a variavel não for criada, vai impossibilitar o trabalho com os dados
        if(this.Validar(produto) == true){ //precisamos validar estas informações, em caso de afirmativo, ela vai continuar a rodar o programa
            this.Salvar(produto)
        }
        this.Listar() //Criando a função Listar
        this.Cancelar() //Criando a função Cancelar
    }

    lerDados(){
        let produto = {} //O objeto começa com um valor vazio
        produto.id = this.id //ele vai pegar o (ID) informado
        produto.nomeProduto = document.getElementById('pdnome').value //Esse (nomeProduto) vai estar vinculado ao input com a id de referência no index.html
        produto.precoProduto = document.getElementById('pdvalor').value //Esse (nomeProduto) vai estar vinculado ao input com a id de referência no index.html

        //document.getElementByID é a ação de "pegar uma informação" (no caso pegar o valor descrito) com relação ao id estabelecido no index.html

        return produto //o return vai literalmente retornar o objeto na qual captamos os valores
    }

    Validar(produto){
        let msg = '';

        if(produto.nomeProduto==''){ //Caso este input esteja vazio, vamos informar a mensagem abaixo | \n - quebra de linha
            msg += 'Favor inserir o nome do produto corretamente! \n'
        }

        if(produto.precoProduto==''){ //Caso este input esteja vazio, vamos informar a mensagem abaixo
            msg += 'Favor inserir o valor do produto corretamente! \n'
        }

        if(msg != ''){ //Se o valor dos input estiverem divergentes 
            alert(msg)
            return false //precisamos colocar estes retornos pois vamos chamar essas validações com uma condicional
        }

        return true //precisamos colocar estes retornos pois vamos chamar essas validações com uma condicional
    }

    Salvar(produto){ //A função vai receber o parâmetro (no nosso caso, a função salvar vai receber o parâmetro produto, ou seja, a função Salvar, vai salvar o produto)
        this.arrayProdutos.push(produto) //push - empurrar
        this.id++; //vamos adicionar +1 valor no ID
    }

    Listar(){
        let tbody = document.getElementById('tbody') //Pegando o elemento da id da tabela
        tbody.innerText = '' //A linha da tabela virá vazia pois vamos inserir os valores que virão dos inputs

        for(let i = 0; i < this.arrayProdutos.length;i++){ //Ele vai incrementar no array todas as informações e preencher nas linhas, e essa variavel (i) precisa ser incrementada
            let tr = tbody.insertRow() //insertRow - Inserir + 1 linha na tabela

            let td_id = tr.insertCell() //insertCell - É a célula que vai receber as informações
            let td_nome = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id //innerText - vai adicionar a informação (no cado do id) na celula correspondente
            td_nome.innerText = this.arrayProdutos[i].nomeProduto
            td_valor.innerText = this.arrayProdutos[i].precoProduto
            let imagem = document.createElement('img') //Chamando e chriando a imagem no js
            imagem.src = 'del.png'
            imagem.setAttribute("onclick","produto.Deletar("+this.arrayProdutos[i].id+")") //Criação do atributo (no caso 'onclick') na (imagem) e esse atributo vai chamar uma função
            // Como o id vai variar, precisamos garantir que ele varie |+adicionar para garantir que ela vai (deletar) a id específica+ 
            td_acoes.appendChild(imagem) //Vamos adicionar um filho DOM a imagem
        }
    }

    Cancelar(){
        document.getElementById('pdnome').value = '' //insere o valor vazio ao input
        document.getElementById('pdvalor').value = ''
    }

    Deletar(id){
        let tbody = document.getElementById('tbody')
        for(let i = 0; i < this.arrayProdutos.length; i++){ //Vamos percorrer o array que começa no 0 e vamos até o final do nosso arrayProdutos
            if(this.arrayProdutos[i].id == id){ //Percorrendo todas as informações, caso o arrayProdutos seja igual a id de referência vamos poder (deletar)
                this.arrayProdutos.splice(i, 1) //Vai deletar a informação da linha, ele deleta o índice na qual é de referência e quantas vezes vamos fazer isso
                tbody.deleteRow(i) // Apaga a linha 
            }
        }
        alert('O item foi apagado com sucesso!')
    }
}

var produto = new Produto(); //É preciso criar uma variavel fora da função e essa variavel é um objeto da minha classe