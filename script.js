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
  this.status = false;

  myLibrary.push(this);
}
function addBookToLybrary() {
  let inputTitle = document.querySelector("#title");
  let inputAuthor = document.querySelector("#author");
  let inputPages = document.querySelector("#pages");
  let inputReaded = document.querySelector('input[name="radio"]:checked');

  new Book(
    inputAuthor.value,
    inputTitle.value,
    inputPages.value,
    inputReaded.value
  );
  inputReaded = document.querySelector("input[name='radio']");

  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputReaded.checked = true;
}
function updateLibraryDisplay() {
  myLibrary.forEach((book, index) => {
    const alreadyShowing = document.querySelector(`[data-index="${index}"]`);

    let temp = document.getElementById("card-template");
    let clone = temp.content.cloneNode(true);
    const marker = clone.querySelector(".book-marker>path");

    if (typeof book.readed === "string") {
      book.readed = book.readed == "true" ? true : false;
    }
    book.readed ? (marker.style.fill = "green") : (marker.style.fill = "red");

    if (book.status) {
      return;
    }
    if (alreadyShowing) {
      return;
    }

    const bookCard = clone.querySelector(".book-card");
    const title = clone.querySelector(".book-title");
    const author = clone.querySelector(".book-author");
    const pages = clone.querySelector(".book-pages");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;

    bookCard.setAttribute("data-index", index);
    container.appendChild(clone);
  });
}

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-book")) {
    deleteBook(e.target);
  }
  if (e.target.matches(".book-marker, .book-marker *")) {
    changeRead(e.target);
  }
  console.log(e.target);
});

function changeRead(marker) {
  let bookCard = marker.closest(".book-card");
  let bookIndex = bookCard.getAttribute("data-index");
  if (myLibrary[bookIndex].readed) {
    myLibrary[bookIndex].readed = false;
  } else {
    myLibrary[bookIndex].readed = true;
  }

  myLibrary[bookIndex].readed ? (marker.style.fill = "green") : (marker.style.fill = "red");
  updateLibraryDisplay();
}

function deleteBook(button) {
  let bookCard = button.closest(".book-card");
  let bookIndex = bookCard.getAttribute("data-index");
  myLibrary[bookIndex].status = true;

  container.removeChild(bookCard);
  updateLibraryDisplay();
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
