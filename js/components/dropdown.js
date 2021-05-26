// variables for dropdown menu
const navigationMen = document.querySelector("#nav-men");
const dropdownMen = document.querySelector("#dropdown-Men");
const navigationWomen = document.querySelector("#nav-women");
const dropdownWomen = document.querySelector("#dropdown-Women");
// variables for contact modal
const contactTab = document.querySelector("#contact-tab");
const contactModal = document.querySelector("#contactpopup-modal");
const contactModalClose = document.querySelector("#contactpopup-modal-close");

////////////// Men //////////////////////////////
// Drop down navigation when hovering over "Men" in navigation
navigationMen.onmouseover = function () {
    dropdownMen.style.top = "80%";
    dropdownMen.style.zIndex = "2";
    dropdownWomen.style.zIndex = "1";
}

// Drop down dissapears after 1,5 sec if not hovering over drop down. DID NOT GET THIS TO WORK.
navigationMen.onmouseout = function () {
    setTimeout(function() {
        if (dropdownMen.onmouseover === null) {
            dropdownMen.style.top = "-400%";
        }
    }, 1500);
}

//  Drop down navigation when hovering over the drop down itself
dropdownMen.onmouseover = function () {
    dropdownMen.style.top = "80%";
}

// Drop down dissapears when not hovering over drop down
dropdownMen.onmouseout = function () {
    dropdownMen.style.top = "-400%";
}



/////////////// Women ////////////////////////////////////
// Drop down navigation when hovering over "Men" in navigation
navigationWomen.onmouseover = function () {
    dropdownWomen.style.top = "80%";
    dropdownWomen.style.zIndex = "2";
    dropdownMen.style.zIndex = "1";
}

// Drop down dissapears after 1,5 sec if not hovering over drop down. DID NOT GET THIS TO WORK.
navigationWomen.onmouseout = function () {
    setTimeout(function() {
        if (dropdownWomen.onmouseover === null) {
            dropdownWomen.style.top = "-400%";
        }
    }, 1500);
}

//  Drop down navigation when hovering over the drop down itself
dropdownWomen.onmouseover = function () {
    dropdownWomen.style.top = "80%";
}

// Drop down dissapears when not hovering over drop down
dropdownWomen.onmouseout = function () {
    dropdownWomen.style.top = "-400%";
}


//// Contact tab pop up modal

contactTab.onclick = function () {
    contactModal.style.display = "block";
}

contactModalClose.onclick = function () {
    contactModal.style.display = "none";
}




