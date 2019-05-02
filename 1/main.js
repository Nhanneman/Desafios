/* 1. crear un formulario con nombre y dni (HTML)
        1a. validar nombre y dni vacio
        2a. validar dni positivo
 * 2. permitir ingresar y eliminar alumnos
 * 3. persistencia en localstorage
 * 4. se muestra lista 
*/

/*
 * 1. Crear objeto alumno
 * 2. Crear Funcion Constructora Alumno
 * 3. Crear la funcion que obtiene lista de alumnos (getListaAlumnos)
 *      a. obtener del localstorage la lista de alumnos
 *          a1. crear lista vacia
 *          a2. existe lista? => obtener del ls
 *          a3. no existe lista? => guardar lista vacia en ls
 *      b. parsear lista a objeto
 *      c. devolver lista
 * 4. Crear la Funcion que agrega un alumno
 *      a. obtener lista alumnos con funcion getListaAlumnos().
 *      b. recorrer alumnos para verificar ya si existe
 *      b. agregar alumno a lista
 *      c. convertir lista a json
 *      d. guardar lista en local storage
 * 
 * */

studentList = [];

addStudentButton = document.getElementById("addStudentButton");
addStudentButton.onclick = newStudent;

firstNamenode = document.getElementById("firstName");
firstNamenode.onblur = validateFields;

lastNamenode = document.getElementById("lastName");
lastNamenode.onblur = validateFields;

dniNode = document.getElementById("dni");
dniNode.onblur = validateDnifield;



function AddStudent(firstName, lastName, dni, email) {
        this.firstname = firstName;
        this.lastName = lastName;
        this.dni = dni;
        this.email = email;


}
function newStudent() {
        firstName = document.getElementById("firstName");
        lastName = document.getElementById("lastName");
        dni = document.getElementById("dni");
        email = document.getElementById("email");

        saveStudent(
                firstName.value,
                lastName.value,
                dni.value,
                email.value,
        )
}

function saveStudent(firstName, lastName, dni, email) {
        var studentList = [];
        if (localStorage.getItem("newStudent")) {
                studentList = JSON.parse(localStorage.getItem("newStudent"));
        }
        studentList.push(new AddStudent(firstName, lastName, dni, email));

        var listNamejson = JSON.stringify(studentList);
        localStorage.setItem("newStudent", listNamejson)
}




function validateFields(events) {
        var node = events.target
        if (!node.value ||
                node.value.indexOf("")

        ) {
                node.classList.remove("is-valid");
                node.classList.add("is-invalid");

        }
        else {
                node.classList.remove("is-invalid");
                node.classList.add("is-valid");
        }

}

function validateDnifield(event) {
        var dni = event.target;

        dniValue = parseInt(dni.value);

        if (isNaN(dniValue) || dniValue <= 0) {
                dni.classList.remove("is-valid")
                dni.classList.add("is-invalid")
        }
        else {
                dni.classList.remove("is-invalid")
                dni.classList.add("is-valid")
        }
}