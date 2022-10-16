let myLibrary = [];

function book(title, author, pages, read) {
  // the constructor...
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
  // do stuff here
  let newBook = new book("Harry Potter", "JK Rowling", 554, true)
  myLibrary.push(newBook)
  return;
}