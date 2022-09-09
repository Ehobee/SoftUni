function oldLibrary(input) {

    let index = 0;
    let favoriteBook = input[index];
    index++;
    let checking = input[index];
    index++;
    let booksCounter = 0;
    let isFound = false;

    while (checking !== "No More Books") {

        let currentBook = checking;

        if (currentBook === favoriteBook) {
            console.log(`You checked ${booksCounter} books and found it.`);
            isFound = true;
            break;
        }
        checking = input[index];
        index++;
        booksCounter++;

    }
    if (!isFound) {
        console.log("The book you search is not here!")
        console.log(`You checked ${booksCounter} books.`)
    }

}
oldLibrary(["Troy",
"Stronger",
"Life Style",
"Troy"])




