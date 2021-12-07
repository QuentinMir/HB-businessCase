"use strict";

/*************************************
 * ** VARIABLES    ------------------
 *  *********************************/

// compter les étoiles
let starCount;

/*************************************
 * ** FONCTIONS    -----------------
 *  *********************************/

// majuscule première lettre
function titleCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

// donne la valeur de l'input etoile au moment du click
function starValue() {
  let starValue = document.querySelector("input[name=stars]:checked").value;
  let starHTML;
  switch (starValue) {
    case "1":
      starHTML = "★";
      starCount.oneStar++;
      break;
    case "2":
      starHTML = "★★";
      starCount.twoStar++;
      break;
    case "3":
      starHTML = "★★★";
      starCount.threeStar++;
      break;
    case "4":
      starHTML = "★★★★";
      starCount.fourStar++;
      break;
    case "5":
      starHTML = "★★★★★";
      starCount.fiveStar++;
      break;
  }

  return starHTML;
}
/////////////////////////////////
// Comparer date avec date actuelle

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

///////////////////////////////////
// Injection de l'avis l'avis sur la page
function publishRating() {
  let name = document.querySelector("#nomAvis").value.trim();
  // alerte nom vide
  if (name == "") {
    alert("Vous n'avez pas saisi de nom");
  }

  // alerte texte vide
  let text = document.querySelector("#avis").value.trim();
  if (text == "") {
    alert("Vous n'avez pas saisi de texte");
    return;
  }

  let blockAvis = document.querySelector("#blockAvis");
  let contentAvis = `
      <!-- un avis client posté -->
                <div class="col-lg-6 lg-12 d-flex align-items-center my-3">
                  <h6 class="my-0">${titleCase(name)} </h6>
                  <span class="icon fs-4 text-red my-0 ms-5 me-3">${starValue()} </span>
                  <p class="my-0">- ${timeAgo(new Date())} </p>
                </div>
                <div class="col-lg-6 d-none d-lg-block"></div>
                <div class="col-12">
                  <p class="ms-auto me-0 w-75 my-1">
                    ' ${text} '
                  </p>
                  <hr>
                </div>`;

  /* mettre un if pour détecter la phrase pas de comment et jouer sur le += */
  console.log(document.querySelector("#blockAvis h2"));

  // injecter l'avis en fonction du contenu initial
  if (document.querySelector("#blockAvis h5") != null) {
    blockAvis.innerHTML = contentAvis;
  } else {
    blockAvis.innerHTML += contentAvis;
  }

  // reset les champs de saisie
  document.querySelector("#nomAvis").value = "";
  document.querySelector("#avis").value = "";
}
///////////////////////////////////////////////

// GALERIE PRODUIT - sélection des photos
function myFunction(imgs) {
  let expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

/*************************************
 * ** MAIN    ----------------------
 *  *********************************/
document.addEventListener("DOMContentLoaded", function () {
  // compter les étoiles
  starCount = {
    oneStar: 0,
    twoStar: 0,
    threeStar: 0,
    fourStar: 0,
    fiveStar: 0,
  };

  let publiAvis = document.querySelector("#publiAvis");

  // target bouton publier avis
  publiAvis.addEventListener("click", publishRating);

  // tester la valeur des inputs
  document.querySelectorAll("input[name=stars]").forEach((radio) =>
    radio.addEventListener("change", function () {
      console.log("Nouveau rating: " + this.value);
    })
  );
});
