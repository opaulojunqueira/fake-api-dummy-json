async function getData() {
  await fetch("https://dummyjson.com/products/categories")
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        document.getElementById(
          "nav-links"
        ).innerHTML += `<li><a class="dropdown-item" onclick="getProductFind('${res[i]}')">${res[i]}</a></li>`;
      }
    });

  await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < res.products.length; i++) {
        res.products[i].images[0] != undefined
          ? res.products[i].images[0]
          : "https://novoemfolha.blogfolha.uol.com.br/files/2012/04/erro404_1.gif";

        document.getElementById(
          "top-products"
        ).innerHTML += `<div class="col-md-3 py-3 py-md-0">
        <div class="card">
            <img src="${res.products[i].images[0]}" alt="">
            <div class="card-body">
                <h3>${res.products[i].title}</h3>
                <p>${res.products[i].description}</p>
                <div class="star">
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                </div>
                <h5>$${res.products[i].price} <strike>$${
          res.products[i].price * 2
        }</strike> <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
            </div>
        </div>
    </div>`;
      }
    });
}

async function getProductFind(id) {
  document.getElementById("top-products").innerHTML = "";
  await fetch(`https://dummyjson.com/products/category/${id}`)
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i <= res.products.length; i++) {
        document.getElementById(
          "top-products"
        ).innerHTML += `<div class="col-md-3 py-3 py-md-0">
        <div class="card">
            <img src="${res.products[i].images[0]}" alt="">
            <div class="card-body">
                <h3>${res.products[i].title}</h3>
                <p>${res.products[i].description}</p>
                <div class="star">
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                </div>
                <h5>$${res.products[i].price} <strike>$${
          res.products[i].price * 2
        }</strike> <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
            </div>
        </div>
    </div>`;
      }
    });
}

getData();
