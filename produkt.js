const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  const productImg = document.querySelector(".product_img img");
  const productText = document.querySelector(".product_text");

  productImg.src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  const priceText = document.createElement("h3");
  priceText.textContent = `Price: DKK ${product.price}`;
  productText.appendChild(priceText);

  const sizeText = document.createElement("h4");
  sizeText.textContent = `Size: ${product.size}`;
  productText.appendChild(sizeText);

  const stockText = document.createElement("h4");
  stockText.textContent = `In Stock: ${product.stock}`;
  productText.appendChild(stockText);

  // Add more lines here to populate other information like category, brand, etc.
}
