fetch("https://kea-alt-del.dk/t7/api/products?limit=20")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#ProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = product.productdisplayname;

  document.querySelector("main").appendChild(copy);
}

/*      <template id="ProductTemplate">
            <article class="Product">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/1573.webp"
                    alt="Sahara Team India Fanwear Round Neck Jersey">
                <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
                <p class="subtle">Tshirts | Nike</p>
                <p class="price">DKK 1595.-</p>
                <a href="produkt.html">Read more</a>
            </article>
        </template>  */

/* Object { id: 1526, gender: "Unisex", category: "Accessories", subcategory: "Bags", 
articletype: "Backpacks", season: "Fall", productionyear: 2010, usagetype: "Sports", 
productdisplayname: "Big Cat Backpack Black", price: 1299, … } */
