
//simple calculator//

let firstNumber = 90;
let SecondNumber = 0;
let operator = "%" ;

switch (operator) {
    case "+":
        console.log("result:", firstNumber + SecondNumber);
        break;


    case "-":
        console.log("result:", firstNumber - SecondNumber);
        break;


    case "*":
        console.log("result:", firstNumber * SecondNumber);
        break;


    case "/":
        if (SecondNumber === 0) {
            console.log("cannot divide with zero ")
        } else {
            console.log("result:", firstNumber / SecondNumber);
        }
        break;


    case "%":
        if (SecondNumber === 0) {
            console.log("cannot find remainder with zero");
        } else {
            console.log("result:", firstNumber % SecondNumber);
        }
        break;

    default: {
        console.log("invalid operator");
    }
}

