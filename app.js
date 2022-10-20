const body = document.querySelector("body");
const button = document.querySelector(".newBook");
let myLibrary = [];
button.addEventListener('click', addBookToLibrary);

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
  addBookToDisplay();
  return;
}

function addBookToDisplay() {
  for(let book of myLibrary){
    let p = document.createElement("p");
    body.appendChild(p);
    p.innerHTML = book.title;
  }
}