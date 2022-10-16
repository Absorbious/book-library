const body = document.querySelector("body");
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
  let title = prompt("What is the title?");
  let author = prompt("Who is the author?");
  let pages = parseInt(prompt("How many pages?"));
  let read = prompt("Have you read it? true / false");
  let newBook = new book(title, author, pages, read);
  myLibrary.push(newBook);
  // addBookToDisplay();
  return;
}

function addBookToDisplay() {
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");

  p.innerText = newBook.title;
  p2.innerText = newBook.author;
  p3.innerText = newBook.pages;
  p4.innerText = newBook.read;
}