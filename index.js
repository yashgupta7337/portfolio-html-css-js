let lightMode = false;
const navbar = document.getElementsByClassName("main-nav");
const logoContainers = document.getElementsByClassName("logo-container");
const slider = document.querySelector(".slider");
const checkBox = document.querySelector('.switch input[type="checkbox"]');

Array.from(navbar).forEach((element) => {
  element.addEventListener("click", toggleTheme);
});

function toggleTheme(event) {
  event.preventDefault();
  if (lightMode === false) {
    lightMode = true;
    // background and text color
    document.body.style.backgroundColor = "#f2f2f2";
    document.body.style.color = "#000000f2";
    //navbar and main-nav items color
    document.querySelector(".email-link").style.color = "#000000f2";
    document.querySelector("#resume").style.color = "#000000f2";
    //logo-container background color
    Array.from(logoContainers).forEach((container) => {
      container.style.backgroundColor = "#f2f2f2";
    });
    //resume, education icons color
    document.querySelector("#resume-logo").src =
      "assets/resume-light-mode-icon.png";
    document.querySelector("#education-logo").src =
      "assets/education-light-mode-logo.png";
    //memoji border color
    document.querySelector(".logo img").style.border = "10px solid #666666";
    // switch color and transition
    slider.style.backgroundColor = "#282828";
    checkBox.checked = true;
  } else {
    lightMode = false;
    // background and text color
    document.body.style.backgroundColor = "#000000f2";
    document.body.style.color = "#E0E0E0";
    //navbar and main-nav items color
    document.querySelector(".email-link").style.color = "#E0E0E0";
    document.querySelector("#resume").style.color = "#E0E0E0";
    //logo-container background color
    Array.from(logoContainers).forEach((container) => {
      container.style.backgroundColor = "#E0E0E0";
    });
    //resume, education icons color
    document.querySelector("#resume-logo").src =
      "assets/resume-dark-mode-logo.png";
    document.querySelector("#education-logo").src =
      "assets/education-dark-mode-logo.png";
    //memoji border color
    document.querySelector(".logo img").style.border = "10px solid #E0E0E0";
    slider.style.backgroundColor = "#ccc";
    checkBox.checked = false;
  }
}
