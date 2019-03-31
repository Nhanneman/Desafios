function Student(firstName, lastName, dni, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dni = dni;
    this.email = email;
    var id = getRandomInt(10);

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    this.getId = function(){
        return id;
    }

    this.getFullName = function(){
        if(firstName !== undefined || lastName !== undefined){
            return firstName + " " + lastName;
        } else {
            return "";
        }
    }
}

var students = [];

students.push(new Student("Max", "Tomp", 32423234, "user1@mail.com"));
students.push(new Student("Tom", "Tomp", 32423234, "user2@mail.com"));
students.push(new Student("Algo", "Tomp", 32423234, "user3@mail.com"));

console.log(students);

for(var i = 0; i < students.length; i++){
    console.log("id: " + students[i].getId() + 
                " fullName: " + students[i].getFullName());
}