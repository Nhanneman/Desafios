
email = $("#sendEmail");

var inputemail = $("#inputText");


email.click(function () {

    if (inputemail.val().indexOf("@") == -1 ||
        inputemail.val().indexOf(".") == -1 ||
        inputemail.val().indexOf("com") == -1) {
        alert("Email incorrecto!!")


        return false;

    }
    else {
        alert("Email correcto!!")


    }
}
)
