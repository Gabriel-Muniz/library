const container = document.querySelector(".books-container");

function createBookElement(book) {
  const bookRow = document.createElement("div");
  const bookTitle = document.createElement("div");
  const bookAuthor = document.createElement("div");
  const bookPages = document.createElement("div");
  const bookReaded = document.createElement("div");

  bookRow.classList.add("book-row");
  bookTitle.classList.add("book-title");
  bookAuthor.classList.add("book-author");
  bookPages.classList.add("book-pages");
  bookReaded.classList.add("book-readed");

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  bookReaded.textContent = book.readed;

  bookRow.append(bookTitle, bookAuthor, bookPages, bookReaded);
  container.appendChild(bookRow)
}

const myLibrary = [];

function Book(title, author, pages, readed = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
}

function addBookLibrary(book) {
  myLibrary.push(book);
}

/* TEST ZONE */
const book1 = new Book(
  "Percy jackson e o ladrão de raios",
  "Rick riordan",
  340,
  true
);

const book2 = new Book(
  "Percy jackson e o mar de monstros",
  "Rick riordan",
  374
);

addBookLibrary(book1);
addBookLibrary(book2);

myLibrary.map((book) =>
  /* console.log(
    `${book.title} by ${book.author}, ${book.pages} pages, ${
      book.readed ? "readed" : "not read yet"
    }`
  ) */

  createBookElement(book)
);


