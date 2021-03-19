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
