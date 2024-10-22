function realizarSoma() {
    // Obtém os valores dos inputs
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let resultado = num1 + num2;
    document.getElementById('resultado').innerHTML = "Resultado: " + resultado;
}

function realizarSubtracao() {
    // Obtém os valores dos inputs
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let resultado = num1 - num2;
    document.getElementById('resultado').innerHTML = "Resultado: " + resultado;
}

function realizarMulti() {
    // Obtém os valores dos inputs
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let resultado = num1 * num2;
    document.getElementById('resultado').innerHTML = "Resultado: " + resultado;
}

function realizarDivi() {
    // Obtém os valores dos inputs
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let resultado = num1 / num2;
    document.getElementById('resultado').innerHTML = "Resultado: " + resultado;
}

// Função que verifica o tipo de triângulo
function tipoTriangulo() {
// Pega os valores dos inputs e converte para números
let lado1 = parseFloat(document.getElementById('a').value);
let lado2 = parseFloat(document.getElementById('b').value);
let lado3 = parseFloat(document.getElementById('c').value);

 // Verifica se os valores são números válidos
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById('resultadot').innerHTML = "Por favor, insira valores válidos.";
    return;
}

// Verifica se os lados formam um triângulo válido
    if (a + b > c && a + c > b && b + c > a) {
// Verifica se é equilátero
    if (a === b && b === c) {
         document.getElementById('resultadot').innerHTML = "O triângulo é Equilátero.";
    }
// Verifica se é isósceles
    else if (a === b || a === c || b === c) {
        document.getElementById('resultadot').innerHTML = "O triângulo é Isósceles.";
    }
// Se não for equilátero nem isósceles, é escaleno
    else {
        document.getElementById('resultadot').innerHTML = "O triângulo é Escaleno.";
    }
    } else {
        document.getElementById('resultadot').innerHTML = "Os lados fornecidos não formam um triângulo válido.";
    }
}