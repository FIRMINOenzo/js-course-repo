const http = new EasyHTTP();

const data = {
  name: "Enzo",
  username: "FirmasAMV",
  email: "enzo@enzo.com",
};

const users = http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const post = http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const put = http
  .put("https://jsonplaceholder.typicode.com/users/1", data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const del = http
  .delete("https://jsonplaceholder.typicode.com/users/1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
