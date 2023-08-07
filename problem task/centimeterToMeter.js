function centimeterToMeter(cm) {
    if(typeof cm !== "number") {
        console.log("Please enter a valid positive number");
    }
    else{
        let meter = cm * 0.01;
        let meters = meter.toFixed(2);
        console.log("Your answer is: ", parseFloat(meters)); 
        return meters;
    }
    
}
let cm = 815;
centimeterToMeter(cm);