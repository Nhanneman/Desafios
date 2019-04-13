/* FUNCION CONSTRUCTORA */

function Students(firstName, lastName, dni, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dni = dni;
    this.email = email;

}

function newStudents() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var dni = document.getElementById("dni");
    var email = document.getElementById("email");

    savingStudents(
        firstName.value,
        lastName.value,
        dni.value,
        email.value);
}
/* LOCAL STORAGE*/


function savingStudents(firstName, lastName, dni, email) {
    var studentsList = [];
    if (localStorage.getItem("students")) {
        studentsList = JSON.parse(localStorage.getItem("students"));
    }
    studentsList.push(new Students(firstName, lastName, dni, email));
    var studentsJson = JSON.stringify(studentsList);
    localStorage.setItem("students", studentsJson);
}
var students = [];

var addStudentButton = document.getElementById("addStudentButton").disabled = true



addStudentButton.onclick = newStudents;


/* VALIDACION DE CAMPOS */

var firstName = document.getElementById("firstName");


firstName.onblur = validatefirstName;

function validatefirstName(event) {
    var firstName = event.target;
    console.log(firstName.value);
    if (
        !firstName.value ||
        firstName.value.indexOf("")
    ) {
        firstName.classList.remove("is-valid")
        firstName.classList.add("is-invalid")
    } else {
        firstName.classList.remove("is-invalid")
        firstName.classList.add("is-valid")
    }
}
var lastName = document.getElementById("lastName");
lastName.onblur = validatelastName;

function validatelastName(event) {
    var lastName = event.target;
    console.log(lastName.value);

    if (
        !lastName.value ||
        lastName.value.indexOf("")
    ) {
        lastName.classList.remove("is-valid")
        lastName.classList.add("is-invalid")
    }
    else {
        lastName.classList.remove("is-invalid")
        lastName.classList.add("is-valid")
    }
}


var dni = document.getElementById("dni");
dni.onblur = validateDni;

function validateDni(event) {
    var dni = event.target;

    var dniField;

    console.log(dni.value);

    dniField = parseInt(dni.value);

    if (isNaN(dniField) || dniField <= 0) {
        dni.classList.remove("is-valid")
        dni.classList.add("is-invalid")
    }
    else {
        dni.classList.remove("is-invalid")
        dni.classList.add("is-valid")
    }
}

var email = document.getElementById("email");
email.onblur = validateEmail
function validateEmail(event) {
    var email = event.target;
    console.log(email.value);
    if (
        !email.value ||
        email.value.indexOf("@") === -1 ||
        email.value.indexOf(".") === -1 ||
        email.value.indexOf("com") === -1
    ) {
        email.classList.remove("is-valid")
        email.classList.add("is-invalid")
    } else {
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
    }
}

