document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navbar-toggle");
  const sidebar = document.getElementById("sidebar");
  const close = document.getElementById("sidebar-close");

  toggle.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  close.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });

  // Optionally, close the sidebar when clicking outside of it
  document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !toggle.contains(event.target)) {
      sidebar.classList.remove("active");
    }
  });
});
