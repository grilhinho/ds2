// Ler o arquivo
const produtosArquivo = require("./produtos.json")

function mostrarProdutos() {
produtosArquivo.forEach((produtos)=>{
    console.log(produtos.nome + 
        " - Nome " + produtos.nome + 
        " - Ano: " + produtos.ano + 
        " - temporadas " + produtos.temporadas +
        " - genero  " + produtos.genero +
        " - autor " + produtos.autor +
        " - classificação " + produtos.classificação) })
    }
    mostrarProdutos()
    produtosArquivo.push({
        
        nome: "NANA",
        ano: 2000,
        temporadas: 1,
        genero: "drama, terror psicologico",
        autor: "Ai Yazawa",
        classificação: +14,
    })
 mostrarProdutos ()
 console.log(" Produtos filtrados por classificação menor que 16")
const filtro = produtosArquivo.filter((produto)=> produto.classificação < 16)
console.log(filtro)

console.log("##### Produtos com 15% de desconto: #####")
const desconto = produtosArquivo.map((produto)=> {
    return {...produto, autor: produto.autor.toUpperCase()}}
)
console.log(desconto)

console.log(" Produto encontrado pelo ano")
const encontrar = produtosArquivo.find((produto) => produto.ano == 2023)
console.log(encontrar)