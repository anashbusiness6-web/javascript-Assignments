//Simple ATM menu//

let choice = 3;
let balance = 10000;
let amount = 2000;

switch (choice) {
    case 1:
        console.log("Current Balance: ₹" + balance);
        break;

    case 2:
        balance = balance + amount;
        console.log("Money deposited successfully");
        console.log("New Balance: ₹" + balance);
        break;

    case 3:
        if (amount > balance) {
            console.log("Insufficient balance");
        } else {
            balance = balance - amount;
            console.log("Money withdrawn successfully");
            console.log("Remaining Balance: ₹" + balance);
        }
        break;

    case 4:
        console.log("Thank you. Goodbye!");
        break;

    default:
        console.log("Invalid choice");
}