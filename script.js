const testBtn = document.querySelector(".test");
const container = document.querySelector(".content-container");
const myLibrary = [];

function Book(author, title, pages, readed) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readed = readed;

  myLibrary.push(this);
}
let book0 = new Book("Eu", "Meu Livro", 2, true);
let book1 = new Book("Tu", "teu Livro", 100, true);
let book2 = new Book("Biblia", "Jesus himself", 1000, false);
let book3 = new Book("Em", "Pé na rede", 459, true);

myLibrary.forEach(book => {
    let temp = document.querySelector("#card-template");
    let bookTitle = temp.content.querySelector(".book-title");
    let bookAuthor = temp.content.querySelector(".book-author");
    let bookPages = temp.content.querySelector(".book-pages");

    bookTitle.textContent = book.title;
    console.log(bookTitle.textcontent);
    bookAuthor.textContent = book.author;
    console.log(bookAuthor.textcontent);
    bookPages.textContent = book.pages;
    console.log(bookPages.textcontent);

    let clone = temp.content.cloneNode(true);


    
    container.appendChild(clone)

});
