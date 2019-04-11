function NewStudents(firstName, lastName, dni, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dni = dni;
    this.email = email;
}
var student = {
    firstName: "Juan",
    lastName: "Peréz",
    dni: 22999333,
    email: "juan@gmail.com",
}
var liNode = document.getElementById("22999333")


function createStudentNode(NewStudents) {
    var liNode = document.createElement("li")
    liNode.className = "list-group-item"
    liNode.textContent =
        "<h1>" +
        NewStudents.firstName + NewStudents.lastName +
        "</h1> <h3> dni:" +
        NewStudents.dni +
        "</h3><p>E-mail:" +
        NewStudents.email +
        "</p>"
    return liNode
}
createStudentNode(student);

console.log(student);