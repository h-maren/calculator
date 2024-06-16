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
        case "x":
            return multiply(firstNum,secondNum);
        case "/":
            return divide(firstNum,secondNum);
    };
};


let firstNumFlag=0; //this flag tells whether or not first number was already put in
let secondNumFlag=0; //this flag tells whether or not second number was already put in
let operatorFlag=0; //this flag tells whether operator has already been put in
let inputValue=0;

//when clicking on buttons, put in display
const operatorButtons=document.querySelectorAll(".operator");
//console.log(displayText);
const numButtons=document.querySelectorAll(".num");
//console.log(numButtons);
let display=document.querySelector(".display");
const equalsButton=document.querySelector(".equals");

numButtons.forEach((button)=>{
    button.addEventListener("click", () => {
        let buttonText=button.textContent;
        if((firstNumFlag==1)&&(operatorFlag==1)&&(secondNumFlag==0)){
            //first clear the display 
            display.textContent="";
            //now we're doing secondNum
            secondNumFlag=1;
        }
        display.textContent+=buttonText;
        inputValue=display.textContent;
        console.log(inputValue);
        return inputValue;
    });
});


operatorButtons.forEach((button)=>{
    button.addEventListener("click", () => {
        console.log(inputValue);
        operator=button.textContent;
        console.log(operator);
        //operator has been selected so we set the flag
        if(operatorFlag==0){//operator hasn't been selected yet
            operatorFlag=1;
        }
        if((firstNumFlag==0)&&(secondNumFlag==0)){
            firstNumFlag=1;
            firstNum=inputValue;
            console.log(firstNum);
        };
    });
});


//equals sign does the calculation
equalsButton.addEventListener("click", () => {
    if((firstNumFlag==1)&&(operatorFlag==1)&&(secondNumFlag=1)){
        secondNum=inputValue;
        console.log(secondNum);
        console.log(`First num, operator, second num: ${firstNum}, ${operator},${secondNum}`);
        let result=operate(firstNum,operator,secondNum);
        console.log(result);
        display.textContent=result;
    }
});