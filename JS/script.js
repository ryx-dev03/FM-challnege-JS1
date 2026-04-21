"Use strict";

const shareArrow = document.querySelector(".share-icon");
const returnArrow = document.querySelector(".arrow.share-icon-1");
const shareTab = document.querySelector(".share");
const ParentTab = document.querySelector(".profile-content");

shareArrow.addEventListener("click", function (e) {
  e.stopPropagation();
  shareTab.classList.toggle("active");
  

  // ParentTab.classList.toggle("share-open");
});

returnArrow.addEventListener("click", function (e) {
  e.stopPropagation();
  shareTab.classList.toggle("active");
});
