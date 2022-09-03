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
    .then((data) => menuDetail(data));
};

const menuDetail = (menu) => {
    console.log(menu);
}


loadMenu();

{
  /* <a href="https://openapi.programming-hero.com/api/news/category/{category_id}">${navContainer}</a> */
}
