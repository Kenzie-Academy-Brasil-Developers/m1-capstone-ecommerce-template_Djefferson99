/* 
Vitrine
<li class="produto">
<img src="./img/nintendo.jpg" alt="">
<p class="categoria">Games</p>
<h2>camiseta preta</h2>
<p class="descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quasi sit accusantium iste sint nihil </p>
<p class="preco">R$ 200</p>
<a class="add"href="#">Adicionar ao Carrinho</a>
</li>   */

/* 
Carrinho
<li class="produtos-no-carrinho">
<img class="img-car" src="./img/ps2.jpg" alt="">
<div class="info-car">
    <p><strong>Camiseta preta</strong></p>
    <p>R$200</p>
    <a class="remover"href="">Remover</a>
</div>
</li> */

/*
Total 
<p class = separar>Quantidade:<span></span></p>
<p class = separar>Total:<span>R$ </span></p> */

let VitrineUl = document.querySelector(".produto-geral")

function criarCards (arr, referenciaHTML){
    referenciaHTML.innerHTML ="" 
    for(let i = 0; i < arr.length; i++){
        let tagProduto = document.createElement("li")
        tagProduto.classList.add("produto")
        referenciaHTML.appendChild(tagProduto)
        
        let tagImg = document.createElement("img")
        tagImg.src = arr[i].img
        tagImg.alt = arr[i].nameItem
        tagProduto.appendChild(tagImg)
        
        let tagCategoria = document.createElement("p")
        tagCategoria.classList.add("categoria")
        tagCategoria.innerText = arr[i].tag
        tagProduto.appendChild(tagCategoria)

        let tagH2 = document.createElement("h2")
        tagH2.innerText = arr[i].nameItem
        tagProduto.appendChild(tagH2)

        let tagDescricao = document.createElement("p")
        tagDescricao.classList.add("descricao")
        tagDescricao.innerText = arr[i].description
        tagProduto.appendChild(tagDescricao)

        let tagPreco = document.createElement("p")
        tagPreco.classList.add("preco")
        tagPreco.innerText = `R$ ${arr[i].value.toFixed(2)}`
        tagProduto.appendChild(tagPreco)

        let tagAdd = document.createElement("a")
        tagAdd.classList.add("add")
        tagAdd.innerText = "Adicionar ao Carrinho"
        tagAdd.id = arr[i].id
        tagAdd.addEventListener("click", function(event){
            contador ++
            let item = encontraItem(event.target.id)
            listaCarrinho.push(item)
            criarCardsCarrinho(listaCarrinho, carrinhoUl)
            soma(listaCarrinho,total)
        })
        tagProduto.appendChild(tagAdd)
    }
}
criarCards(data, VitrineUl)

let contador = 0

function encontraItem(id){
    for(let i = 0; i < data.length; i++){
        if(id == data[i].id){
            return data[i]
        }
    }
}

function removerItem (id){
    for(let i = 0; i < listaCarrinho.length; i++){
        if(id == listaCarrinho[i].id){
          listaCarrinho.splice(i,1)
          return listaCarrinho
        }
    }
    
} 

let carrinhoUl = document.querySelector(".carrinho")

function criarCardsCarrinho (arr,referenciaHTML){
   referenciaHTML.innerHTML=""
    for(let i = 0; i < arr.length; i++){
        let tagProdutoCarrinho = document.createElement("li")
        tagProdutoCarrinho.classList.add("produtos-no-carrinho")
        referenciaHTML.appendChild(tagProdutoCarrinho)

        let tagImgCar = document.createElement("img")
        tagImgCar.classList.add("img-car")
        tagImgCar.src = arr[i].img
        tagImgCar.alt= arr[i].nameItem
        tagProdutoCarrinho.appendChild(tagImgCar)

        let tagInfo = document.createElement("div")
        tagInfo.classList.add("info-car")
        tagProdutoCarrinho.appendChild(tagInfo)

        let tagP = document.createElement("p")
        tagP.classList.add("nomeCar")
        tagP.innerText = arr[i].nameItem
        tagInfo.appendChild(tagP)

        let tagValor = document.createElement("p")
        tagValor.innerText =`R$ ${arr[i].value.toFixed(2)}`
        tagInfo.appendChild(tagValor)

        let tagRemover = document.createElement("a")
        tagRemover.classList.add("remover")
        tagRemover.innerText = "Remover"
        tagRemover.id= arr[i].id
        tagInfo.appendChild(tagRemover)
        tagRemover.addEventListener("click", (e) => {
        
            let listaRemov = removerItem(e.target.id)
            criarCardsCarrinho(listaRemov, carrinhoUl)
            soma(listaCarrinho,total)
        })
    }
}

let total = document.querySelector(".total")

function soma(arr, referenciaHTML){
    let resultado = 0
    referenciaHTML.innerHTML=""
    for(let i = 0; i < arr.length; i++){
        resultado += arr[i].value
    }
    let tagQuatidade = document.createElement("p")
    tagQuatidade.classList.add("separar")
    tagQuatidade.innerHTML=`Quantidade:<span>${arr.length}</span>`
    referenciaHTML.appendChild(tagQuatidade)

    let tagTotal = document.createElement("p")
    tagTotal.classList.add("separar")
    tagTotal.innerHTML = `Total:<span>R$${resultado.toFixed(2)}</span>`
    referenciaHTML.appendChild(tagTotal) 
}
soma(listaCarrinho,total)

let games = document.querySelector(".games")
games.addEventListener("click", (e) =>{
    e.preventDefault()
        lista = []
        for(let i = 0; i < data.length; i++){
            if(data[i].tag == "Games"){
                lista.push(data[i])
            }
        }
        console.log(lista)
        criarCards(lista, VitrineUl)
})

let todos = document.querySelector(".todos")
todos.addEventListener("click", (e) =>{
    e.preventDefault()
        criarCards(data, VitrineUl)
})

let consoles = document.querySelector(".consoles")
consoles.addEventListener("click", (e) =>{
    e.preventDefault()
        lista = []
        for(let i = 0; i < data.length; i++){
            if(data[i].tag == "Console"){
                lista.push(data[i])
            }
        }
        criarCards(lista, VitrineUl)
})

let acessorios= document.querySelector(".acessorios")
acessorios.addEventListener("click", (e) =>{
    e.preventDefault()
        lista = []
        for(let i = 0; i < data.length; i++){
            if(data[i].tag == "Acessório"){
                lista.push(data[i])
            }
        }
        criarCards(lista, VitrineUl)
})

let darkMode = document.querySelector("body")
let dark = document.querySelector(".dark")

dark.addEventListener("click",escuro)



function escuro (){
    if(darkMode.classList.contains("escuro")){
        darkMode.classList.remove("escuro")
    }else{
        darkMode.classList.add("escuro")
    }
}