const myLibrary = [];
const removedBooks = [];
function Book(title, author, pages, status = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.status ? "readed" : "not readed"
  }`;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218, true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 324, true);
const book3 = new Book("1984", "George Orwell", 328, false);
const book4 = new Book("Pride and Prejudice", "Jane Austen", 279, true);
const book5 = new Book("The Catcher in the Rye", "J.D. Salinger", 277, false);

myLibrary.push(book1, book2, book3, book4, book5);

// DOM STUFF //
const tableBody = document.querySelector("tbody");

const frm = document.querySelector("form");
const btnAddBook = document.querySelector(".btn-add-book");

tableBody.addEventListener("click", (e) => {
  const targetRow = e.target.closest(".book-row");
  const bookIndex = Number(targetRow.dataset.id);

  if (e.target.classList.contains("delete-btn")) {
    deleteBook(bookIndex);
  }
  if (e.target.classList.contains("book-status")) {
    changeBookStatus(e.target.closest(".book-status"), bookIndex);
  }
});

btnAddBook.addEventListener("click", (e) => {
  e.preventDefault();

  const inTitle = document.querySelector(".inTitle");
  const inAuthor = document.querySelector(".inAuthor");
  const inPages = document.querySelector(".inPages");
  const inReaded = document.querySelector("fieldset > input").checked;

  const newBook = new Book(
    inTitle.value,
    inAuthor.value,
    inPages.value,
    inReaded
  );

  inTitle.value = inAuthor.value = inPages.value = "";
  inReaded.checked = true;

  addBookToLibrary(newBook);
  UpdateTable();
});

function UpdateTable() {
  myLibrary.forEach((book) => {
    const verifyBook = document.querySelector(
      `[data-id="${myLibrary.indexOf(book)}"]`
    );

    if (verifyBook || removedBooks.includes(book)) {
      //Checking if there is a row with the index already and skipping if it does
      return;
    }

    const tbody = document.querySelector("tbody");
    const template = document.querySelector(".book-template");

    const clone = template.content.cloneNode(true);
    const row = clone.querySelector(".book-row");
    row.setAttribute("data-id", myLibrary.indexOf(book));

    let bookInfo = clone.querySelectorAll("td");
    bookInfo[0].textContent = book.title;
    bookInfo[1].textContent = book.author;
    bookInfo[2].textContent = book.pages;
    bookInfo[3].firstChild.textContent = book.status ? "Readed" : "Not readed";

    tbody.appendChild(clone);
  });
}

function deleteBook(index) {
  const bookToRemove = document.querySelector(`[data-id="${index}"]`);
  tableBody.removeChild(bookToRemove);
  removedBooks.push(myLibrary[index]);
}

function changeBookStatus(bookStatus, book) {
  myLibrary[book].status = !myLibrary[book].status;

  
  const auxStatus = myLibrary[book].status ? "Readed" : "Not readed";

  bookStatus.textContent = auxStatus;
  console.log(auxStatus);
}

UpdateTable();
