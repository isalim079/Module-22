function onlyPositive(numbers){
    let positiveNumbersList = [];
    for(let i = 0; i < numbers.length; i++){
        let positive = numbers[i];
        if(positive < 0){
            break;
        }
       else{
        positiveNumbersList.push(positive);
       } 
       
    }
    console.log(positiveNumbersList);
    // return "Your positive number list: " + positiveNumbersList;
}
let numbers = [45, 87, 96, 11, 63, -56, 71, 28];
onlyPositive(numbers);
// console.log(onlyPositive(numbers));