const produto1 = {
    id: 1,
    nome: "Produto 1",
    preco: 5
}

window.onload = function (){
document.getElementById("main").innerHTML = `
<table>
<tr>
    <th>Id</th>
    <th>Nome</th>
    <th>Preço</th>
</tr>

<tr>
    <th>${produto1.id}</th>
    <th>${produto1.nome}</th>
    <th>${produto1.preco}</th>
</tr>

</table>
`
}