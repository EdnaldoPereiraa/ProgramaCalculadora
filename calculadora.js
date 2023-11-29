var valor1 = parseFloat(prompt("Digite o primeiro número: "));
var valor2 = parseFloat(prompt("Digite o segundo número: "));
var operador = prompt("Digite o operador (+, -, *, /): ");
var resultado;

switch (operador) {
    case '+':
        resultado = valor1 + valor2;
        break;
    case '-':
        resultado = valor1 - valor2;
        break;
    case '*':
        resultado = valor1 * valor2;
        break;
    case '/':
        resultado = [Math.floor(valor1 / valor2), valor1 % valor2];
        break;
    default:
        console.log("Operador inválido");
        break;
}

if (operador === '/') {
    console.log("Resultado: " + resultado[0] + ", Resto: " + resultado[1]);
} else {
    console.log("Resultado: " + resultado);
}
