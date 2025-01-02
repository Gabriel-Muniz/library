console.log("It's working?");

const myLibrary = [];

function Book(title, author, pages, readed = false){
  this.name = title;
  this.author = author;
  this.page = pages;
  this.readed = readed;
}

Book.prototype.updateReadStatus = function(){
  this.readed = !this.readed;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}