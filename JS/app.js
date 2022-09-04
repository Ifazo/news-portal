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
      <button class="btn btn-outline-primary" onclick="loadUrl('${menu.category_id}')">${navContainer}</button>
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
    // console.log(card);
    cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
          <div class="row m-2">
              <div class="col-md-4">
                    <img src="${card.image_url}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                    <div class="card-body">
                        <h6 class="card-title">${card.title}</h6>
                        <p class="card-text">${card.details}</p>
                        <div class="d-flex justify-content-between">
                        <div class="d-flex justify-content-start">
                        <img class="img-fluid rounded-circle" style="width: 30px; height: 30px;" src="${card.author.img}" alt="avater">
                        <p class="card-text"><small class="text-muted">Author : ${card.author.name}</small></p>
                        </div>
                        <div><p class="card-text"><small class="text-muted">Views: ${card.total_view}</small></p></div>
                        <div><button type="button" class="m-2 btn btn-outline-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModal${card._id}">Preview</button></div>
                        </div>
                    </div>
              </div>
          </div>
  `;
    cardContainer.appendChild(cardDiv);
  }

  const modalContainer = document.getElementById("modal-container");
  modalContainer.textContent = "";
  for (const card of cards.data) {
  // console.log(card);
      modalDiv = document.createElement("div");
      modalDiv.classList.add("col");
      modalDiv.innerHTML = `
      <div class="modal fade" id="exampleModal${card._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">News Preview</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5 class="card-title">${card.title}</h5>
            <img src="${card.image_url}" class="img-fluid rounded-start" alt="...">
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
  </div>
      `;
      modalContainer.appendChild(modalDiv);
  }
};

loadMenu();
