function feetToInch(feet) {
    if(typeof feet !== "number") {
        console.log("Please enter a valid positive number");
    }
    else{
        let inch = feet * 12;
        console.log("Your answer is: ", inch)
        return inch;
    }
    
}
let feet = 12;
feetToInch(feet);
// console.log(feet, "feet: ", feetToInch(feet),"inch");