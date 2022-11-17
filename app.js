const body = document.querySelector("body");
const button = document.querySelector(".newBook");
const libraryDiv = document.querySelector(".library")
let myLibrary = [];
button.addEventListener('click', addBookToLibrary);
let removeButton = document.createElement('button');
removeButton.className = "removeButton";
removeButton.textContent = "Remove Book"
let readButton = document.createElement('button');
readButton.className = "readButton";
readButton.textContent = "Read / Not read";

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
    let div = document.createElement("div");
    div.className = "bookCard"
    body.appendChild(div)
    let p = document.createElement("p");
    div.appendChild(p);
    libraryDiv.appendChild(div);
    let newAddedBook = myLibrary.slice(-1);
    console.log(newAddedBook[0].title);
    p.innerHTML = newAddedBook[0].title;
    p.appendChild(removeButton);
    p.appendChild(readButton);
    p.dataset.title = newAddedBook[0].title;
    event.preventDefault();
  }
