const addBtn = document.querySelector(".add");
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

  myLibrary.forEach((book, index) => {
    const alreadyShowing = document.querySelector(`[data-index="${index}"]`);
    if (alreadyShowing) {
      return;
    }
    let temp = document.getElementById("card-template");
    let clone = temp.content.cloneNode(true);
  
    const bookCard = clone.querySelector(".book-card");
    const title = clone.querySelector(".book-title");
    const author = clone.querySelector(".book-author");
    const pages = clone.querySelector(".book-pages");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;

    bookCard.setAttribute("data-index", index);
    container.appendChild(clone);
  })
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addBookToLybrary();

  updateLibraryDisplay();
  
  dialog.close();
});

addBtn.addEventListener("click", () => {
  dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
});

let book0 = new Book("Eu", "Meu Livro", 2, true);
let book1 = new Book("Tu", "teu Livro", 100, true);
let book2 = new Book("Biblia", "Jesus himself", 1000, false);
let book3 = new Book("Em", "Pé na rede", 459, true);
updateLibraryDisplay();
