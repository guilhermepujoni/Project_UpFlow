
function NumeroInputs() {

var valor = document.querySelector("#quantidade").value // -- coleta do valor do input que informa o numero de inputs para soma 
var num = Number(valor)

if (num == 0) {
    alert("Digite um número!")  // -- Caso o input acima receba vazio ou 0
}  else if (num < 0) {
    alert("Digite um número maior que zero!") // -- Caso o input acima receba valor negativo
   } else {
        document.querySelector("#resultado").style.display = "none"   // -- esconder div com o resultado
        document.querySelector("#inputs").innerHTML = ""              // -- limpar a div com os inputs, para receber novos

        for (var i = 0; i < num; i++) {     // -- Criaçao dos inputs novos
        document.querySelector("#inputs").innerHTML += `Valor ${i + 1}: <input class='campo' id='numero${i + 1}' type='number' placeholder='Digite um número'> <br>`
        }   
    }
}


function calcularSoma() {

var x = document.querySelectorAll(".campo") // -- armazenamento dos numeros recebidos pelos inputs
var total = 0 
var error = false 

for (var i = 0; i < x.length; i++) {
    var input = x[i]     // -- variavel para simplificar a leitura 

    if (input.value == "") {
        input.style.border = "1px solid red"     // -- bordar vermelha no input
        input.placeholder = "Informe um número!" // -- novo placeholder pedindo um numero
        error = true
    } else {
        input.style.border = "initial"  // -- retirar a border vermelha dos input, quando preenchidos
      }
}

if (!error) {
    for (var i = 0; i < x.length; i++) {
        console.log(x[i].value)     // -- verificao dos valores nas suas posicoes, se necessario
        total += Number(x[i].value) // -- soma
    }         
        document.querySelector("#resultado").innerHTML = `<button id="botaofecha" onclick="botaoFechar ()"> X </button> O resultado da soma é dos valores acima é: <br> ${total}` // -- janela com a resposta da soma e o botao de fechar a janela
    
        if (document.querySelector("#resultado").style.display == "none") {  // -- condicional que retira o displey: none da janela com resposta
        document.querySelector("#resultado").style.display = ""
        }
    }
} 

function botaoFechar () {

    if (document.querySelector("#resultado").style.display == "") {  // -- botao para devolver o display: none para a janela com rsposta
        document.querySelector("#resultado").style.display = "none"
    }
}
