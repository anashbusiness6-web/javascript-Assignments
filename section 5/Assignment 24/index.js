
//ATM transaction//

let balance = 5000000;
let withdrawAmount = 100;

if(withdrawAmount<=0){
    console.log("invalid withdraw");
}
else if(withdrawAmount>balance){
    console.log("insufficient balance");
}
else{
    balance = balance-withdrawAmount;
    console.log("withdraw successfully");
    console.log("remaining balance : ", balance);
    console.log("withrawAmount:" ,withdrawAmount);
}