const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const productDetailTemplate = document.querySelector("#ProductDetailTemplate").content;

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  const productImg = document.querySelector(".product_img img");
  const productText = document.querySelector(".product_text");

  productImg.src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  const productDetailCopy = productDetailTemplate.cloneNode(true);

  //Price
  const priceText = productDetailCopy.querySelector("h3");
  priceText.textContent = `Price: DKK ${product.price}`;

  //Brand
  const brandText = productDetailCopy.querySelector(".brand");
  brandText.textContent = `Brand: ${product.brandname}`;

  //Category
  const categoryText = productDetailCopy.querySelector(".category");
  categoryText.textContent = `Category: ${product.articletype}`;

  //Udsolgt produkt
  if (product.soldout) {
    productDetailCopy.querySelector(".soldOut2").classList.add("soldOut");
  }
  productText.appendChild(productDetailCopy);

  //Discount Final Price
  if (product.discount) {
    productDetailCopy.querySelector(".discounted2").classList.add("discounted");
  }
  productText.appendChild(productDetailCopy);
  const total = product.price - (product.price / 100) * product.discount;
  productDetailCopy.querySelector(".finalprice").textContent = total;
}
