//Funcion constructora

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
//local storage

function savingStudents(firstName, lastName, dni, email) {
    var studentsList = [];
    if (localStorage.getItem("students")) {
        studentsList = JSON.parse(localStorage.getItem("students"));
    }

    studentsList.push(new Student(firstName, lastName, dni, email));

    var studentsJson = JSON.stringify(studentsList);
    localStorage.setItem("students", studentsJson);
}

var students = [];

var addStudentButton = document.getElementById("addStudentButton");

addStudentButton.onclick = newStudents;

//validacion de campos
var firstName = document.getElementById("firstName");

firstName.onblur = validfirstName;


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

lastName.onblur = validlastName;


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

function validateDni(event){
    var dni = event.target;
    if (dni === isNaN ) {
        return document.getElementById("addStudentButton").disabled = true

    }else {document.getElementById("addStudentButton").disabled = false}
}