fetch("")
  .then(function (response) {
    return response.json();
  })
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("eh indenfor html").textContent = product.productdisplayname;
}
