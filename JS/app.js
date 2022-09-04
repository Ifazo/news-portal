const loadMenu = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => displayMenu(data.data.news_category));
};

const displayMenu = (menus) => {
  const menuContainer = document.getElementById("menu-bar");
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
  for (const card of cards.data) {
    // console.log(card.author.name);
    cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
    <p>${card.author.name}</p>
  `;
    cardContainer.appendChild(cardDiv);
  }
}

loadMenu();

// const cardAuthorImg = card.data[0].image_url;
// const cardTitle = card.data[0].title;
// const cardImg = card.data[0].thumbnail_url;
// const cardView = card.data[0].total_view;
