var inputText = document.getElementById("inputText");

inputText.onblur = validEmail;


function validEmail(event) {
    var emailNode = event.target;
    console.log(inputText.value);

    if (
        !emailNode.value ||
        emailNode.value.indexOf("@") === -1 ||
        emailNode.value.indexOf(".") === -1 ||
        emailNode.value.indexOf("com") === -1
    ) {
        emailNode.classList.remove("is-valid")
        emailNode.classList.add("is-invalid")
    } else {
        emailNode.classList.remove("is-invalid")
        emailNode.classList.add("is-valid")
    }
}

/*var inputText = document.getElementById('inputText')

inputText.onblur = showMessage

function showMessage(event) {
    var inputNode = event.target;

    if (!validateEmail(inputNode.value)) {
        inputNode.classList.remove('is-valid')
        inputNode.classList.add('is-invalid')
    } else {
        inputNode.classList.remove('is-invalid')
        inputNode.classList.add('is-valid')
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}*/