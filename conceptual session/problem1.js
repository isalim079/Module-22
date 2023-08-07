

function isInteger(number){
    if(typeof number !== "number"){
        return "Please provide a number";
    }
    if (number % 1 === 0) {
        return true;
    }
    else{
        return false;
    }
}
console.log(isInteger(11));