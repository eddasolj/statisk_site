fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#ProductTemplate").content;
  const copy = template.cloneNote(true);
}
