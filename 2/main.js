var gender = prompt("ingresar male,female u other")
var age = prompt("ingresar edad")
var mensaje = "Hola"
switch (gender) {
    case "male":
        mensaje = mensaje + " Sr"
        break;

    case "female":
        mensaje = mensaje + " Sra"
        break;
    case "other":
        mensaje = mensaje + " Srx"
        break;

}

if (age >= 18) {
    mensaje = mensaje + " usted es mayor de edad!"
} else { mensaje = mensaje + " usted es menor de edad!" }
console.log(mensaje);
alert(mensaje);