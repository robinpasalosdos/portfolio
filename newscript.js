const menu = document.querySelector(".mobile_nav_sections");
const icon = document.querySelector(".hamburger_icon");


function toggleMenu() {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function goToHome() {
  var homeSection = document.getElementById('home');
  if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const themeToggle = document.getElementById("theme-toggle");
const theme = document.querySelector("body");
var navlogo = document.getElementById('logo');
var navbar = document.getElementById('head_nav');
var home_profile = document.getElementById('home_profile');
var switchLogo = document.getElementById('sun_n_moon')

function changeImageLogo(containerId, imagePaths) {
  var images = document.getElementById(containerId).getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    if (imagePaths[i]) {
      images[i].src = imagePaths[i];
    }
  }
}

function changeImages(logo,home,nav,slogo){
  navlogo.src = logo;
  home_profile.src = home;
  navbar.style.background = nav;
  switchLogo.src = slogo;

}

themeToggle.addEventListener("click", function () {
  theme.classList.toggle("open");

  if (theme.classList.contains("open")) {
    changeImages('assets/logo_white.png','assets/neon.png','#000000','assets/moon.png');
    changeImageLogo('socmed_card',['assets/linkedin.png','assets/github.png','assets/gmail.png']);
    changeImageLogo('contact_strip',['assets/gmail.png','assets/phone_white.png','assets/linkedin.png','assets/facebook.png']);
    localStorage.setItem("theme", "dark");
  } else {
    changeImages('assets/logo_dark.png','assets/neon_black.png','#E0E0E0','assets/sun.png');
    changeImageLogo('socmed_card',['assets/linkedin_dark.png','assets/github_dark.png','assets/gmail_dark.png']);
    changeImageLogo('contact_strip',['assets/gmail_dark.png','assets/phone_dark.png','assets/linkedin_dark.png','assets/facebook_dark.png']);
    localStorage.setItem("theme", "light");
  }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  if (savedTheme === "dark") {
    changeImages('assets/logo_white.png','assets/neon.png','#000000','assets/moon.png');
    theme.classList.add("open");
    changeImageLogo('socmed_card',['assets/linkedin.png','assets/github.png','assets/gmail.png']);
    changeImageLogo('contact_strip',['assets/gmail.png','assets/phone_white.png','assets/linkedin.png','assets/facebook.png']);
  }
}

const textElement = document.getElementById("home_text_p2");
const careers = [
  "Web Developer        ",
  "Game Developer        ",
  "Mobile App Developer        ",
  "Data Analyst        "
];

let currentWordIndex = 0;
let currentletterIndex = 1;
let incrementing = true;

function updateText() {
  textElement.textContent = careers[currentWordIndex].slice(0, currentletterIndex);

  if (incrementing) {
    currentletterIndex++;
  } else {
    currentletterIndex--;
  }

  if (currentletterIndex === careers[currentWordIndex].length + 1) {
    incrementing = false;
  }

  if (currentletterIndex === 0) {
    incrementing = true;
    currentWordIndex = (currentWordIndex + 1) % careers.length;
  }
}

setInterval(updateText, 50);


var tabContainer = document.getElementById("head_nav");
var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

function slideDown(){
  tabContainer.classList.remove("slide-up");
  if (theme.classList.contains("open")) {
    tabContainer.style.background = '#000000';
  }else{
    tabContainer.style.background = '#E0E0E0';
  }
}

function slideUp(){
  icon.classList.remove("open");
  menu.classList.remove("open");

  tabContainer.classList.add("slide-up");
  if (theme.classList.contains("open")) {
    tabContainer.style.background = '#000000';
  }else{
    tabContainer.style.background = '#E0E0E0';
  }
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
    /* if (window.pageYOffset == 0){
      tabContainer.style.background = 'transparent';
    }*/
}); 

const cards = document.querySelectorAll('.card');
let scrollTimeout;
let animationFrameId;

function handleScroll() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
  cancelAnimationFrame(animationFrameId);

  animationFrameId = requestAnimationFrame(() => {
    cards.forEach((card, index) => {
      if (card.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight) * 0.45) {
        card.classList.add('animateX');
        card.classList.remove('animateY');
        if (index > 0) {
          cards[index - 1].classList.remove('animateX');
        }
        for (let i = index; i < cards.length - 1; i++) {
          cards[i + 1].classList.add('animateY');
        }
      } else {
        card.classList.remove('animateX');
      }
    });
  }, 50); // Adjust the debounce time (in milliseconds) to your preference
  });
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', function() {
  const elementsToHandle = ['.head_nav_sections', '.mobile_nav_sections'];

  // Common function to attach the event listener with a delay for slideUp
  const attachEventListener = (element) => {
    const el = document.querySelector(element);
    el.addEventListener('click', function() {
      setTimeout(slideUp, 800);
    });
  };

  // Attach event listeners to all specified elements
  elementsToHandle.forEach(attachEventListener);
});





