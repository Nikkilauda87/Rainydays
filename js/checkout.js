

document.cookie = "SameSite=None; Secure";

const form = document.querySelector("form");
const name = document.querySelector("#name");
const adress = document.querySelector("#adress");
const city = document.querySelector("#city");
const zipCode = document.querySelector("#zipCode");
const cardNumber = document.querySelector("#cardNumber");
const cardHolderName = document.querySelector("#cardHolderName");
const expireDate = document.querySelector("#expireDate");
const expireMonth = document.querySelector("#expireMonth");
const expireYear = document.querySelector("#expireYear");
const ccv = document.querySelector("#ccv");
const formFeedback = document.querySelector("#formFeedback");
const button = document.querySelector("purchase-submit");
let variableID = "";

/*const nameAccept =  document.querySelector("#nameAccept"),
const adressAccept =    document.querySelector("#adressAccept"),
const cityAccept =   document.querySelector("#cityAccept"),
const zipCodeAccept =    document.querySelector("#zipCodeAccept"),
const cardNumberAccept =    document.querySelector("#cardNumberAccept"),
const  cardHolderNameAccept =   document.querySelector("#cardHolderNameAccept"),
const expireDateAccept =    document.querySelector("#expireDateAccept"),
const  ccvAccept =   document.querySelector("#ccvAccept")*/



const arrayIDs = [
    document.querySelector("#nameError"),
    document.querySelector("#adressError"),
    document.querySelector("#cityError"),
    document.querySelector("#zipCodeError"),
    document.querySelector("#cardNumberError"),
    document.querySelector("#cardHolderNameError"),
    //document.querySelector("#expireDateError"),
    document.querySelector("#expireMonthError"),
    document.querySelector("#expireYearError"),
    document.querySelector("#ccvError")
    ]



arrayValidateFunctions = [
    checkLength(name.value, 2),
    checkLength(adress.value, 4),
    checkLength(city.value, 2),
    checkLength(zipCode.value, 2),
    checkLength(cardNumber.value, 16),
    checkLength(cardHolderName.value, 2),
    //checkLength(expireDate.value, 2),
    checkExpire(expireMonth.value),
    checkExpire(expireYear.value),
    checkLength(ccv.value, 3),
        
    ]

   

name.addEventListener("keyup", checkAcceptenceName);
adress.addEventListener("keyup", checkAcceptenceAdress);
city.addEventListener("keyup", checkAcceptenceCity);
zipCode.addEventListener("keyup", checkAcceptenceZipCode);
cardNumber.addEventListener("keyup", checkAcceptenceCardNumber);
cardHolderName.addEventListener("keyup", checkAcceptenceCardHolderName);
//expireDate.addEventListener("keyup", checkAcceptenceExpireDate);
expireMonth.addEventListener("change", checkAcceptenceExpireDate);
expireYear.addEventListener("change", checkAcceptenceExpireDate);
ccv.addEventListener("keyup", checkAcceptenceCcv);

function checkAcceptenceName () {

    if (checkLength(name.value, 2)) {
        document.querySelector("#nameAccept").style.display = "inline-block";
    }
    else {
        document.querySelector("#nameAccept").style.display = "none";
    }
        
}

function checkAcceptenceAdress () {

    if (checkLength(adress.value, 4)) {
        document.querySelector("#adressAccept").style.display = "inline-block";
    }
    else {
        document.querySelector("#adressAccept").style.display = "none";
    }
        
}

function checkAcceptenceCity () {

    if (checkLength(city.value, 2)) {
        document.querySelector("#cityAccept").style.display = "inline-block";
    }
    else {
        document.querySelector("#cityAccept").style.display = "none";
    }
        
}

function checkAcceptenceZipCode () {

    if (checkLength(zipCode.value, 2)) {
        document.querySelector("#zipCodeAccept").style.display = "inline-block";
    }
    else {
        document.querySelector("#zipCodeAccept").style.display = "none";
    }
        
}

function checkAcceptenceCardNumber () {

    if (checkLength(cardNumber.value, 16)) {
        document.querySelector("#cardNumberAccept").style.display = "inline-block";
    }
    else {
        document.querySelector("#cardNumberAccept").style.display = "none";
    }
        
}

function checkAcceptenceCardHolderName () {

    if (checkLength(cardHolderName.value, 2)) {
        document.querySelector("#cardHolderNameAccept").style.display = "inline-block";
    }
    else {
        document.querySelector("#cardHolderNameAccept").style.display = "none";
    }
        
}

function checkAcceptenceExpireDate () {

    if (checkExpire(expireMonth.value) && checkExpire(expireYear.value)) {
        document.querySelector("#expireDateAccept").style.display = "inline-block";
    }
    else {
        document.querySelector("#expireDateAccept").style.display = "none";
    }
        
}

function checkAcceptenceCcv () {

    if (checkLength(ccv.value, 3)) {
        document.querySelector("#ccvAccept").style.display = "inline-block";
    }
    else {
        document.querySelector("#ccvAccept").style.display = "none";
    }
        
}

/*
console.log(typeof(expireMonth.value));
console.log(expireMonth.value);
const test = parseInt(expireMonth.value);
console.log(typeof(test));
console.log(5-test);
if (expireMonth.value === "0") {
    document.querySelector("#expireDateAccept").style.display = "inline-block";
}
expireMonth.addEventListener("change", test);

function test() {
    console.log("test!!!");
}*/


// function to either submit (if everything is valid), or give feedback of whats wrong
function submitForm(event) {
    event.preventDefault();

    arrayValidateFunctions = [
        checkLength(name.value, 2),
        checkLength(adress.value, 4),
        checkLength(city.value, 2),
        checkLength(zipCode.value, 2),
        checkLength(cardNumber.value, 16),
        checkLength(cardHolderName.value, 2),
        //checkLength(expireDate.value, 2),
        checkExpire(expireMonth.value),
        checkExpire(expireYear.value),
        checkLength(ccv.value, 3),
            
        ]


    if (checkLength(name.value, 2) && checkLength(adress.value, 4) && checkLength(city.value, 2) && checkLength(zipCode.value, 2) && checkLength(cardNumber.value, 16) && checkLength(cardHolderName.value, 2) && checkExpire(expireMonth.value) && checkExpire(expireYear.value) && checkLength(ccv.value, 3)) {
        window.location = "success.html"; 
        formFeedback.style.display = "block";
        formFeedback.innerHTML = '<div class="feedback">The information has been accepted and sent</div>';
        form.reset();
        // reset the red "Not accepted" comment
        for (let i = 0; i < arrayValidateFunctions.length; i++) {
          
              let variableID = arrayIDs[i];
              variableID.style.display = "none"; 
        }
        
    }
    else {
        for (let i = 0; i < arrayValidateFunctions.length; i++) {
          let variableID = arrayIDs[i];
          if (!arrayValidateFunctions[i])  {
              
              variableID.style.display = "inline-block";
          }
          else {
              variableID.style.display = "none";
          }  
        }   
      }
}

form.addEventListener("submit", submitForm);




function checkLength(value, len) {
  if (value.trim().length >= len) {
      return true;
  } else {
      return false;
  }
}

function checkExpire(value) {
    //let temp = parseInt(value);
    if (value !== "0") {
        return true;
    } else {
        return false;
    }
  }







