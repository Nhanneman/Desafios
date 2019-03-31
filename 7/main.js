
/*var text = ["Ed", "Edd", "Eddy" ];





var ulnode = document.getElementById("mainList")



for(var i= 0; i<text.length; i++){
    var liNode= document.createElement("li");
    liNode.textContent = text[i];
    liNode.className="list-group-item";

    ulnode.append(liNode);


}
*/


function newStudents(firstName, lastname, dni, email) {
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

function createStudentNode(newStudent) {
    var liNode = document.createElement("li")

    liNode.className = "list-group-item"

    liNode.innerHTML =
        "<h1>" +
        newStudent.firstName + newStudents.lastName +
        "</h1> <h3> dni:" +
        newStudent.dni +
        "</h3><p>E-mail:" +
        newStudent.email +
        "</p>"

    return liNode
}

console.log(createStudentNode(student));

