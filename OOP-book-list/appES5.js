function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {}

UI.prototype.addLocalStorage = (title, author, isbn) => {
  let books;

  if (!localStorage.getItem("books")) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }

  bookToAdd = {
    title: title,
    author: author,
    isbn: isbn,
  };

  books.push(bookToAdd);

  localStorage.setItem("books", JSON.stringify(books));
};

UI.prototype.addBookToList = (book) => {
  const $list = document.getElementById("book-list");

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  $list.appendChild(row);

  // this.addLocalStorage(book.title, book.author, book.isbn);
};

UI.prototype.clearFields = () => {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

UI.prototype.createAlert = (message, className) => {
  const div = document.createElement("div");

  div.classList.add("alert", className);

  div.appendChild(document.createTextNode(message));

  const $container = document.querySelector(".container"),
    $form = document.querySelector("form");

  $container.insertBefore(div, $form);

  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 2000);
};

UI.prototype.removeFromList = (element) => {
  element.parentElement.parentElement.remove();
};

document.getElementById("book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  const ui = new UI();

  if (title === "" || author === "" || isbn === "") {
    ui.createAlert("Please, fill in all fields", "error");
  } else {
    const book = new Book(title, author, isbn);

    ui.addBookToList(book);

    ui.clearFields();

    ui.createAlert("Book added with succes!", "succes");
  }
});

document.querySelector("tbody").addEventListener("click", (e) => {
  e.preventDefault();

  const ui = new UI();

  if (e.target.className.includes("delete")) {
    ui.removeFromList(e.target);

    ui.createAlert("Book deleted with succes", "succes");
  }
});
