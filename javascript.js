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


let number1, operator, number2;

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

const display = document.querySelector('.display');

function updateDisplay(){
    const display = document.querySelector('.display');
    
}

function buttonlisteners(){

}

const one = document.querySelector('#1');
one.addEventListener('click', () =>{
    const display = document.getElementById('1');
    let ran = document.createTextNode(1)
    display.value = 1;
})
