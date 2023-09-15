/* function to add */
function add(a, b) {
    return a + b;
}

/* function to subtract */
function sub(a, b) {
    return a - b;
}

/* function to multiply */
function mul(a, b) {
    return a * b;
}

/* function to divide */
function div(a, b) {
    return a / b;
}

/* function to return remainder */
function mod(a, b) {
    return a % b;
}

let val1 = 0;
let val2 = 0;
let operator = '';

/* function to calculate */
function operate(num1, opera, num2) {
    switch (opera) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            sub(num1, num2);
            break;
        case '*':
            mul(num1, num2);
            break;
        case '/':
            div(num1, num2);
            break;
        case '%':
            mod(num1, num2);
            break;
        default:
            return 'ERROR!';
            break;
    }
}

/* declaring variables */
const btn = document.querySelectorAll('.btn');


/* adding button functionality */
btn.forEach(button => {
    const btnValue = button.textContent;
    button.addEventListener('click', () => {
        console.log(btnValue)
    });
});