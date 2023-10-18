let string = "";
let buttons = document.querySelectorAll('.button') // It Will Select The All Queries That Belong to The Button Class.
Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'c') {
            string = ""
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})