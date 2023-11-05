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
      AOS.refreshHard();
  }
}
const elements = {
  themeToggle: document.getElementById("theme-toggle"),
  theme: document.querySelector("body"),
  navLogo: document.getElementById('logo'),
  navBar: document.getElementById('head_nav'),
  ghIcons: document.getElementsByClassName('github_icon'),
  eyeIcons: document.getElementsByClassName('eye_icon'),
  homeProfile: document.getElementById('home_profile'),
  profileIcons: document.getElementById('socmed_card').getElementsByTagName('img'),
  contactIcons: document.getElementById('contact_strip').getElementsByTagName('img'),
  switchLogo: document.getElementById('sun_n_moon'),
  loading_screen: document.getElementById('loading_screen')
};
AOS.init({
  disable: false,
  startEvent: 'load',
  delay: 0,
  duration: 600,
  once: false, 
});

elements.theme.style.overflow = 'hidden';
window.onload = function() {
  elements.loading_screen.style.display = 'none';
  elements.theme.style.overflow = 'auto';
};

function changeImages(logo, home, nav, slogo) {
  elements.navLogo.src = logo;
  elements.homeProfile.src = home;
  elements.navBar.style.background = nav;
  elements.switchLogo.src = slogo;
}

function changeImagesArray(images, imagePaths) {
  for (let i = 0; i < images.length; i++) {
    if (imagePaths[i]) {
      images[i].src = imagePaths[i];
    }
  }
}

function applyTheme(logo, neon, backgroundColor, switchIcon, themeName) {
  changeImages(logo, neon, backgroundColor, switchIcon);
  changeImagesArray(elements.profileIcons, ['assets/linkedin_dark.png', 'assets/github_dark.png', 'assets/gmail_dark.png']);
  changeImagesArray(elements.contactIcons, ['assets/gmail_dark.png', 'assets/phone_dark.png', 'assets/linkedin_dark.png', 'assets/facebook_dark.png']);
  changeImagesArray(elements.ghIcons, Array(3).fill('assets/github_dark.png'));
  changeImagesArray(elements.eyeIcons, Array(3).fill('assets/eye_dark.png'));

  if (themeName === 'dark') {
    elements.theme.classList.add("open");
    changeImagesArray(elements.profileIcons, ['assets/linkedin.png', 'assets/github.png', 'assets/gmail.png']);
    changeImagesArray(elements.contactIcons, ['assets/gmail.png', 'assets/phone_white.png', 'assets/linkedin.png', 'assets/facebook.png']);
    changeImagesArray(elements.ghIcons, Array(3).fill('assets/github.png'));
    changeImagesArray(elements.eyeIcons, Array(3).fill('assets/eye_white.png'));
  }
}

elements.themeToggle.addEventListener("click", function () {
  elements.theme.classList.toggle("open");

  if (elements.theme.classList.contains("open")) {
    applyTheme('assets/logo_white.png', 'assets/neon.png', '#000000', 'assets/moon.png', 'dark');
    localStorage.setItem("theme", "dark");
  } else {
    applyTheme('assets/logo_dark.png', 'assets/neon_black.png', '#E0E0E0', 'assets/sun.png', 'light');
    localStorage.setItem("theme", "light");
  }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme == 'dark') {
  applyTheme('assets/logo_white.png', 'assets/neon.png', '#000000', 'assets/moon.png', savedTheme);
}


const textElement = document.getElementById("home_text_p2");
const careers = [
  "Web Developer        ",
  "Game Developer        ",
  "Mobile App Developer        ",
  "Data Analyst        "
];

const htmlElement = document.documentElement;
const bodyElement = document.body;
function showDialog(dialogBox) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById(dialogBox).style.display = "block";
  htmlElement.style.overflow = "hidden";
  bodyElement.style.overflow = "hidden";
}

var jankenVideo = document.getElementById("janken");
jankenVideo.pause();
jankenVideo.currentTime = 0;

function hideDialog(dialogBox) {
  document.getElementById("overlay").style.display = "none";
  document.getElementById(dialogBox).style.display = "none";
  htmlElement.style.overflow = "auto";
  bodyElement.style.overflow = "auto";
}

function showDialogJanken(){
  showDialog("dialog-box-1");
  jankenVideo.currentTime = 0;
  jankenVideo.play();
}

function hideDialogJanken(){
  hideDialog("dialog-box-1");
  jankenVideo.pause();
  jankenVideo.currentTime = 0;
}

document.addEventListener('click', function (event) {
  if (event.target === document.getElementById("overlay")) {
    hideDialogJanken();
    hideDialog("dialog-box-2");
  }
});

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


var tabContainer = elements.navBar;
var theme = elements.theme;
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
let trigger;

function handleScroll() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
  cancelAnimationFrame(animationFrameId);
  function handleMobileView() {
    if (window.matchMedia("(max-width: 900px)").matches) {
      trigger = .8;
    } else {
      trigger = .55
    }
  }
  handleMobileView();
  window.addEventListener('resize', handleMobileView);

  animationFrameId = requestAnimationFrame(() => {
    cards.forEach((card, index) => {
      if (card.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight) * trigger) {
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
document.addEventListener('DOMContentLoaded', function() {
  const elementsToHandle = ['.head_nav_sections', '.mobile_nav_sections', '.nav_footer_links'];

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





