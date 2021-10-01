/* Amount = how many books to add 
Placement = where to add them
Book data is in books.js 
*/
let bookShelf = function(amount, placement) {
    let counter = 0;
    let append = document.getElementsByClassName(placement)[0]
    for(let i = 0; i < amount; i++){
        let book = document.createElement('div')
        let bookImage = document.createElement('img')
        let bookScore = document.createElement('div')
        let bookTitle = document.createElement('H3')
        let bookAuthor = document.createElement('p')
        book.classList.add("book")
        
        bookImage.classList.add("book__image")
        bookImage.src = `images/${books[counter].image}`

        bookScore.classList.add("book__score")
        bookScore.innerHTML = books[counter].score

        bookTitle.classList.add("book__title")
        bookTitle.innerHTML = books[counter].title

        bookAuthor.classList.add("book__author")
        bookAuthor.innerHTML = books[counter].author



        book.appendChild(bookImage);
        book.appendChild(bookScore);
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        

        append.appendChild(book);
        counter ++; 
        console.log(append);
    }
}

bookShelf(6, "bookshelf__popular");


bookShelf(6, "bookshelf__new");