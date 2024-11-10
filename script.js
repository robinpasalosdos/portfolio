

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
const elements = {
  themeToggle: document.getElementById("theme-toggle"),
  theme: document.querySelector("body"),
  html: document.querySelector("html"),
  navLogo: document.getElementById('logo'),
  navBar: document.getElementById('head_nav'),
  ghIcons: document.getElementsByClassName('github_icon'),
  eyeIcons: document.getElementsByClassName('eye_icon'),
  switchLogo: document.getElementById('sun_n_moon'),
  loading_screen: document.getElementById('loading_screen'),
  loading: document.getElementById('loading'),
  loaded: document.getElementById('loaded'),
  profile: document.getElementById('about_profile'),
  ghIcons: document.getElementsByClassName('github_icon'),
  eyeIcons: document.getElementsByClassName('eye_icon'),
  profileIcons: document.getElementById('socmed_card').getElementsByTagName('img'),
  contactIcons: document.getElementById('contact_strip').getElementsByTagName('img'),
  next: document.getElementById('next'),
  prev: document.getElementById('prev')
};


AOS.init({
  disable: false,
  startEvent: 'load',
  delay: 0,
  duration: 250,
  once: true,
});

elements.html.style.overflowY = 'hidden';

window.onload = function() {
  elements.loading.style.display = 'none';
  elements.loaded.style.display = 'block';
  setTimeout(function() {
    elements.loading_screen.style.display = 'none';
    elements.loaded.style.display = 'none';
    elements.html.style.overflowY = 'auto';
  }, 500);
};

function makeCall() {
  window.location.href = 'tel:+639302979295';
}

function changeImages(logo, slogo, load, next, prev, nav) {
  elements.navLogo.src = logo;
  elements.switchLogo.src = slogo;
  elements.loading.src = load;
  elements.next.src = next;
  elements.prev.src = prev;
  elements.navBar.style.backgroundColor = nav;
}

function changeImagesArray(images, imagePaths) {
  for (let i = 0; i < images.length; i++) {
    if (imagePaths[i]) {
      images[i].src = imagePaths[i];
    }
  }
}

function applyTheme(logo, switchIcon, load, next, prev, nav, themeName) {
  changeImages(logo, switchIcon, load, next, prev, nav);
  changeImagesArray(elements.profileIcons, ['assets/linkedin_dark.png', 'assets/github_dark.png', 'assets/gmail_dark.png']);
  changeImagesArray(elements.contactIcons, ['assets/gmail_dark.png', 'assets/linkedin_dark.png', 'assets/facebook_dark.png']);
  changeImagesArray(elements.ghIcons, Array(8).fill('assets/github_dark.png'));
  changeImagesArray(elements.eyeIcons, Array(8).fill('assets/eye_dark.png'));
  

  if (themeName === 'light') {
    elements.theme.classList.add("open");
    changeImagesArray(elements.profileIcons, ['assets/linkedin.png', 'assets/github.png', 'assets/gmail.png']);
    changeImagesArray(elements.contactIcons, ['assets/gmail.png', 'assets/linkedin.png', 'assets/facebook.png']);
    changeImagesArray(elements.ghIcons, Array(8).fill('assets/github.png'));
    changeImagesArray(elements.eyeIcons, Array(8).fill('assets/eye.png'));

  }
}

elements.themeToggle.addEventListener("click", function () {
  elements.theme.classList.toggle("open");

  if (elements.theme.classList.contains("open")) {
    applyTheme('assets/logo_dark.png', 'assets/sun.png','assets/loading.gif', 'assets/right_arrow.png','assets/left_arrow.png', '#F1E9E3', 'light');
    localStorage.setItem("theme", "light");
    
  } else {
    applyTheme('assets/logo_white.png', 'assets/moon.png', 'assets/loading_dark.gif','assets/right_arrow_dark.png','assets/left_arrow_dark.png', '#414141','dark');
    localStorage.setItem("theme", "dark");
    
  }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme == 'light') {
  applyTheme('assets/logo_dark.png', 'assets/sun.png', 'assets/loading.gif', 'assets/right_arrow.png','assets/left_arrow.png', '#F1E9E3',  savedTheme);

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

const dialogVideos = document.querySelectorAll('.dialog_video');
const overlay = document.getElementById('overlay');

dialogVideos.forEach(video => {
  video.pause();
  video.currentTime = 0;
});

function getIndexFromDialogBox(dialogBox) {
    return parseInt(dialogBox.charAt(dialogBox.length - 1)) - 1;
}

function playDialogVideo(dialogBox) {
    const index = getIndexFromDialogBox(dialogBox);
    dialogVideos[index].currentTime = 0;
    dialogVideos[index].play();
}

function pauseDialogVideo(dialogBox) {
    const index = getIndexFromDialogBox(dialogBox);
    dialogVideos[index].pause();
    dialogVideos[index].currentTime = 0;
}

function showDialog(dialogBox) {
    overlay.style.display = "block";
    document.getElementById(dialogBox).style.display = "block";
    document.documentElement.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";
    slideUp();
}

function hideDialog(dialogBox) {
    overlay.style.display = "none";
    document.getElementById(dialogBox).style.display = "none";
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowY = "auto";
}

document.addEventListener('click', function (event) {
    if (event.target === overlay) {
        hideDialogJanken("dialog-box-1");
        hideDialogJanken("dialog-box-2");
        hideDialogJanken("dialog-box-3");
        hideDialogJanken("dialog-box-4");
        hideDialog("dialog-box-5");
    }
});

function showDialogJanken(dialogBox) {
    showDialog(dialogBox);
    playDialogVideo(dialogBox);
}

function hideDialogJanken(dialogBox) {
    hideDialog(dialogBox);
    pauseDialogVideo(dialogBox);
}


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
    tabContainer.style.background = '#F1E9E3';
  }else{
    tabContainer.style.background = '#414141';
  }
}

function slideUp(){
  icon.classList.remove("open");
  menu.classList.remove("open");

  tabContainer.classList.add("slide-up");
  if (theme.classList.contains("open")) {
    tabContainer.style.background = '#F1E9E3';
  }else{
    tabContainer.style.background = '#414141';
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

document.addEventListener("DOMContentLoaded", function(){
  const certificates = document.querySelectorAll('.certificates img');
  const certCon = document.getElementById('cert_con');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const certNav = document.getElementById('cert_frac');
  certNav.textContent = `1 / ${certificates.length}`;
  let currentIndex = 0;

 


  function showNextCertificate() {
    if (currentIndex < certificates.length - 1 ){
      currentIndex++;
      certCon.style.transform = `translateX(-${certCon.offsetWidth * currentIndex}px)`;
      toggleNavigation();
    }
  }
  
  function showPrevCertificate() {
    if (currentIndex > 0){
      currentIndex--;
      certCon.style.transform = `translateX(-${certCon.offsetWidth * currentIndex}px)`;
      toggleNavigation();
    }
  }
  
  function toggleNavigation() {
    next.style.opacity = currentIndex < certificates.length - 1 ? '1' : '.3';
    prev.style.opacity = currentIndex > 0 ? '1' : '.3';
    certNav.textContent = `${currentIndex + 1} / ${certificates.length}`;
  }
  
  next.addEventListener('click', showNextCertificate);
  prev.addEventListener('click', showPrevCertificate);
});

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show_card");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show_card");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("project_links");
var btns = btnContainer.querySelectorAll("li.project_link a");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = btnContainer.querySelectorAll("li.project_link a.active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
  






