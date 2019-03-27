
var operation = prompt("ingrese la operacion deseada");

var number1 = parseInt(prompt("ingresar primer valor"));

do {
    number2 = parseInt(prompt("ingrese segundo valor"));
  } while (operation === "/" && number2 === 0);

var result;

switch (operation) {
    case "+":
        result = number1 + number2
        break
    case "-":
        result = number1 - number2
        break
    case "*":
        result = number1 * number2
        break
    case "/":
        result = number1 / number2
        break
    default:
        result = "operacion incorrecta"
        break
};

alert("el resultado es " + result);