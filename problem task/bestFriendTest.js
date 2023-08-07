function findBestFriend(friendsArray) {
    let longestName = "";
    let bestFriend = "";
    
    for (let i = 0; i < friendsArray.length; i++) {
        if (friendsArray[i].length > longestName.length) {
            longestName = friendsArray[i];
            bestFriend = longestName;
        }
    }
    return "Your best friend is: " + bestFriend;
}

const friends = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];
const result = findBestFriend(friends);
console.log(result);
















// function findBestFriend(friendsArray) {
//     if (!Array.isArray(friendsArray)) {
//         return "Invalid input: Please provide an array of friends.";
//     }
    
//     let longestName = "";
//     let bestFriend = "";
    
//     for (let i = 0; i < friendsArray.length; i++) {
//         if (typeof friendsArray[i] !== 'string') {
//             return "Invalid input: Friends array should contain only strings.";
//         }
        
//         if (friendsArray[i].length > longestName.length) {
//             longestName = friendsArray[i];
//             bestFriend = longestName;
//         }
//     }
    
//     if (bestFriend === "") {
//         return "No best friend found.";
//     }
    
//     return "Your best friend is: " + bestFriend;
// }

// const friends = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];
// const result = findBestFriend(friends);
// console.log(result);
