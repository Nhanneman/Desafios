
$(document).ready(function () {
    var firstNamenode = $("#firstName")
    var emailNode = $("#email")
    var textNode = $("#text")
    var buttonNode = $("#searchButton")

    firstNamenode.one("blur", validateField)

    emailNode.one("blur", validateEmail)

    textNode.one("blur", validateField)

    function validateField(event) {
        var fieldNode = $(this)

        var field = ""
        fieldNode.next().remove()

        if (!fieldNode.val()) {
            field = "Campo requerido"
        }

        if (field) {
            fieldNode.addClass("is-invalid")
            fieldNode.removeClass("is-valid")

            var parentNode = fieldNode.parent()

            parentNode.append("<div class='invalid-feedback'>" + field + "</div>")
        } else {
            fieldNode.addClass("is-valid")
            fieldNode.removeClass("is-invalid")
        }

        if (event.type === "blur") {
            fieldNode.on("input", validateField)
        }

        validateButton()
    }

    function validateEmail(event) {
        var fieldNode = $(this)

        var field = ""

        fieldNode.next().remove()

        var value = fieldNode.val()

        if (!value) {
            field = field + "Campo requerido "
        } else {
            if (value.indexOf("@") === -1) {
                field = field + "Debe contener arroba (@) "
            }
            if (value.indexOf(".") === -1) {
                field = field + "Debe contener punto (.) "
            }
        }

        if (field) {
            fieldNode.addClass("is-invalid")
            fieldNode.removeClass("is-valid")

            var parentNode = fieldNode.parent()

            parentNode.append("<div class='invalid - feedback'>" + field + "</div>")
        } else {
            fieldNode.addClass("is-valid")
            fieldNode.removeClass("is-invalid")
        }

        if (event.type === "blur") {
            fieldNode.on("input", validateEmail)
        }

        validateButton()
    }

    function validateButton() {
        var validInputNodes = $("#searchButton")

        if (validInputNodes.length === 3) {
            buttonNode.attr("disabled", false)
        } else {
            buttonNode.attr("disabled", true)
        }
    }
})