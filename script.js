const testBtn = document.querySelector(".test");
const container = document.querySelector(".content-container");
const dialog = document.querySelector(".form-modal");
const bookForm = document.getElementById("add-book-form");
const saveBtn = document.querySelector(".save-btn");
const myLibrary = [];

function Book(author, title, pages, readed) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readed = readed;

  myLibrary.push(this);
}
function addBookToLybrary() {
  let inputTitle = document.querySelector("#title");
  let inputAuthor = document.querySelector("#author");
  let inputPages = document.querySelector("#pages");
  let inputReaded = document.querySelector('input[name="radio"]:checked');

  new Book(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputReaded.value
  );

  console.log(inputTitle.value, inputAuthor.value, inputPages.value, inputReaded.value);;
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addBookToLybrary();
});

const updateLibrary = () => {
  myLibrary.forEach((book) => {
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

    clone = temp.content.cloneNode(true);

    container.appendChild(clone);
  });
};

testBtn.addEventListener("click", () => {
  dialog.showModal();
});

let book0 = new Book("Eu", "Meu Livro", 2, true);
let book1 = new Book("Tu", "teu Livro", 100, true);
let book2 = new Book("Biblia", "Jesus himself", 1000, false);
let book3 = new Book("Em", "Pé na rede", 459, true);
