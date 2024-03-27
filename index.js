let lightMode = false;
const navbar = document.getElementsByClassName("main-nav");
Array.from(navbar).forEach((element) => {
  element.addEventListener("click", toggleTheme);
});
function toggleTheme(event) {
  event.preventDefault();
  if (lightMode === false) {
    lightMode = true;
    // background and text color
    document.body.style.backgroundColor = "#E0E0E0";
    document.body.style.color = "#000000f2";
    //navbar and main-nav items color
    document.querySelector(".email-link").style.color = "#000000f2";
    document.querySelector("#resume").style.color = "#000000f2";
    //logo-container background color
  } else {
    lightMode = false;
    // background and text color
    document.body.style.backgroundColor = "#000000f2";
    document.body.style.color = "#E0E0E0";
    //navbar and main-nav items color
    document.querySelector(".email-link").style.color = "#E0E0E0";
    document.querySelector("#resume").style.color = "#E0E0E0";
  }
}
