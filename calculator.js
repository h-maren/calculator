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
const clearButton=document.querySelector(".clear");

numButtons.forEach((button)=>{
    button.addEventListener("click", () => {
        let buttonText=button.textContent;
        console.log(`First num, operator, second num flags: ${firstNumFlag},${operatorFlag},${secondNumFlag}`);
        if((firstNumFlag==1)&&(operatorFlag==1)){
            //first clear the display 
            display.textContent="";
            //now we're doing secondNum
            secondNumFlag=1;
            console.log("on second number now");
        }
        display.textContent+=buttonText;
        inputValue=display.textContent;
        console.log(inputValue);
        return inputValue;
    });
});


operatorButtons.forEach((button)=>{
    button.addEventListener("click", () => {
        //operator has been selected so we set the flag
        console.log(inputValue);
        if(operatorFlag==0){//operator hasn't been selected yet
            operator=button.textContent;
            console.log(operator);
            operatorFlag=1;
        }
        else if((operatorFlag==1)&&((firstNumFlag==0)||(secondNumFlag==0))){
            //break out of code if operator is set but not all numbers are and clear all values
            alert("Double operators!");
            clearAllValues();
        }
        if((firstNumFlag==0)&&(secondNumFlag==0)){
            firstNumFlag=1;
            firstNum=inputValue;
            console.log(firstNum);
        };
        //clicking another operator after putting in second number should follow equals operator (relevant if statement is already in the equals sign)
        console.log(`First num, operator, second num flags: ${firstNumFlag},${operatorFlag},${secondNumFlag}`);
        equalFunction();
    });
});


//equals sign does the calculation
function equalFunction () {
    if((firstNumFlag==1)&&(operatorFlag==1)&&(secondNumFlag==1)){
        secondNum=inputValue;
        console.log(secondNum);
        console.log(`First num, operator, second num: ${firstNum}, ${operator},${secondNum}`);
        let result=operate(firstNum,operator,secondNum);
        console.log(result);
        display.textContent=result;
        //after this, the result is now the firstNum (for additional operator), and clear the secondNum and operator
        firstNum=result;
        secondNum="";
        secondNumFlag=0;
    };
};

//function for clicking equals sign or for 
equalsButton.addEventListener("click", () => {
    equalFunction();
    operatorFlag=0;
});

//when you press clear it clears all values
clearButton.addEventListener("click", clearAllValues);

function clearAllValues() {
    display.textContent="";
    firstNum="";
    secondNum="";
    operator="";
    firstNumFlag=0;
    secondNumFlag=0;
    operatorFlag=0;
    inputValue=0;
};

