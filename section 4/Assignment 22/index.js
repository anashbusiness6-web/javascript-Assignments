//menu based-calculator//

let choice = 4;
let a = 9;
let b = 7;

switch (choice) {
    case 1:
        console.log("addition:", a + b);
        break;


    case 2:
        console.log("subtraction:", a - b);
        break;


    case 3:
        console.log("multiplication:", a * b);
        break;


    case 4:
        if (b === 0) {
            console.log("cannot divisible by 0");
        } else {
            console.log("division:", a / b);
        }
        break;


    case 5:
        if (b === 0) {
            console.log("cannot leave remainder with 0");
        } else {
            console.log("remainder:", a % b);
        }
        break;


}