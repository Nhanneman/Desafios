function NewStudents(firstName, lastName, dni, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dni = dni;
    this.email = email;
}
var students = {
    firstName: "Juan",
    lastName: "Peréz",
    dni: 22999333,
    email: "juan@gmail.com",
}
var liNode = document.getElementById("22999333")


function createStudentNode(NewStudents) {
    var liNode = document.createElement("li")
    liNode.className = "list-group-item"
    liNode.innerHTML =
        "<h1>" +
        students.firstName + students.lastName +
        "</h1> <h3> dni:" +
        students.dni +
        "</h3><p>E-mail:" +
        students.email +
        "</p>"
    return liNode
}
createStudentNode(students);

console.log(students);