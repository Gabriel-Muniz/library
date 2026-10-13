const myLibrary = [];

function Book(title, author, pages, isRead = false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.changeStatus = function () {
    this.isRead = !this.isRead;
}

function addBookToLibrary(title, author, pages, status) {
    let bookTitle = title;
    let bookAuthor = author;
    let bookPages = pages;

    let newBook = new Book(bookTitle, bookAuthor, bookPages, status)

    myLibrary.push(newBook);
    // console.log(newBook);
}

const testBook1 = new Book('Cujo', 'Stephen King', '373', true);
const testBook2 = new Book('Eragon', 'Christopher Paolini', '466', true);
const testBook3 = new Book('O Ladrão de Raios', 'Rick Riordan', '385', true);
const testBook4 = new Book('Aniquilação', ' Jeff Vandermeer', '196');

myLibrary.push(testBook1, testBook2, testBook3, testBook4)

const booksContainer = document.querySelector('.books-container');


function updateBooksContainer(removeBook = false) {

    if (removeBook) {
        booksContainer.removeChild(removeBook);
        return;
    }

    myLibrary.map((bookObject => {
        const checkIfRendered = booksContainer.querySelector(`[data-book-id='${bookObject.id}']`)
        if (checkIfRendered) return;

        const bookBody = document.createElement('div');
        bookBody.classList.add('book-body');
        bookBody.dataset.bookId = bookObject.id;
        bookBody.dataset.bookStatus = bookObject.isRead;

        const bookAuthor = document.createElement('div');
        bookAuthor.classList.add('book-author');
        bookAuthor.textContent = bookObject.author;

        const bookTitle = document.createElement('div');
        bookTitle.classList.add('book-title');
        bookTitle.textContent = bookObject.title;

        const bookPages = document.createElement('div');
        bookPages.classList.add('book-pages');
        bookPages.textContent = bookObject.pages;

        const btnDeleteBook = document.createElement('button');
        btnDeleteBook.classList.add('btn-delete-book');
        btnDeleteBook.textContent = 'Delete';

        const bookMarker = document.createElement('span');
        bookMarker.classList.add('book-status-marker');
        if (bookObject.isRead) {
            bookMarker.classList.add('read')
        }


        bookBody.append(bookAuthor, bookTitle, bookPages, bookMarker, btnDeleteBook)

        booksContainer.appendChild(bookBody);
    }))
}

const newBookForm = document.querySelector('#new-book-form');

const modalHandler = () => {
    const initialBookForm = document.querySelector('#initial-book-form');
    const inInitialBookTitle = initialBookForm.querySelector('#initial_book_title');
    const inInitialBookAuthor = initialBookForm.querySelector('#initial_book_author');

    const inBookTitle = newBookForm.querySelector('#book_title');
    const inBookAuthor = newBookForm.querySelector('#book_author');
    const inBookPages = newBookForm.querySelector('#book_pages');

    if (inInitialBookTitle.value) {
        inBookTitle.value = inInitialBookTitle.value;
        inBookTitle.removeAttribute('autofocus');
        inBookAuthor.setAttribute('autofocus', true);
    }

    if (inInitialBookAuthor.value) {
        inBookAuthor.value = inInitialBookAuthor.value;
        inBookAuthor.removeAttribute('autofocus');
        inBookPages.setAttribute('autofocus', true);
    }
}

const deleteBook = (bookToDeleteId) => {
    const bookIndex = myLibrary.findIndex((bookObject) => (bookObject.id === bookToDeleteId));
    const bookElement = booksContainer.childNodes[bookIndex];
    myLibrary.splice(bookIndex, 1);

    updateBooksContainer(bookElement);
}

const formHandler = () => {
    const inBookTitle = newBookForm.querySelector('#book_title').value;
    const inBookAuthor = newBookForm.querySelector('#book_author').value
    const inBookPages = newBookForm.querySelector('#book_pages').value
    const inBookStatus = newBookForm.querySelector('input[type=radio]:checked').value;

    console.log(inBookStatus);

    addBookToLibrary(inBookTitle, inBookAuthor, inBookPages, inBookStatus);
    updateBooksContainer()
}

const btnModal = document.querySelector('.btn-add-book-form');
const btnSubmitNewBook = document.querySelector('.btn-save-book-form');

newBookForm.addEventListener('submit', (e) => {
    formHandler();
    e.preventDefault()
})

btnModal.addEventListener('click', (e) => {
    const formModal = document.querySelector('#new-book-dialog');

    modalHandler();
    formModal.showModal();
})

booksContainer.addEventListener('click', (e) => {
    const targetBook = e.target.closest('.book-body');
    const targetBookId = (targetBook) ? targetBook.dataset.bookId : null;

    if (e.target.classList.contains('btn-delete-book')) {
        console.log(targetBookId);

        deleteBook(targetBookId)
        return;
    }

    if (e.target.classList.contains('book-status-marker')) {
        let targetBookStatus = targetBook.dataset.bookStatus;
        myLibrary.find(bookObject => bookObject.id === targetBookId)
            .changeStatus();

        targetBook.dataset.bookStatus = (targetBookStatus === 'true') ? 'false' : 'true';

    }
})

// btnModal.click();
updateBooksContainer()