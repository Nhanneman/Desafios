function init(){
    var studentList = ["Max", "Tom", "Roc", "Mara", "Martin"];

    var studentsJSON = JSON.stringify(studentList);

    localStorage.setItem("students", studentsJSON);
}

function search(term){
    var students = JSON.parse(localStorage.getItem("students"));
    result = [];

    for(var i = 0; i < students.length; i++){
        if(students[i].indexOf(term) != -1){
            result.push(students[i]);
        }
    }

    return result;
}

var result = search("Max");

alert(result);



