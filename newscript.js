const menu = document.querySelector(".mobile_nav_sections");
const icon = document.querySelector(".hamburger_icon");

function toggleMenu() {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const themeToggle = document.getElementById("theme-toggle");
const theme = document.querySelector("body");
var logo = document.getElementById('logo');
var home_profile = document.getElementById('home_profile');
function changeImages(image_1,image_2,image_3) {
  var images = document.getElementById('socmed_card').getElementsByTagName('img');
  var newImagePaths = [image_1, image_2, image_3];
  for (var i = 0; i < images.length; i++) {
      images[i].src = newImagePaths[i];
  }
}


themeToggle.addEventListener("click", function () {
  theme.classList.toggle("open");

  // Save the theme preference in localStorage
  if (theme.classList.contains("open")) {
    
    logo.src = 'assets/logo_white.png';
    home_profile.src = 'assets/neon.png';
    localStorage.setItem("theme", "dark");
    changeImages('assets/linkedin.png','assets/github.png','assets/gmail.png');
  } else {
    logo.src = 'assets/logo_dark.png';
    home_profile.src = 'assets/neon_black.png';
    changeImages('assets/linkedin_dark.png','assets/github_dark.png','assets/gmail_dark.png');
    localStorage.setItem("theme", "light");
  }
});

// Check for a previously set theme in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  if (savedTheme === "dark") {
    theme.classList.add("open");
  }
}

const textElement = document.getElementById("home_text_p2");
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

var tabContainer = document.getElementById("head_nav");
var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

function slideDown(){
  tabContainer.classList.remove("slide-up");
  tabContainer.style.background = '#000000';
}

function slideUp(){
  icon.classList.remove("open");
  menu.classList.remove("open");

  tabContainer.classList.add("slide-up");
  tabContainer.style.background = '#000000';
  
}

function navHandleScroll() {
  var currentScrollTop = document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop) {
    slideUp();

  }else{
    slideDown();
  }
  lastScrollTop = currentScrollTop;
}
  
window.addEventListener("scroll", function() {
  navHandleScroll();
    if (window.pageYOffset == 0){
      tabContainer.style.background = 'transparent';
    }
});

const cards = document.querySelectorAll('.card');
let scrollTimeout;
let animationFrameId;

function handleScroll() {
  clearTimeout(scrollTimeout);
  cancelAnimationFrame(animationFrameId);

  animationFrameId = requestAnimationFrame(() => {
    cards.forEach((card, index) => {
      if (card.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight) * 0.45) {
        card.classList.remove('animateY');
        for (let i = index; i < cards.length - 1; i++) {
          cards[i + 1].classList.add('animateY');
        }
      }
    });
  });
}
window.addEventListener('scroll', handleScroll);
/* 
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true }
}); */


