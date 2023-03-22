const data = [
  {
    name: "Jhon Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Sindy Allen",
    age: 27,
    gender: "female",
    lookingfor: "male",
    location: "Los Angeles LA",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "Will Zack",
    age: 39,
    gender: "male",
    lookingfor: "female",
    location: "New York NY",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Sarah Willians",
    age: 42,
    gender: "famale",
    lookingfor: "male",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

document.addEventListener("DOMContentLoaded", showProfile);

document.getElementById("next").addEventListener("click", showProfile);

const profiles = profileIterator(data);

function showProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile) {
    document.getElementById("profile-display").innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">Name: ${currentProfile.name}</li>
          <li class="list-group-item">Age: ${currentProfile.age}</li>
          <li class="list-group-item">Location: ${currentProfile.location}</li>
          <li class="list-group-item">Gender: ${currentProfile.gender}</li>
          <li class="list-group-item">Preference: ${currentProfile.lookingfor}</li>
        </ul>
      `;

    document.getElementById("image-display").innerHTML = `
        <img src="${currentProfile.image}">
      `;
  } else {
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}
