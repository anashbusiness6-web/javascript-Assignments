// Largest of three numbers//

let a = 0;
let b = -2;
let c = -1;

if (a > b && a > c) {
    console.log("greatest number is A");
}
else if (b > a && b > c) {
    console.log("greatest number is B");
}
else if (a === b && a === c && b === c) {
    console.log("All three numbers are equal");
}
else if (c > a && c > b) {
    console.log(" greatest number is C");
}
else {
    console.log("invalid numbers values");
}