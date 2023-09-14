let display = document.getElementById("display");
let question=document.getElementById("history");
let expression = "";

document.querySelectorAll(".calculator-button").forEach(button => {
    button.addEventListener("click", () => handleButtonClick(button));
});

function handleButtonClick(button) {
    const buttonText = button.textContent;

    if (buttonText === "C") {
        clearDisplay();}
      else if(buttonText === "DEL"){
        singledelete();  
    } else if (buttonText === "+/-") {
        toggleSign();
    } else if (buttonText === "√") {
        calculatesquareroot(); 
    } else if (buttonText === "=") {
        calculateResult();
    } else {
        appendToDisplay(buttonText);
    }
}

function appendToDisplay(value) {
    expression += value;
    if(expression.length>22){
        display.classList.add("scroll");
        }
        if(expression.length<25){
            display.classList.remove("scroll");
            }    
    display.textContent = expression;
}

function clearDisplay() {
    question.textContent="";
    expression = "";
    display.textContent = "0";
    display.classList.remove("scroll");
}
function singledelete(){
    expression=expression.slice(0,-1);
    display.textContent=expression;
}

function toggleSign() {
    if (expression.startsWith("-")) {
        expression = expression.slice(1);
    } else {
        expression = "-" + expression;
    }
    display.textContent = expression;
}
function calculatesquareroot() {
    expression =Math.sqrt(expression);
    expression =expression.toString();
    display.textContent=expression;
}


function calculateResult() {
    try {
        const result = eval(expression);
        const formattedResult = parseFloat(result.toFixed(10));
        if(expression.length<35){
            question.textContent=expression;
        }
        else{
            question.textContent='Too long';
            question.style.opacity=0.5;
        }
        display.textContent = formattedResult;
        expression = formattedResult.toString();
    } catch (error) {
        display.textContent = "Error";
    }
}

