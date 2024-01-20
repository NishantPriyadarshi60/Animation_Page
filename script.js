let moon = document.getElementById("moon");
let cityLeft = document.getElementById("cityLeft");
let cityRight = document.getElementById("cityRight");
let heroText = document.querySelector(".hero p")

window.addEventListener("scroll", ()=>{
  let scrollValue = window.scrollY;
  moon.style.top = scrollValue * 0.8 + "px";
  heroText.style.marginTop = scrollValue * 1 + "px";
  cityLeft.style.left = scrollValue * -1.2 + "px";
  cityRight.style.left = scrollValue * 1.2 + "px";
})