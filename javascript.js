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


let number1 = 0;
let operator;
let number2 = 0;
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
let three = document.getElementById("3");
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


one.addEventListener("click", () =>{
    let number = "1";
    largeDisplay.value += number;
    miniDisplay.value += number;
    if(operatorclicked === false){
        number1 += number;
    }else{
        number2 += number;
    }
})

addition.addEventListener("click", () =>{
    operator = "+";
    operatorclicked = true;
    miniDisplay.value += operator
    largeDisplay.value='';
})

two.addEventListener("click", () =>{
    let number = "2";
    largeDisplay.value += number;
    miniDisplay.value += number;
    if(operatorclicked === false){
        number1 += number;
    }else{
        number2 += number;
    }
})

equals.addEventListener("click", () =>{
    console.log(number1);
    console.log(operator);
    console.log(number2);
    largeDisplay.value = operate(Number(number1), operator, Number(number2));
})


