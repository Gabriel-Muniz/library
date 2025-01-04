console.log("It's working?");

const myLibrary = [];
const deletedBooks = [];

function Book(title, author, pages, readed = false) {
  this.title = title;
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

function populateLibrary() {
  myLibrary.forEach((book, index) => {
    let aux = false;

    aux = deletedBooks.find((bookTrash) => bookTrash === book);

    if (aux) return;

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.dataset.id = index;
    const bookTitle = document.createElement("h2");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("span");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = book.author;

    const bookPages = document.createElement("span");
    bookPages.textContent = book.pages;
    bookPages.classList.add("book-pages");

    const bookButtons = document.createElement("div");
    bookButtons.classList.add("book-buttons");

    const readedBook = document.createElement("button");
    readedBook.classList.add("btn-readed");
    readedBook.textContent = "Readed";

    const deleteBook = document.createElement("button");
    deleteBook.classList.add("btn-delete");
    deleteBook.textContent = "Delete";

    bookButtons.append(readedBook, deleteBook);

    bookCard.append(bookTitle, bookAuthor, bookPages, bookButtons);

    content.appendChild(bookCard);
  });
}

/*       Get book form        */

const addBook = document.querySelector("form>button");

addBook.addEventListener("click", () => {
  const inTitle = document.querySelector("#inTitle").value;

  const inAuthor = document.querySelector("#inAuthor").value;

  const inPages = document.querySelector("#inPages").value;

  const inReaded = document.querySelector(
    'input[name="inReaded"]:checked'
  ).value;

  const newBook = new Book(inTitle, inAuthor, inPages, inReaded);

  myLibrary.push(newBook);

  populateLibrary();

  event.preventDefault();
});

/*         Cards buttons        */

content.addEventListener("click", (e) => {
  let targetDelete = e.target.closest(".btn-delete");

  if (targetDelete) {
    targetDelete = targetDelete.closest(".book-card");
    deletedBooks.push(myLibrary[targetDelete.dataset.id]);
  }

  let targetReaded = e.target.closest(".btn-readed");

  if (targetReaded){
    targetReaded = targetReaded.closest('.book-card').dataset.id;

    myLibrary[targetReaded].updateReadStatus();
  }

  clearDisplay();
  return;
});

function clearDisplay(){
  content.textContent = '';
  populateLibrary();
}

populateLibrary();