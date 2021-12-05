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

/* gallerie produit */
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

/******** test avis ********/

// donne la valeur de l'input au moment du click
function starValue() {
  console.log(document.querySelector("input[name=stars]:checked").value);
}

// target bouton publier avis
document.querySelector("#publiAvis").addEventListener("click", starValue);

// test date
/* https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site */

(function (global) {
  const SECOND = 1;
  const MINUTE = 60;
  const HOUR = 3600;
  const DAY = 86400;
  const MONTH = 2629746;
  const YEAR = 31556952;
  const DECADE = 315569520;

  global.timeAgo = function (date) {
    var now = new Date();
    var diff = Math.round((now - date) / 1000);

    var unit = "";
    var num = 0;
    var plural = false;

    switch (true) {
      case diff <= 0:
        return "À l'instant";
        break;

      case diff < MINUTE:
        num = Math.round(diff / SECOND);
        unit = "sec";
        plural = num > 1;
        break;

      case diff < HOUR:
        num = Math.round(diff / MINUTE);
        unit = "min";
        plural = num > 1;
        break;

      case diff < DAY:
        num = Math.round(diff / HOUR);
        unit = "heure";
        plural = num > 1;
        break;

      case diff < MONTH:
        num = Math.round(diff / DAY);
        unit = "jour";
        plural = num > 1;
        break;

      case diff < YEAR:
        num = Math.round(diff / MONTH);
        unit = "mois";
        plural = num > 1;
        break;

      case diff < DECADE:
        num = Math.round(diff / YEAR);
        unit = "an";
        plural = num > 1;
        break;

      default:
        num = Math.round(diff / YEAR);
        unit = "an";
        plural = num > 1;
    }

    var str = "";
    str += "Il y a ";
    if (num) {
      str += `${num} `;
    }

    str += `${unit}`;

    if (plural && unit !== "mois") {
      str += "s";
    }

    return str;
  };
})(window);

console.log(timeAgo(new Date()));
console.log(
  timeAgo(new Date("Jun 03 2018 15:12:19 GMT+0300 (FLE Daylight Time)"))
);
console.log(
  timeAgo(new Date("Jun 03 2018 13:12:19 GMT+0300 (FLE Daylight Time)"))
);
console.log(
  timeAgo(new Date("May 28 2021 13:12:19 GMT+0300 (FLE Daylight Time)"))
);
console.log(
  timeAgo(new Date("May 28 100 13:12:19 GMT+0300 (FLE Daylight Time)"))
);
console.log(timeAgo(new Date()));
console.log(
  timeAgo(new Date("dec 4 2021 13:12:19 GMT+0300 (FLE Daylight Time)"))
);
