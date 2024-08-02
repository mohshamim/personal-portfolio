const hamburgerIcon = document.querySelector(".navbar-toggle");
const closeIcon = document.querySelector(".sidebar-close");
const sideBar = document.querySelector(".sidebar");

hamburgerIcon.addEventListener("click", function () {
  sideBar.classList.add("active");
});

closeIcon.addEventListener("click", function () {
  sideBar.classList.remove("active");
});

const textArray = ["Mendix", "React", "Frontend"];
let currentIndex = 0;
const dynamicTextElement = document.getElementById("dynamicText");

function typeText(text, callback) {
  let i = 0;
  dynamicTextElement.textContent = "";
  const typingInterval = setInterval(() => {
    dynamicTextElement.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(typingInterval);
      setTimeout(callback, 1500); // Pause before starting the next text
    }
  }, 100); // Speed of typing (ms per letter)
}

function startTextRotation() {
  function rotateText() {
    typeText(textArray[currentIndex], () => {
      currentIndex = (currentIndex + 1) % textArray.length;
      rotateText();
    });
  }
  rotateText();
}

startTextRotation();
