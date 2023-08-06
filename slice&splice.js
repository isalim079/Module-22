const friends = [23, 23, 43, 12, 13, 43, 16, 43, 65, 34, 25, 87];
const partial = friends.slice(3, 9);    //3  idex theke 9 er ager index porjonto nibe
console.log(partial);
console.log(friends.splice(2, 3));      //index-2 theke er por 3 ghor nibe. baki gula baad diye dibe. 3 er jaygay 5 dile 5 ghor porjonto nibe.
let friend = [23, 54, 12, 14, 10, 54, 65, 65, 34, 756]
let testPartial = friend.splice(2, 4, 253, 432, 543);
console.log(testPartial);