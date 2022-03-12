const API_URL = "https://api.github.com/users/";
const card = document.querySelector("#app");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

async function getUser(name) {
  const response = await fetch(API_URL + name);
  const responseData = await response.json();

  createCard(responseData);
}

function createCard(user) {
  card.innerHTML = `
    <div class="card">
      <div class="card-head">
        <img src="${user.avatar_url}" alt="${user.name}"/>
      </div>
      <div class="card-body">
        <h3>${user.name ? user.name : ""}</h3>
        <p>${user.bio ? user.bio : ""}</p>
        <ul class="card-info">
          <li>${user.public_repos} <span>Public repositories</span></li>
          <li>${user.followers} <span>Followers</span></li>
          <li>${user.following} <span>Following</span></li>
        </ul>
      </div>
      <button class="btn">
        <a href="${user.html_url}" target="blank">
          Go to github
        </a>
      </button>
    <div>
  `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
