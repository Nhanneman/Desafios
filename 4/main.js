function Student(firstName, lastName, dni, email) {
//
    this.firstName = firstName;
//
    this.lastName = lastName;
//
    this.dni = dni;
//
    var id = getRandomInt(10);
//
    function getRandomInt(min) {
//
        return Math.floor(Math.random() * Math.floor(min));

    }
//
    this.getId = function () {
//       
        return id;
    }
//
    this.getFullName = function () {
//
        if (firstName !== undefined || lastName !== undefined) {
//
            return firstName + " " + lastName;
//
        } else {
//
            return "";
//
        }
    }
}
var students = [];
//
students.push(new Student("nestor", "portela", "1234567"));
//



for (var i = 0; i < students.length; i++) {//
    console.log("id: " + students[i].getId() +
//
        " fullName: " + students[i].getFullName());
//
}


console.log(students[0]);