let totalGeral;
limpar();
function adicionar(){



//recuperar valores, nome do produto ,preço, quantidade
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];//divide a string em uuas partes
let valor = produto.split('R$')[1]
let quantidade = document.getElementById('quantidade').value;
//calcular preço
let preco = quantidade * valor;  
//adicionar no carrinho
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + (`<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x </span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`);
//atualizar valor total
totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = 0;




}

function limpar(){
 totalGeral = 0
 document.getElementById('lista-produtos').innerHTML = '';
 document.getElementById('valor-total').textContent = 'R$ 0';
}