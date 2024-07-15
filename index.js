

let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', cal);
});

function cal(e) {
    let 
    Content = e.target.innerHTML;

    if (
        Content === "=") {
        if (string == "") {
            exit;
        }
        try {
            string = eval(string).toString();
        } catch (e) {
            string = "Error";
        }
    } else if (
        Content === "clr") {
        string = "";
    } else {
        string += 
        Content;
    }
    updateInputValue();
}

function updateInputValue() {
    const inputField = document.querySelector('input');
    inputField.value = string;

    if (string.length > 15) {
        inputField.style.textAlign = "left";
    } else {
        inputField.style.textAlign = "right";
    }
}