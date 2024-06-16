//initial variables
let firstNum="";
let secondNum="";
let operator="";

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

//takes the operation and returns which function to use
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

//when clicking on buttons, put in display
const operatorButtons=document.querySelectorAll(".operator");
//console.log(displayText);
const numButtons=document.querySelectorAll(".num");
//console.log(numButtons);
let display=document.querySelector(".display");

numButtons.forEach((button)=>{
    button.addEventListener("click", () => {
        let buttonText=button.textContent;
        display.textContent+=buttonText;
        let inputValue=display.textContent;
        console.log(inputValue);
        return inputValue;
    })
});

let firstNumFlag=0; //this flag tells whether or not first number was already put in
let secondNumFlag=0; //this flag tells whether or not second number was already put in

