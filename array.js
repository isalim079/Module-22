const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student ={
    id: 121,
    class: 11,
    name: "Agun"
}
function add(num1, num2) {
    return num1 + num2;
}
const friends = [13, 14, 11, 17, 21, 16, 15, 20];      //typeof diye array check kora jay na. friends console log korle object show kore. jekhane friends hocche array.
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);     //friends array holeo show kortece object hisebe
console.log(Array.isArray(friends));     //ekhon array hole true dibe. na hole false.
console.log(typeof add);

// Concat ------------------------------------

const newFriendsAge = [12, 13, 22, 234, 43];
const allFriends = newFriendsAge.concat(friends);    //concat er maddhome 2 ta array eksathe add kore
console.log(allFriends);