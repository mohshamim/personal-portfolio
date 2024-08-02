const hamburgerIcon = document.querySelector(".navbar-toggle");
const closeIcon = document.querySelector(".sidebar-close");
const sideBar = document.querySelector(".sidebar");

hamburgerIcon.addEventListener("click", function () {
  sideBar.classList.add("active");
});

closeIcon.addEventListener("click", function () {
  sideBar.classList.remove("active");
});
