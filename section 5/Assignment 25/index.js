let age = 44;
let numberOfTickets = 3;

let ticketPrice;

if (age < 0) {
    console.log("Invalid age");
} else if (age < 12) {
    ticketPrice = 100;
} else if (age <= 59) {
    ticketPrice = 200;
} else {
    ticketPrice = 120;
}

if (age >= 0) {
    let total = ticketPrice * numberOfTickets;

    console.log("Ticket Price: " + ticketPrice);
    console.log("Total: " + total);
}