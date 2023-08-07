/* 
  ১ । যদি টিকেট সংখ্যা ১০০ এর নিচে বা ১০০ পর্যন্ত হয় তবে প্রতি টিকেট এর দাম --> ১০০ টাকা
  ২ । যদি টিকেট সংখ্যা ১০০ এর উপরে হয় তবে ১০১ থেকে ২০০ পর্যন্ত টিকেট এর দাম --> ৯০ টাকা
  ৩ । যদি টিকেট সংখা ২০০ এর উপর হয় তবে ২০১ থেকে সব টিকেট --> ৭০ টাকা।
  (প্রোগ্রাম লিখতে হবে টিকেট কেনার। আমি যত টিকেট নিবো তার দাম দেখাবে উপরের দাম অনুযায়ী।)
*/

const ticket1 = 100;
const ticket2 = 90;
const ticket3 = 70;
function ticketPrice(ticketQuantity) {
    if (ticketQuantity <= 100) {
        let ticketPrice100 = 100 * ticketQuantity;
        // console.log(ticketPrice100);
        return ticketPrice100;
    }
    else if(ticketQuantity <= 200) {
        let ticketPrice200 = ((ticketQuantity - 100) * 90) + (10000);
        // console.log(ticketPrice200);
        return ticketPrice200;
    }
    else {
        let ticketPriceUp = ((ticketQuantity - 200) * 70) + (19000);
        // console.log(ticketPriceUp);
        return ticketPriceUp;
    }
}
let ticketQuantity = 101;
console.log("Your total Ticket price: ", ticketPrice(ticketQuantity),"tk");