class Produto{
    constructor(){
        this.id = 1;
        this.arrayProdutos = []
    }

    Adicionar(){
        let produto = this.lerDados()
        if(this.Validar(produto) == true){
            this.Salvar(produto)
        }
        this.listar()
        this.Cancelar()
    }

    lerDados(){
        let produto = {}
        produto.id = this.id
        produto.nomeProduto = document.getElementById('pdnome').value
        produto.precoProduto = document.getElementById('pdvalor').value

        return produto
    }

    Validar(produto){
        let msg = '';

        if(produto.nomeProduto==''){
            msg += 'Favor inserir o nome do produto corretamente! \n'
        }

        if(produto.precoProduto==''){
            msg += 'Favor inserir o valor do produto corretamente! \n'
        }

        if(msg != ''){
            alert(msg)
            return false
        }

        return true
    }

    Salvar(produto){
        this.arrayProdutos.push(produto)
        this.id++;
    }

    listar(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for(let i = 0; i < this.arrayProdutos.length;i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_nome = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id
            td_nome.innerText = this.arrayProdutos[i].nomeProduto
            td_valor.innerText = this.arrayProdutos[i].precoProduto
            let imagem = document.createElement('img')
            imagem.src = 'del.png'
            imagem.setAttribute("onclick","produto.Deletar("+this.arrayProdutos[i].id+")")
            td_acoes.appendChild(imagem)
        }
    }

    Cancelar(){
        document.getElementById('pdnome').value = ''
        document.getElementById('pdvalor').value = ''
    }

    Deletar(id){
        let tbody = document.getElementById('tbody')
        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)
            }
        }
        alert('O item foi apagado com sucesso!')
    }
}

var produto = new Produto();