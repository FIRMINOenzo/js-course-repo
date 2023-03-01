class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const $list = document.getElementById("book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

    $list.appendChild(row);
  }

  createAlert(message, className) {
    const div = document.createElement("div");

    div.classList.add("alert", className);

    div.appendChild(document.createTextNode(message));

    const $container = document.querySelector(".container"),
      $form = document.querySelector("form");

    $container.insertBefore(div, $form);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }

  removeFromList(element) {
    element.parentElement.parentElement.remove();

    Store.removeBookfromLS(
      element.parentElement.parentElement.firstElementChild.innerText
    );
  }
}

class Store {
  static getBooks = (key) => {
    let books;

    if (!localStorage.getItem(key)) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem(key));
    }

    return books;
  };

  static addBookToLS = (title, author, isbn) => {
    const LSkey = "books";

    let books = Store.getBooks(LSkey);

    const bookToAdd = {
      title: title,
      author: author,
      isbn: isbn,
    };

    books.push(bookToAdd);

    localStorage.setItem(LSkey, JSON.stringify(books));
  };

  static removeBookfromLS = (title) => {
    const LSkey = "books";

    let books = Store.getBooks(LSkey);

    books.forEach((book, index) => {
      if (book.title.toLowerCase() === title.toLowerCase()) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem(LSkey, JSON.stringify(books));
  };
}

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

    Store.addBookToLS(book.title, book.author, book.isbn);

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

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const ui = new UI();

  const LSkey = "books";

  const books = Store.getBooks(LSkey);

  console.log(books);

  books.forEach((book) => {
    book = new Book(book.title, book.author, book.isbn);

    ui.addBookToList(book);
  });
});
