const add = function(number1, number2){
    return number1+number2;
}

const subtract = function(number1, number2){
    return number1-number2;
}

const multiply = function(number1, number2){
    return number1*number2;
}

const divide = function(number1, number2){
    return number1/number2;
}

const operatorObject ={
    "+" : add,
    "-" : subtract,
    "*" : multiply,
    "/" : divide
}


let number1 = "";
let operator;
let number2 = "";
let total = "";
let operatorclicked = false;

const operate = function(number1, operator, number2){

    let operation = operator.toString();
    let correctFuntion = operatorObject[operation];
    return correctFuntion(number1, number2);
}


console.log(operate(5, "-", 5));
console.log(operate(5, "*", 5));
console.log(operate(5, "/", 5));
console.log(operate(5, "+", 5));
console.log(operate(3, "/", 0));
console.log(operate(0, "/", 3));
console.log(operate(1, "*", 100));
console.log(operate(50, "-", 5));
console.log(operate(0, "-", 5));

let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

let clear = document.getElementById("clear");
let pos_neg = document.getElementById("pos-neg");
let percent = document.getElementById("percentage");
let division = document.getElementById("divide");
let multiplication = document.getElementById("multiply");
let subtraction = document.getElementById("subtract");
let addition = document.getElementById("add");
let decimal = document.getElementById("decimal");
let equals = document.getElementById("equals");

let largeDisplay = document.getElementById("Value");
let miniDisplay = document.getElementById("mini-display")

const numberButtonArray = [zero, one, two, three, four, five, six, seven, eight, nine];
const otherButtons = [[addition, "+"], [subtraction, "-"], [multiplication, "*"], [division, "/"]]

for(let i = 0; i < otherButtons.length; i++){
    let currentButton = otherButtons[i][0];
    console.log(currentButton);
    let currentOperator = otherButtons[i][1];
    console.log(currentOperator)
    currentButton.addEventListener("click", () =>{
        operator = currentOperator;
        operatorclicked = true;
        miniDisplay.value += operator
        largeDisplay.value='';
    })
}
    

//figure out how to do multiple operations 
for (let i = 0; i <= 9; i++) {
    numberButtonArray[i].addEventListener("click", () => {
        let number = i;
        largeDisplay.value += number;
        miniDisplay.value += number;
        if (operatorclicked === false) {
            number1 += number;
        } else {
            number2 += number;
        }
    })
};

clear.addEventListener("click", () =>{
    number1 = "";
    number2 = "";
    largeDisplay.value = "";
    miniDisplay.value = "";
    operatorclicked = false;
})


equals.addEventListener("click", () =>{
    console.log(number1);
    console.log(operator);
    console.log(number2);
    console.log(Number(total));

    if(Number(total) != 0){
        largeDisplay.value = operate(Number(total), operator, Number(number2));
        total = largeDisplay.value;
    }
    else{
        largeDisplay.value = operate(Number(number1), operator, Number(number2));
    }
})

