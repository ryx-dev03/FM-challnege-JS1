"Use strict";

const shareArrow = document.querySelector(".share-icon");
const returnArrow = document.querySelector(".arrow.share-icon-1");
const shareTab = document.querySelector(".share");
const ParentTab = document.querySelector(".profile-wrapper");


shareArrow.addEventListener("click", function (e) {
  e.stopPropagation();
  shareTab.classList.toggle("active");

  ParentTab.classList.toggle("share-align");
});


returnArrow.addEventListener("click", function (e) {
  e.stopPropagation();
  shareTab.classList.toggle("active");
  ParentTab.classList.toggle("share-align");
});
