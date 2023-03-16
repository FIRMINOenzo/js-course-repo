const github = new GitHub(),
  ui = new UI(),
  $searchUser = document.querySelector("#search-user");

$searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText != "") {
    github
      .getUser(userText)
      .then((res) => {
        if (res.profile.message === "Not Found") {
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          ui.clearAlert();
          ui.showProfile(res.profile);
          ui.showRepos(res.repos);
        }
      })
      .catch((err) => console.log(err));
  } else {
    ui.clearProfile();
  }
});
