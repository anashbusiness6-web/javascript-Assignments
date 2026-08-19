//restourent menu//

let choice = 5;
let quantity = 2;

let price;

switch (choice) {
    case 1:
        price = 150;
        break;
    case 2:
        price = 250;
        break;
    case 3:
        price = 180;
        break;
    case 4:
        price = 120;
        break;
    default:{
        console.log("invalid choice");
    }

}

if (choice >=1 && choice<=4){
    let total = price * quantity;
    console.log("total:"+total)
}