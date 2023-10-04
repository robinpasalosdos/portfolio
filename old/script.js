function toggleMenu() {
    const menu = document.querySelector(".menu_links");
    const icon = document.querySelector(".hamburger_icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

const textElement = document.getElementById("section_text_p2");
const careers = ["Web Developer        ",
                  "Game Developer        ",
                  "Mobile App Developer        ",
                  "Data Analyst        "];

let currentWordIndex = 0;
let currentletterIndex = 1;

function updateText() {
  textElement.textContent = careers[currentWordIndex].slice(0,currentletterIndex);
  currentletterIndex = currentletterIndex + 1;
  if(currentWordIndex == 3 && currentletterIndex == 21){
    currentWordIndex = 0;
    currentletterIndex = 1;
  }
  if(currentletterIndex == careers[currentWordIndex].length + 1){
    currentWordIndex = currentWordIndex + 1;
    currentletterIndex = 1;
  }
}

setInterval(updateText,100);


var tabContainer = document.getElementById("desktop_nav");
var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
var navlinkA = document.getElementById("a");
var navlinkB = document.getElementById("b");
var navlinkC = document.getElementById("c");
var navlinkD = document.getElementById("d");

function slideDown(){
  navlinkA.style.color = "#DDE6ED";
  navlinkB.style.color = "#DDE6ED";
  navlinkC.style.color = "#DDE6ED";
  navlinkD.style.color = "#DDE6ED";
  tabContainer.style.backgroundColor = "#526D82";
  tabContainer.classList.add("slide-down");
  setTimeout(function() {
  tabContainer.classList.remove("slide-up");
  },100);
}

function slideUp(){
  tabContainer.classList.add("slide-up");
    setTimeout(function() {
        tabContainer.classList.remove("slide-down");
        },100);
}

function handleScroll() {
  var currentScrollTop = document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop) {
    slideUp();

  }else{
    slideDown();
  }
  lastScrollTop = currentScrollTop;
}
  


setTimeout(function() {
  if (currentScrollTop == lastScrollTop){
    navlinkA.style.color = "#DDE6ED";
    navlinkB.style.color = "#DDE6ED";
    navlinkC.style.color = "#DDE6ED";
    navlinkD.style.color = "#DDE6ED";
    tabContainer.style.backgroundColor = "#526D82";
    tabContainer.classList.add("slide-down");
    setTimeout(function() {
    tabContainer.classList.remove("slide-up");
    },100);
  }
  },3000);
window.addEventListener("scroll", function() {
    handleScroll();
    if (window.pageYOffset == 0){
      tabContainer.style.backgroundColor = "transparent";
      navlinkA.style.color = "#27374D";
      navlinkB.style.color = "#27374D";
      navlinkC.style.color = "#27374D";
      navlinkD.style.color = "#27374D";
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const seeMoreBtn = document.getElementById("project_btn_1");
  const hiddenContent = document.querySelector("#project_hidden_details");
  const img = document.querySelector(".project_img");

  seeMoreBtn.addEventListener("click", function () {
      if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
          seeMoreBtn.textContent = "See Less";
          hiddenContent.style.display = "block";
          img.classList.add("project_img_vanish");
          hiddenContent.classList.add("project_detail_restore");
      } else {
          hiddenContent.style.display = "none";
          seeMoreBtn.textContent = "See More";
          img.classList.remove("project_img_vanish");
          img.classList.add("project_img_restore");
      }
  });
});

const element = document.getElementById('socials_container');
const icons = element.querySelectorAll("img");
icons.forEach((icon) => {
  icon.addEventListener('mouseenter', () => {
    icon.classList.add('scaleup');
    setTimeout(function() {
      icon.classList.remove('scaledown');
      },100);
  });

  icon.addEventListener('mouseout', () => {
    icon.classList.add('scaledown');
    setTimeout(function() {
      icon.classList.remove('scaleup');
      },100);
  });
  
});



