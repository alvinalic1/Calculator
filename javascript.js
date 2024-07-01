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
    "/" : divide()
}


let number1, operator, number2;

const operate = function(number1, operator, number2){
    // let answer;
    // switch(operator.toString()){
    //     case "+":
    //         // console.log(add(number1, number2));
    //         answer = add(number1, number2);
    //         break;
    //     case "-":
    //         // console.log(subtract(number1, number2));
    //         answer = subtract(number1, number2);
    //         break;
    //     case "*":
    //         // console.log(multiply(number1, number2));
    //         answer = multiply(number1, number2);
    //         break;
    //     case "/":
    //         // console.log(divide(number1, number2));
    //         answer = divide(number1, number2);
    //         break;
    //     default:
    //         console.log("ERROR");
    // }
    // return answer;

    let correctFuntion = operatorObject[operator.toString()];
    // console.log(correctFuntion);
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
