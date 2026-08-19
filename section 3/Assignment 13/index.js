//student grade//

let percentage = 100;

if(percentage<0 || percentage>100){
    console.log("invalid percentage")
}
else if(percentage>=90 ){
    console.log("Grade A");
}
else if(percentage>=80 ){
    console.log("Grade B");
}
else if(percentage>=70){
    console.log("Grade c");
}
else if(percentage>=60 ){
    console.log("Grade D");
}
else if(percentage>=40 ){
    console.log("Grade E");
}
else{
    console.log("failed")
}