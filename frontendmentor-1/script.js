const popup = document.querySelector(".share-section-btn");

popup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.parentElement.classList.toggle("open");
});
