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
    console.log(newBook);
}

const testBook1 = new Book('Cujo', 'Stephen King', '373', true);
const testBook2 = new Book('Eragon', 'Christopher Paolini', '466', true);
const testBook3 = new Book('O Ladrão de Raios', 'Rick Riordan', '385', true);
const testBook4 = new Book('Aniquilação', ' Jeff Vandermeer', '196');

myLibrary.push(testBook1, testBook2, testBook3, testBook4)

function updateSidebarList() {

    const bookList = document.querySelector('ul.book-list');

    myLibrary.map((bookObject => {


        const bookListItem = document.createElement('li');
        bookListItem.classList.add('book-item');
        bookListItem.dataset.id = bookObject.id;

        const bookListTitle = document.createElement('span');
        bookListTitle.classList.add('book-title');
        bookListTitle.textContent = bookObject.title;

        const bookListAuthor = document.createElement('span');
        bookListAuthor.classList.add('book-author');
        bookListAuthor.textContent = bookObject.author + '.';

        bookListItem.append(bookListTitle)

        bookListItem.textContent += ' by '

        bookListItem.append(bookListAuthor)

        bookList.appendChild(bookListItem);

    }))
}

function updateBooksContainer() {
    const booksContainer = document.querySelector('.books-container');

    myLibrary.map((bookObject => {

        const checkIfRendered = booksContainer.querySelector(`[data-id='${bookObject.id}']`)
        if (checkIfRendered) return;

        const bookBody = document.createElement('div');
        bookBody.classList.add('book-body');
        bookBody.dataset.bookId = bookObject.id;
        bookBody.dataset.bookStatus = bookObject.isRead;

        const bookAuthor = document.createElement('div');
        bookAuthor.classList.add('book-author');

        const bookTitle = document.createElement('div');
        bookTitle.classList.add('book-title');

        const bookPages = document.createElement('div');
        bookPages.classList.add('book-pages');

        bookAuthor.textContent = bookObject.author;
        bookTitle.textContent = bookObject.title;
        bookPages.textContent = bookObject.pages;

        bookBody.append(bookAuthor, bookTitle, bookPages)

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

const formHandler = () => {
    const inBookTitle = newBookForm.querySelector('#book_title').value;
    const inBookAuthor = newBookForm.querySelector('#book_author').value
    const inBookPages = newBookForm.querySelector('#book_pages').value
    const inBookStatus = newBookForm.querySelector('input[checked]').value;

    addBookToLibrary(inBookTitle, inBookAuthor, inBookPages);
    updateSidebarList()
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


// btnModal.click();
updateSidebarList();
updateBooksContainer()