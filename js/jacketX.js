const spesificJacetContainer = document.querySelector(".productdetail-collector");
const spesificJacetPictureContainer = document.querySelector(".productdetailpicture-collector");


const jacketID = document.querySelector(".JacketID");
const priceTag = document.querySelector(".dollar-decorations");



const yellow = document.querySelector("#Yellow-shirt");
const green = document.querySelector("#Green-shirt");
const blue = document.querySelector("#Blue-shirt");
const small = document.querySelector("#Small");
const medium = document.querySelector("#Medium");
const large = document.querySelector("#Large");

let colorChoice ="";
let sizeChoice ="";





const href = document.querySelector("#button-to-chart");


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);
const idNumber = parseInt(id);

const url = "https://keano.one/wp-json/wc/store/products?per_page=20";


async function fetchSpesificJacket() {
    

    try {
        const response = await fetch(url);

        
        const json = await response.json();

        console.log(json);
        

        spesificJacetContainer.innerHTML = "";

        const products = json;
        //console.log(products[0].name);
        //console.log(products[0].id);
        const prices = json.prices;
        //console.log(products[7].categories[0].name);
        //console.log(typeof(products[7].categories[0].name));
        //const images = json.images[0];
        
        products.forEach(function(product) {

            if (product.id === idNumber) {


                spesificJacetPictureContainer.innerHTML = `    <div class="jacket_picture">
                                                                <img
                                                                src="${product.images[0].src}"
                                                                alt="picture of
                                                                jacket"
                                                                class="jacket_image"
                                                                />
                                                                </div>
                                                                `;
                
                
                
                
                                                                

                spesificJacetContainer.innerHTML = `    <div class="productdetails">
                                                        <div class="productdetail-line">
                                                        <p class="JacketID">${product.name}</p>
                                                        <span class="star-decorations"><l class="fas fa-star"></l></span>
                                                        <span class="star-decorations"><l class="fas fa-star"></l></span>
                                                        <span class="star-decorations"><l class="fas fa-star"></l></span>
                                                        <span class="star-decorations"><l class="fas fa-star"></l></span>
                                                        <span class="star-decorations"><l class="fas fa-star"></l></span>
                                                        <span class="dollar-decorations">${product.prices.price} POUNDS</span>
                                                        </div>
                                                        <span class="jacketspesification-font">Choose color:</span>
                                                        <input type="radio" name="color" value="Yellow-shirt" id="Yellow-shirt" class="Shirt Yellow-shirt">
                                                        <label for="Yellow-shirt"><m class="fas fa-tshirt"></m></label>
                                                        <input type="radio" name="color" value="Green-shirt" id="Green-shirt" class="Shirt Green-shirt">
                                                        <label for="Green-shirt"><m class="fas fa-tshirt"></m></label>
                                                        <input type="radio" name="color" value="Blue-shirt" id="Blue-shirt" class="Shirt Blue-shirt">
                                                        <label for="Blue-shirt"><m class="fas fa-tshirt"></m></label>
                                                        <span class="jacketspesification-font">Choose size:</span>
                                                        <div class="size-collector">
                                                        <div>
                                                        <input type="radio" name="size" value="Small" id="Small" class="choosen-size">
                                                        <label for="Small">S</label>
                                                        <input type="radio" name="size" value="Medium" id="Medium" class="choosen-size">
                                                        <label for="Medium">M</label>
                                                        <input type="radio" name="size" value="Large" id="Large" class="choosen-size">
                                                        <label for="Large">L</label>
                                                        </div>
                                                        </div>   
                                                        </div>
                                                        ${product.description}
                                                        <div class="button-index" id="button-to-chart"><a href="">Add to basket</a></div>
                                                         `;
                                        }
        });
      
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchSpesificJacket();


































//const idNumber = parseInt(id);



for (let i = 1; i < 13; i++) {
    if (idNumber === i) {
        console.log(i);
        //detailContainer.innerHTML = `<h1>test</h1>`;
        //productdetail.innerHTML += `<p>Jacket${idNumber}</p>`
        jacketID.innerHTML = `Jacket ${idNumber}`
        priceTag.innerHTML = `${price} DOLLARS`;

    }
    
}

function whichColor() {

    if (yellow.checked) {
        colorChoice = "yellow";
    }
    else if (green.checked) {
        colorChoice = "green";
    }
    else if (blue.checked) {
        colorChoice = "blue";
    }
    else {
        colorChoice = "";
    }
    console.log(colorChoice);
    return colorChoice;
}

function whichSize() {

    if (small.checked) {
        sizeChoice = "small";
    }
    else if (medium.checked) {
        sizeChoice = "medium";
    }
    else if (large.checked) {
        sizeChoice = "large";
    }
    else {
        sizeChoice = "";
    }
    console.log(sizeChoice);
    return sizeChoice;
}

yellow.addEventListener("change", whichColor);
yellow.addEventListener("change", checkProduct);
green.addEventListener("change", whichColor);
green.addEventListener("change", checkProduct);
blue.addEventListener("change", whichColor);
blue.addEventListener("change", checkProduct);

small.addEventListener("change", whichSize);
small.addEventListener("change", checkProduct);
medium.addEventListener("change", whichSize);
medium.addEventListener("change", checkProduct);
large.addEventListener("change", whichSize);
large.addEventListener("change", checkProduct);
//href.addEventListener("click", checkProduct);

checkProduct();



function checkProduct () {
    href.innerHTML = `<a href="chart.html?id=${idNumber}&price=${price}&color=${colorChoice}&size=${sizeChoice}">Add to basket</a>`;

}





//end



/*
//const detailContainer = document.querySelector(".productdetails");
//const productdetail = document.querySelector(".productdetail-line");
const jacketID = document.querySelector(".JacketID");
const priceTag = document.querySelector(".dollar-decorations");
//const buttonToChart = document.querySelector("#button-to-chart");


const yellow = document.querySelector("#Yellow-shirt");
const green = document.querySelector("#Green-shirt");
const blue = document.querySelector("#Blue-shirt");
const small = document.querySelector("#Small");
const medium = document.querySelector("#Medium");
const large = document.querySelector("#Large");
//const colorClass = document.querySelector("Shirt");
let colorChoice ="";
let sizeChoice ="";

//console.log(yellow.checked);
//console.dir(yellow);



//const href = document.querySelector("#button-index.a");
const href = document.querySelector("#button-to-chart");


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
const price = params.get("price");

//console.log(id);
const idNumber = parseInt(id);
//console.log(typeof(id));
//console.log(typeof(idNumber));
//console.log(idNumber);
//console.log(price);


for (let i = 1; i < 13; i++) {
    if (idNumber === i) {
        console.log(i);
        //detailContainer.innerHTML = `<h1>test</h1>`;
        //productdetail.innerHTML += `<p>Jacket${idNumber}</p>`
        jacketID.innerHTML = `Jacket ${idNumber}`
        priceTag.innerHTML = `${price} DOLLARS`;

    }
    //checkProduct();
}

function whichColor() {

    if (yellow.checked) {
        colorChoice = "yellow";
    }
    else if (green.checked) {
        colorChoice = "green";
    }
    else if (blue.checked) {
        colorChoice = "blue";
    }
    else {
        colorChoice = "";
    }
    console.log(colorChoice);
    return colorChoice;
}

function whichSize() {

    if (small.checked) {
        sizeChoice = "small";
    }
    else if (medium.checked) {
        sizeChoice = "medium";
    }
    else if (large.checked) {
        sizeChoice = "large";
    }
    else {
        sizeChoice = "";
    }
    console.log(sizeChoice);
    return sizeChoice;
}

yellow.addEventListener("change", whichColor);
yellow.addEventListener("change", checkProduct);
green.addEventListener("change", whichColor);
green.addEventListener("change", checkProduct);
blue.addEventListener("change", whichColor);
blue.addEventListener("change", checkProduct);

small.addEventListener("change", whichSize);
small.addEventListener("change", checkProduct);
medium.addEventListener("change", whichSize);
medium.addEventListener("change", checkProduct);
large.addEventListener("change", whichSize);
large.addEventListener("change", checkProduct);
//href.addEventListener("click", checkProduct);

checkProduct();



function checkProduct () {
    href.innerHTML = `<a href="chart.html?id=${idNumber}&price=${price}&color=${colorChoice}&size=${sizeChoice}">Add to basket</a>`;

}



//href.addEventListener("click", checkProduct);


//console.log(whichColor(yellow, green, blue));





/*
yellow.addEventListener("change", whichColor(yellow, green, blue));
green.addEventListener("change", whichColor(yellow, green, blue));
blue.addEventListener("change", whichColor(yellow, green, blue));*/

//console.log(whichColor(yellow, green, blue));

//end

