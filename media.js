

// Inicializa a nota mínima como NaN
var notaMinima = NaN;

// Loop para solicitar a nota mínima até que um valor numérico válido seja fornecido
while (isNaN(notaMinima)) {
    // Pede ao usuário para inserir a nota mínima para aprovação
    var entradaUsuario = prompt("Digite a nota mínima para aprovação:");

    // Converte a entrada do usuário para um número
    notaMinima = parseFloat(entradaUsuario);

    // Verifica se a entrada do usuário é um número válido
    if (isNaN(notaMinima)) {
        alert("Por favor, insira um valor numérico válido.");
    }
}

function adicionarInput() {
    // Cria um novo input
    var novoInput = document.createElement("input");
    novoInput.type = "text";
    novoInput.name = "dynamic-inputs[]";
    novoInput.placeholder = "Digite sua nota";

    // Cria um contêiner para o novo input
    var novoInputContainer = document.createElement("div");
    novoInputContainer.classList.add("input-container");
    novoInputContainer.appendChild(novoInput);


    // Adiciona o novo input ao contêiner de inputs
    document.getElementById("inputs-container").appendChild(novoInputContainer);

       // Adiciona uma quebra de linha
       var quebraDeLinha = document.createElement("br");
       document.getElementById("inputs-container").appendChild(quebraDeLinha);
  }


  function calcularMedia() {
    // Obtém todos os inputs
    var inputs = document.getElementsByName("dynamic-inputs[]");

    // Inicializa a soma e o contador
    var soma = 0;
    var contador = 0;

    // Itera sobre os inputs e soma seus valores
    for (var i = 0; i < inputs.length; i++) {
      var valor = parseFloat(inputs[i].value);
      // Verifica se o valor é um número válido antes de somar
      if (!isNaN(valor)) {
        soma += valor;
        contador++;
      }
    }

    // Calcula a média
    var media = contador > 0 ? soma / contador : 0;


    
    // Exibe o resultado
    var resultadoElemento = document.getElementById('resultado');


// Verifica se a entrada do usuário é um número válido
if (isNaN(notaMinima)) {
    resultadoElemento.innerHTML = "Por favor, insira uma nota válida.";
} else {
    // Calcula a média
    var media = contador > 0 ? soma / contador : 0;

    // Exibe o resultado com base na nota mínima
    if (media >= notaMinima) {
        resultadoElemento.innerHTML = "Aprovado seu lindo(a)! A sua média é: " + media;
    } else {
        resultadoElemento.innerHTML = "Reprovado burrão! A sua média é: " + media;
    }
}


  }
 
