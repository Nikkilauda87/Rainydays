const jacketID = document.querySelector(".JacketID");
const priceTag = document.querySelector(".dollar-decorations");
const choosenColor = document.querySelector(".choosen-color");
const choosenSize = document.querySelector(".choosen-size");
const sizeLabel = document.querySelector(".sizeLabel");
const container = document.querySelector(".productdetail-collector");
const storProduct = [];
let count = 0;

const queryString = document.location.search;

const params = new URLSearchParams(queryString);


const id = params.get("id");
const price = params.get("price");
const color = params.get("color");
const size = params.get("size");
let sizeMod = "";





if (size === "small") {
    sizeMod = "S";
}
else if (size === "medium") {
    sizeMod = "M";
}
else if (size === "large") {
    sizeMod = "L";
}
else {
    sizeMod = "?";
}

const idNumber = parseInt(id);
console.log(color);

/*
for (let i = 1; i < 13; i++) {
    if (idNumber === i) {
        console.log(i);
        //detailContainer.innerHTML = `<h1>test</h1>`;
        //productdetail.innerHTML += `<p>Jacket${idNumber}</p>`
               //jacketID.innerHTML = `Jacket ${idNumber}`
                //priceTag.innerHTML = `${price} DOLLARS`;
        //choosenColor.innerHTML += `<p> testing </p>`;
        //choosenColor.innerHTML += `<style: "color = ${color}"> </style>`;
                //choosenColor.style.color = `${color}`;
                 //choosenColor.style.fontSize = "30px";
        //console.dir(choosenColor.style);
        //classList.add("content-item");
        //choosenSize.innerHTML = `<label for=Size>test</label>`;
                 //sizeLabel.innerHTML = `${sizeMod}`;
        //sizeLabel.innerHTML = `"M"`;
    }    
}*/




container.innerHTML = 
        `
        <div class="productdetails">
        <div class="productdetail-line">
        <p>Jacket ${idNumber}</p>
        <span class="star-decorations"><l class="fas fa-star"></l></span>
        <span class="star-decorations"><l class="fas fa-star"></l></span>
        <span class="star-decorations"><l class="fas fa-star"></l></span>
        <span class="star-decorations"><l class="fas fa-star"></l></span>
        <span class="star-decorations"><l class="fas fa-star"></l></span>
        <span class="dollar-decorations">${price} DOLLARS</span>
      </div>
        <span class="jacketspesification-font">color:</span>
        <span class="shirt-decorations"><m class="fas fa-tshirt choosen-color" style='color:${color}; font-size:30px'</m></span>
        <span class="jacketspesification-font">size:</span>
        <div class="size-collector">
            <div>
              <input type="checkbox" name="Size" value="Size" id="Size" class="choosen-size">
              <label class="sizeLabel" for="Size">${sizeMod}</label>
            </div>
          </div>   
</div>
<div class="button-index"><a href="checkout.html">Go to checkout</a></div>
</div>`;



