fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#ProductTemplate").content;
  const copy = template.cloneNode(true);

  const total = product.price - (product.price / 100) * product.discount;
  console.log(total);

  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".articletype").textContent = product.articletype;
  copy.querySelector(".brandname").textContent = product.brandname;
  copy.querySelector(".price span").textContent = product.price;
  copy.querySelector(".finalprice").textContent = total;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //Udsolgt produkt
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  copy.querySelector(".read_more").setAttribute("href", `produkt.html?id=${product.id}`);
  //
  document.querySelector("main").appendChild(copy);
}
