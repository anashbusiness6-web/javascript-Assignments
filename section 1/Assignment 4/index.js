// Shopping Bill //

let price = 500;
let quantity = 3;

let originalBill = price*quantity;
let discount = originalBill*50/100;
let finalBill = originalBill - discount;

console.log("originalBill",originalBill);
console.log("discount",discount);
console.log("finalBill",finalBill);