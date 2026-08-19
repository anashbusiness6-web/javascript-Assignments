//Student result//

let maths = 70;
let science = 39;
let socialScience = 80;

if (maths < 40 || science < 40 || socialScience < 40) {
    console.log("failed");
}
else {
    let average = (maths + science + socialScience ) / 3
    console.log("average:", average)

    if (average >= 75) {

        console.log("Distinction");

    }
    else if (average>=60){
         console.log("first Division");
    }
    else if (average>=50){
         console.log("second division");
    }
    else{
         console.log("pass");
    }

}