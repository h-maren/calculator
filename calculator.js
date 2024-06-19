//initial variables
let firstNum=0;
let secondNum=0;
let operator="";

//basic math functions
function add(a,b){
    return Number(a)+Number(b);
}
function subtract(a,b){
    return Number(a)-Number(b);
}
function multiply (a,b){
    return a*b;
}
function divide (a,b){
    return a/b;
}

//takes the operation and returns which function to use
function operate(firstNum,operator,secondNum){
    //console.log(operator);
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
let decimalFlag=0; //if decimal has been selected;

//when clicking on buttons, put in display
const operatorButtons=document.querySelectorAll(".operator");
//console.log(displayText);
const numButtons=document.querySelectorAll(".num");
//console.log(numButtons);
let display=document.querySelector(".display");
const equalsButton=document.querySelector(".equals");
const clearButton=document.querySelector(".clear");
const decButton=document.querySelector(".decimal");
const backButton=document.querySelector(".backspace");

numButtons.forEach((button)=>{
    button.addEventListener("click", () => {
        let buttonText=button.textContent;
        //console.log(`First num, operator, second num flags: ${firstNumFlag},${operatorFlag},${secondNumFlag}`);
        if((firstNumFlag==1)&&(secondNumFlag==0)){
            //first clear the display 
            display.textContent="";
            //now we're doing secondNum
            secondNumFlag=1;
            //console.log("on second number now");
        }
        display.textContent+=buttonText;
        inputValue=Number(display.textContent);
        //console.log(inputValue);
        return inputValue;
    });
});

//adding decimal functionality
decButton.addEventListener("click", ()=> {
    if(decimalFlag==0){
        if((inputValue==0)&&(firstNumFlag==0)){
            display.textContent+="0.";
            //console.log(inputValue);
        }
        else if ((firstNumFlag==1)&&(secondNumFlag==0)){
            display.textContent="0.";
            secondNumFlag=1;
        }
        else {
            display.textContent+=".";
        }
    decimalFlag=1;
    }
});

operatorButtons.forEach((button)=>{
    button.addEventListener("click", () => {
        //operator has been selected so we set the flag
        //console.log(inputValue);
        //console.log(`Before operator selection - First num, operator, second num flags: ${firstNumFlag},${operatorFlag},${secondNumFlag}`);
        if(firstNumFlag==0){//operator hasn't been selected yet, after firstNum is being input
            firstNumFlag=1;
            firstNum=inputValue;
            decimalFlag=0;
            //console.log(firstNum);
            //console.log(operator);
            //operatorFlag=1;
        }
        else if((operatorFlag==1)&&(firstNumFlag==1)&&(secondNumFlag==1)){//this is case where we input 3 numbers but want to treat operator as equal sign (keep calculating)
            equalFunction();
        }
        /*else if((operatorFlag==0)&&(firstNumFlag==1)&&(secondNumFlag==0)){//this is case after pressing equal sign, but we want to keep calculating after
            operatorFlag=1;
            operator=button.textContent;
        }*/
        else if((operatorFlag==1)&&((firstNumFlag==0)&&(secondNumFlag==0))){
            //break out of code if operator is set but not all numbers are and clear all values
            alert("Double operators!");
            clearAllValues();
        };
        //clicking another operator after putting in second number should follow equals operator (relevant if statement is already in the equals sign)
        operatorFlag=1;
        operator=button.textContent;
        //console.log(`After operator selection - First num, operator, second num flags: ${firstNumFlag},${operatorFlag},${secondNumFlag}`);
        //console.log(`Input value is: ${inputValue}`);
    });
});


//equals sign does the calculation
function equalFunction () {
    if((firstNumFlag==1)&&(operatorFlag==1)&&(secondNumFlag==1)){
        secondNum=inputValue;
        //console.log(secondNum);
        if ((operator=="/")&&(secondNum==0)){
            alert("Divide by 0?!\nNot even Chuck Norris can do that!");
            clearAllValues();
        }
        else {
            let result=operate(firstNum,operator,secondNum);
            //console.log(result);
            display.textContent=Math.round(result*100000)/100000;
            //after this, the result is now the firstNum (for additional operator), and clear the secondNum and operator
            firstNum=result;
            secondNum="";
            secondNumFlag=0;
            operatorFlag=0;
            decimalFlag=0;
            //console.log("equals was executed!")
            //console.log(`First num, operator, second num: ${firstNum}, ${operator},${secondNum}`);
           // console.log(`First num, operator, second num flags: ${firstNumFlag},${operatorFlag},${secondNumFlag}`);
        }
    }
    else {
        alert("Not ready for equals yet!");
        clearAllValues();
    };
};

//function for clicking equals sign or for 
equalsButton.addEventListener("click", () => {
    equalFunction();
    //console.log(`First num, operator, second num flags: ${firstNumFlag},${operatorFlag},${secondNumFlag}`);
    //console.log(`First num, operator, second num: ${firstNum}, ${operator},${secondNum}`)
});

//when you press clear it clears all values
clearButton.addEventListener("click", clearAllValues);

//adding backspace
backButton.addEventListener("click", () =>{
    let lastCharacterIndex=display.textContent.length;
    let lastCharacter=display.textContent.slice(-1);
    let displayResult=display.textContent.slice(0,-1);
    display.textContent=displayResult;
    if(lastCharacter=="."){
        decimalFlag=0;
    }
    /*console.log(displayResult);
    console.log(lastCharacter);
    console.log(lastCharacterIndex);*/
});

function clearAllValues() {
    display.textContent="";
    firstNum=0;
    secondNum=0;
    operator="";
    firstNumFlag=0;
    secondNumFlag=0;
    operatorFlag=0;
    decimalFlag=0;
    inputValue=0;
};

