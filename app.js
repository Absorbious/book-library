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
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('status').value;
  if((title !== '')||(author !== '')||(pages !== '')){
    let newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    addBookToDisplay();
  }else{
    alert('You have to write something');
  }
  event.preventDefault();
  return;
}

function addBookToDisplay() {
    let p = document.createElement("p");
    body.appendChild(p);
    let newAddedBook = myLibrary.slice(-1);
    console.log(newAddedBook[0].title);
    p.innerHTML = newAddedBook[0].title;
  }
