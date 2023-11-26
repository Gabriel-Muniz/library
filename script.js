const cardTemp = document.getElementsByTagName("template")[0];
const clone = cardTemp.content.cloneNode(true);
const container = document.querySelector(".content-container");
const myLibrary = [];

function Book(author, title, pages, readed) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readed = readed;
}
let book0 = new Book("Eu", "Meu Livro", 2, true);

container.appendChild(clone);
