//initial variables
let firstNum=1;
let secondNum=1;
let operator="+";

//basic math functions
function add(a,b){
    return parseInt(a)+parseInt(b);
}
function subtract(a,b){
    return parseInt(a)-parseInt(b);
}
function multiply (a,b){
    return a*b;
}
function divide (a,b){
    return a/b;
}
function operate(firstNum,operator,secondNum){
    console.log(operator);
    switch(operator){
        case "+":
            return add(firstNum,secondNum);
        case "-":
            return subtract(firstNum,secondNum);
        case "*":
            return multiply(firstNum,secondNum);
        case "/":
            return divide(firstNum,secondNum);
    };
};