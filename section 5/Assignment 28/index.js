//Simple ATM menu//

let choice = 3;
let balance = 5000000;
let amount = 4000000;


switch (choice) {
    case 1:
        console.log("checkbalance:", balance)
        break;

    case 2:
        balance = balance + amount;
        console.log("amount:", amount);
        console.log("newbalance:" , balance);
        break;

    case 3:
        if (amount <= 0) {
            console.log("invalid withdraw");
        }
        else if (amount > balance) {
            console.log("insufficient balance");
        }
        else {
            balance = balance - amount;
            console.log("withdrawn successfully");
            console.log("remaining balance:", balance);
        }
}