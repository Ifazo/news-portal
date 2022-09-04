const loadMenu = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => displayMenu(data.data.news_category));
};

const displayMenu = (menus) => {
  const menuContainer = document.getElementById("menu-bar");
  menuContainer.textContent = "";
  for (const menu of menus) {
    const navContainer = menu.category_name;
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("col");
    menuDiv.innerHTML = `
      <button class="btn btn-primary" onclick="loadUrl('${menu.category_id}')">${navContainer}</button>
      `;
    menuContainer.appendChild(menuDiv);
  }
};

const loadUrl = (category_id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCard(data));
};

const displayCard = (cards) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.textContent = "";
  for (const card of cards.data) {
    // console.log(card.author.name);
    cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
          <div class="row">
              <div class="col-md-4">
                    <img src="${card.thumbnail_url}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.details}</p>
                        <div class="d-flex justify-content-between">
                        <div class="d-flex justify-content-start">
                        <img class="img-fluid rounded-circle" style="width: 50px; height: 50px;" src="${card.author.img}" alt="avater">
                        <p class="card-text"><small class="text-muted">Author : ${card.author.name}</small></p>
                        </div>
                        <div><p class="card-text"><small class="text-muted">Views: ${card.total_view}</small></p></div>
                        </div>
                    </div>
              </div>
          </div>
  `;
    cardContainer.appendChild(cardDiv);
  }
};

loadMenu();
