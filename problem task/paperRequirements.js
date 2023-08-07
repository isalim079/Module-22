//  paper count --> 
// book1 --> 100
// book2 --> 200
// book3 --> 300

function paperRequirements(book1, book2, book3){
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;

    let book1PageNeeded = book1 * book1Page;
    let book2PageNeeded = book2 * book2Page;
    let book3PageNeeded = book3 * book3Page;
    
    let totalPage = book1PageNeeded + book2PageNeeded + book3PageNeeded;
    console.log(totalPage);

    return totalPage;
}
// let booksNeeded = (10, 13, 14);
paperRequirements(10, 12, 14);
// paperRequirements(booksNeeded);