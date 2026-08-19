//Salary bonus//


let salary = 150000;
let experience = 6;

if (experience >= 10) {
    bonus = salary * 20 / 100;
}
else if (experience >= 5) {
    bonus = salary * 10 / 100;
}
else if (experience >= 2) {
    bonus = salary * 5 / 100;
}
else {
    bonus = 0;
}

let finalsalary = salary + bonus;

console.log("originalSalary:", salary);
console.log("bonus:", bonus);
console.log("finalSalary:", finalsalary);
