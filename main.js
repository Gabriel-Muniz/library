console.log("It's working?");

const myLibrary = [];

function Book(title, author, pages, readed = false) {
  this.name = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
}

Book.prototype.updateReadStatus = function () {
  this.readed = !this.readed;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Add books manually
const book1 = new Book("Cujo", "Stephen King", 373, true);
const book2 = new Book("Eragon", "Christopher Paolini", 460, true);
const book3 = new Book("A maldição de titã", "Rick Riordan", 316, true);
const book4 = new Book("A cidade do medo", "Gertrude Barrows Bennett", 303);
const book5 = new Book("A divina comédia", "Dante Alighieri", 335);

myLibrary.push(book1, book2, book3, book4, book5);

//            !-----DOM-----!

const content = document.querySelector(".content");

myLibrary.forEach((book) => {

  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");


  const bookTitle = document.createElement("h2");
  bookTitle.classList.add("book-title");
  bookTitle.textContent = book.name;

  const bookAuthor = document.createElement("span");
  bookAuthor.classList.add("book-author");
  bookAuthor.textContent = book.author;

  const bookPages = document.createElement("span");
  bookPages.textContent = book.pages;
  bookPages.classList.add('book-pages')

  bookCard.append(bookTitle, bookAuthor, bookPages);

  content.appendChild(bookCard);
});
