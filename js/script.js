
var openCart = document.querySelectorAll(".product-card-actions-buy");
var popupCart = document.querySelector(".modal-cart");
var closeCart = document.querySelector(".modal-cart-close");
var closeCartBtn = popupCart.querySelector(".modal-close-btn");
var countBtn = document.querySelector(".bar-cart-count");
var counter = countBtn.querySelector(".count");

for (var i = 0; i < openCart.length; i++) {
  openCart[i].addEventListener("click", function(event) {
    event.preventDefault();
    popupCart.classList.add("modal-cart-show");
    countBtn.classList.add("count-active");
    counter.innerHTML = 1;
  });
}

closeCart.addEventListener("click", function(event) {
  event.preventDefault();
  popupCart.classList.remove("modal-cart-show");
});

closeCartBtn.addEventListener("click", function(event) {
  event.preventDefault();
  popupCart.classList.remove("modal-cart-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupCart.classList.contains("modal-cart-show")) {
        popupCart.classList.remove("modal-cart-show");
    }
  }
});


var openMap = document.querySelector(".open-modal-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map-close");

openMap.addEventListener("click", function(event) {
  event.preventDefault();
  popupMap.classList.add("modal-map-show");
});

closeMap.addEventListener("click", function(event) {
  event.preventDefault();
  popupMap.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupMap.classList.contains("modal-map-show")) {
        popupMap.classList.remove("modal-map-show");
    }
  }
});


var openContact = document.querySelector(".open-modal-btn");
var popupContact = document.querySelector(".modal-contact");
var closeContact = document.querySelector(".modal-contact-close");
var closeContactBtn = popupContact.querySelector(".modal-close-btn");
var formContact = popupContact.querySelector(".contact-form");
var nameContact = popupContact.querySelector("[name=name]");
var emailContact = popupContact.querySelector("[name=email]");
var textContact = popupContact.querySelector("[name=text]");
var storageName = localStorage.getItem("nameContact");
var storageEmail = localStorage.getItem("emailContact");

openContact.addEventListener("click", function(event) {
  event.preventDefault();
  popupContact.classList.add("modal-contact-show");

  if (storageName) {
    nameContact.value = storageName;
    emailContact.focus();
  } else if (storageEmail) {
      emailContact.value = storageEmail;
      textContact.focus();
    } else {
        nameContact.focus();
      }
});

formContact.addEventListener("submit", function(event) {
  if (!nameContact.value || !emailContact.value || !textContact.value) {
    event.preventDefault();
    popupContact.classList.add("modal-error");
  } else {
    localStorage.setItem("nameContact", nameContact.value);
    localStorage.setItem("emailContact", emailContact.value);
    console.log(localStorage.getItem("emailContact"));
  }
});

closeContact.addEventListener("click", function(event) {
  event.preventDefault();
  popupContact.classList.remove("modal-contact-show");
  popupContact.classList.remove("modal-error");
});

closeContactBtn.addEventListener("click", function(event) {
  event.preventDefault();
  popupContact.classList.remove("modal-contact-show");
  popupContact.classList.remove("modal-error");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupContact.classList.contains("modal-contact-show")) {
        popupContact.classList.remove("modal-contact-show");
        popupContact.classList.remove("modal-error");
    }
  }
});
