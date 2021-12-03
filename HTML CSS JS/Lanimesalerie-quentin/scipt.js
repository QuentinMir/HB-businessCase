// SLIDER PRODUITS

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: -35,
  slidesPerGroup: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 4,
    },
  },
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: false,
  },
});

// SLIDER MARQUES
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: -35,
  slidesPerGroup: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },

    991: {
      slidesPerView: 6,
    },
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

// SMOOTH SLIDE DROPDOWN-MENU

$(".dropdown-menu").addClass("invisible"); //FIRST TIME INVISIBLE

// ADD SLIDEDOWN ANIMATION TO DROPDOWN-MENU
$(".dropdown").on("show.bs.dropdown", function (e) {
  $(".dropdown-menu").removeClass("invisible");
  $(this).find(".dropdown-menu").first().stop(true, true).slideDown();
});

// ADD SLIDEUP ANIMATION TO DROPDOWN-MENU
$(".dropdown").on("hide.bs.dropdown", function (e) {
  $(this).find(".dropdown-menu").first().stop(true, true).slideUp();
});

// Pop up
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

// étoiles input
$(":radio").change(function () {
  console.log("New star rating: " + this.value);
});

// fin

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
