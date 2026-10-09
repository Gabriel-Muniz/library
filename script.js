const myLibrary = [];

function Book(id, title, author, pages, isRead = false) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.changeStatus = function(){
    this.isRead = !this.isRead;
}

function addBookToLibrary() {
    let bookId = crypto.randomUUID();
    let bookTitle = prompt('Title: ');
    let bookAuthor = prompt('Author: ');
    let bookPages = prompt('Pages: ');

    let newBook = new Book(bookId, bookTitle, bookAuthor, bookPages)

    myLibrary.push(newBook);
    console.log(newBook);
}

const testBook1 = new Book(crypto.randomUUID(), 'Cujo', 'Stephen King', '373', true);
const testBook2 = new Book(crypto.randomUUID(), 'Eragon', 'Christopher Paolini', '466', true);
const testBook3 = new Book(crypto.randomUUID(), 'O ladrão de raios', 'Rick Riordan', '385', true);
const testBook4 = new Book(crypto.randomUUID(), 'Aniquilação', ' Jeff Vandermeer', '196');

myLibrary.push(testBook1, testBook2, testBook3, testBook4)
