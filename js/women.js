const resultsContainer = document.querySelector(".jacket-container");

const url = "https://keano.one/wp-json/wc/store/products?per_page=20";

async function fetchJacket() {
    

    try {
        const response = await fetch(url);

        
        const json = await response.json();

        console.log(json);
        

        resultsContainer.innerHTML = "";

        const products = json;
        console.log(products[0].name);
        //const prices = json.prices;
        console.log(products[7].categories[0].name);
        console.log(typeof(products[7].categories[0].name));
        //const images = json.images[0];
        
        products.forEach(function(product) {

            if (product.categories[0].name === "women") {

            resultsContainer.innerHTML += `     <div class="item">
                                                <a href="jacketX.html?id=${product.id}">
                                                <div class="jacket_picture">
                                                <img
                                                src="${product.images[0].src}"
                                                alt="picture of
                                                jacket"
                                                class="jacket_image"
                                                />
                                                </div>
                                                </a>

                                                <div class="jacket-specifications-container">
                                                <div>
                                                <span class="star-decorations"><l class="fas fa-star"></l></span>
                                                <span class="star-decorations"><l class="fas fa-star"></l></span>
                                                <span class="star-decorations"><l class="fas fa-star"></l></span>
                                                <span class="star-decorations"><l class="fas fa-star"></l></span>
                                                <span class="star-decorations"><l class="fas fa-star"></l></span>
                                              </div>
                                                <span class="jacket-decorations">${product.name}</span>
                                                <span class="color-decorations">3 colors</span>
                                                <span class="shirt-decorations"><m class="fas fa-tshirt"></m></span>
                                                <span class="shirt-decorations"><m class="fas fa-tshirt"></m></span>
                                                <span class="shirt-decorations"><m class="fas fa-tshirt"></m></span>
                                                <span class="dollar-decorations">${product.prices.price} POUNDS</span>
                                              </div>


                                                </div>
                                            `;
                                        }
        });
      
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchJacket();