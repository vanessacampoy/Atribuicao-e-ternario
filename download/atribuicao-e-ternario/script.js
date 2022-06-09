//Atribuição e ternário
var numero = 20;
numero = numero + 10;
console.log(numero); //resultado 30

//ou
var numero = 20;
numero += 10;
console.log(numero); //resultado 30

//Operador ternário
var idade = 34;
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

var vestido = 36;
var tamVestido = vestido >= 42 ? "Meu tamanho" : "Não é meu tamanho";
console.log(tamVestido)


//If abreviado
var foiParaAula = true
if (foiParaAula) 
  console.log("Foi para aula");
else 
console.log("Não foi para aula")


//some 500 ao valor de scroll
var scroll = 1000
scroll+= 500
console.log(scroll) 


//atribuir true a variavel darCredito se o cliente possuir casa e carro
var possuiCarro = true
var possuiCasa = true
var darCredito

darCredito = (possuiCasa && possuiCarro) ? "Dar crédito": "Não dar crédito"
console.log(darCredito)


var segunda = false
var hoje

hoje = (segunda) ? "Hoje é dia de trabalho": "Hoje não é dia de trabalho"
console.log(hoje)


var ingresso = true
var pipoca = true
var cinema

cinema = (ingresso || pipoca) ? "Com ingresso e pipoca posso assistir ao filme!": "Sem ingresso e pipoca não posso assitir ao filme!"
console.log(cinema)









