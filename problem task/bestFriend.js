function bestFriend(names){

    let bestFr = "";
    // let foundBest = "";
    
    for(let i = 0; i < names.length; i++){
        let friend = names[i];

        if(friend.length > bestFr.length) {
            bestFr = friend;
            // foundBest = bestFr;
            
        }
    }
    // return foundBest;
       return bestFr;
}
let friendsName = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];
console.log(bestFriend(friendsName));
