document.addEventListener("DOMContentLoaded", getChoices);
document.querySelector("form").addEventListener("submit", getJokes);
document.querySelector("#clear-jokes").addEventListener("click", clearJokes);

function getChoices() {
  let response;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/categories", true);

  xhr.onload = function () {
    if (this.status === 200) {
      response = JSON.parse(this.responseText);

      const $categories = document.querySelector("#categories");

      response.forEach((category) => {
        let option = document.createElement("option");
        option.value = category;
        option.innerText = category;

        $categories.appendChild(option);
      });
    }
  };

  xhr.send();
}

function getJokes(e) {
  e.preventDefault();

  const $category = document.querySelector("#categories");

  const xhr = new XMLHttpRequest();

  if ($category.value === "any") {
    xhr.open("GET", `https://api.chucknorris.io/jokes/random/`, true);
  } else {
    xhr.open(
      "GET",
      `https://api.chucknorris.io/jokes/random?category=${$category.value}`,
      true
    );
  }

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      const $jokes = document.querySelector(".jokes");

      const li = document.createElement("li");
      li.innerText = response.value;

      $jokes.appendChild(li);
    }
  };

  xhr.send();
}

function clearJokes() {
  document.querySelector(".jokes").innerHTML = "";
}
