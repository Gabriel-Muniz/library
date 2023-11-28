const testBtn = document.querySelector(".test");
const container = document.querySelector(".content-container");
const dialog = document.querySelector(".form-modal");
const bookForm = document.getElementById("add-book-form");
const cancelBtn = document.querySelector(".cancel-btn");
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

  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
}
function updateLibraryDisplay() {
  /*
    here we gonna to add the array books to the books container, to do so we need
    a way to associate the index to the book attribute so for each we run this function we skip already added books
  */
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addBookToLybrary();
});

testBtn.addEventListener("click", () => {
  dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
});

let book0 = new Book("Eu", "Meu Livro", 2, true);
let book1 = new Book("Tu", "teu Livro", 100, true);
let book2 = new Book("Biblia", "Jesus himself", 1000, false);
let book3 = new Book("Em", "Pé na rede", 459, true);
