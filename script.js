const menu = document.querySelector(".mobile_nav_sections");
const icon = document.querySelector(".hamburger_icon");
const projectMenu = document.querySelector(".mobile_project_sections");
const projectIcon = document.querySelector(".project_hamburger_menu");

function toggleMenu() {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function projectToggleMenu() {
  projectMenu.classList.toggle("open");
  projectIcon.classList.toggle("open");
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
  profileIcons: document.getElementById('socmed_card') ? document.getElementById('socmed_card').getElementsByTagName('img') : [],
  contactIcons: document.getElementById('contact_strip') ? document.getElementById('contact_strip').getElementsByTagName('img') : [],
  next: document.getElementById('next'),
  prev: document.getElementById('prev')
};


AOS.init({
  disable: false,
  startEvent: 'scroll',
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
  "Data Analyst        "
];

const htmlElement = document.documentElement;
const bodyElement = document.body;

const dialogVideos = document.querySelectorAll('.dialog_video');
const overlay = document.getElementById('overlay');
const dialogContainer = document.getElementById('dialog_container');

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

function hideAllDialogs() {
  const dialogs = document.querySelectorAll('.dialog-box');
  dialogs.forEach(dialog => {
    dialog.style.display = 'none';
    // Pause and reset ALL videos inside the dialog
    const videos = dialog.querySelectorAll('video');
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
  });
}

function showDialog(dialogBox) {
  hideAllDialogs();
  overlay.style.display = "block";
  dialogContainer.style.display = "block";
  document.getElementById(dialogBox).style.display = "block";
  document.documentElement.style.overflowY = "hidden";
  document.body.style.overflowY = "hidden";
  slideUp();
}

function hideDialog(dialogBox) {
  hideAllDialogs();
  overlay.style.display = "none";
  dialogContainer.style.display = "none";
  document.documentElement.style.overflowY = "auto";
  document.body.style.overflowY = "auto";
}
window.hideDialog = hideDialog;

function hideDialogJanken(dialogBox) {
  hideAllDialogs();
  overlay.style.display = "none";
  dialogContainer.style.display = "none";
  document.documentElement.style.overflowY = "auto";
  document.body.style.overflowY = "auto";
}
window.hideDialogJanken = hideDialogJanken;

function showDialogJanken(dialogBox) {
  hideAllDialogs();
  showDialog(dialogBox);
  playDialogVideo(dialogBox);
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
  const elementsToHandle = ['.head_nav_sections', '.mobile_nav_sections', '.nav_footer_links', '.mobile_project_sections'];

  // Common function to attach the event listener with a delay for slideUp
  const attachEventListener = (element) => {
    const el = document.querySelector(element);
    el.addEventListener('click', function() {
      setTimeout(slideUp, 800);
    });
  };

  // Attach event listeners to all specified elements
  elementsToHandle.forEach(attachEventListener);

  // Event delegation for dialog close (X button)
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('dialog_x')) {
      hideAllDialogs();
      overlay.style.display = "none";
      dialogContainer.style.display = "none";
      document.documentElement.style.overflowY = "auto";
      document.body.style.overflowY = "auto";
    }
  });

  // Overlay click closes all dialogs
  overlay.addEventListener('click', function() {
    hideAllDialogs();
    overlay.style.display = "none";
    dialogContainer.style.display = "none";
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowY = "auto";
  });

  // EmailJS contact form integration
  emailjs.init('KcJuMsu0FCOPULM-a'); // <-- Replace with your EmailJS public key

  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      formStatus.textContent = 'Sending...';
      formStatus.style.color = '#333';

      // Replace these with your EmailJS Service ID and Template ID
      const serviceID = 'service_00ez7cq';
      const templateID = 'template_2k9zb4i';

      emailjs.sendForm(serviceID, templateID, contactForm)
        .then(function() {
          formStatus.textContent = 'Message sent successfully!';
          formStatus.style.color = 'green';
          contactForm.reset();
        }, function(error) {
          formStatus.textContent = 'Failed to send message. Please try again later.';
          formStatus.style.color = 'red';
        });
    });
  }
});

document.addEventListener("DOMContentLoaded", function(){
  const certificates = document.querySelectorAll('.certificates img');
  const certCon = document.getElementById('cert_con');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const certNav = document.getElementById('cert_frac');
  let currentIndex = 0;

  function scrollToCertificate(index) {
    const cert = certificates[index];
    if (cert) {
      // Calculate the left offset of the image relative to the container
      const left = cert.offsetLeft - certCon.offsetLeft;
      certCon.scrollTo({
        left: left,
        behavior: 'smooth'
      });
    }
  }

  function showNextCertificate() {
    if (currentIndex < certificates.length - 1) {
      currentIndex++;
      scrollToCertificate(currentIndex);
      toggleNavigation();
    }
  }

  function showPrevCertificate() {
    if (currentIndex > 0) {
      currentIndex--;
      scrollToCertificate(currentIndex);
      toggleNavigation();
    }
  }

  function toggleNavigation() {
    next.style.opacity = currentIndex < certificates.length - 1 ? '1' : '.3';
    next.style.cursor = currentIndex < certificates.length - 1 ? 'pointer' : 'default';
    prev.style.opacity = currentIndex > 0 ? '1' : '.3';
    prev.style.cursor = currentIndex > 0 ? 'pointer' : 'default';
    certNav.textContent = `${currentIndex + 1} / ${certificates.length}`;
  }

  // Update currentIndex when user scrolls manually
  certCon.addEventListener('scroll', function() {
    let minDiff = Infinity;
    let newIndex = currentIndex;
    certificates.forEach((img, idx) => {
      // Calculate the distance from the left edge of the container
      const diff = Math.abs(img.getBoundingClientRect().left - certCon.getBoundingClientRect().left);
      if (diff < minDiff) {
        minDiff = diff;
        newIndex = idx;
      }
    });
    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      toggleNavigation();
    }
  });

  next.addEventListener('click', showNextCertificate);
  prev.addEventListener('click', showPrevCertificate);

  // Initial state
  toggleNavigation();
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
  
// Select the elements
const projectDiv = document.querySelector('#projects');
const fixedDiv = document.querySelector('.project_hamburger_menu');

// Set up the intersection observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Show the fixed div when the project div is on screen
        fixedDiv.style.display = 'block';
      } else {
        // Hide the fixed div when the project div is out of view
        fixedDiv.style.display = 'none';
      }
    });
  },
  { threshold: [0.2, 1] }
);

// Function to apply observer based on media query
function applyObserver() {
  // Check if screen width is at most 640px
  const mediaQuery = window.matchMedia('(max-width: 640px)');
  
  if (mediaQuery.matches) {
    // If screen width is <= 640px, observe the project div
    observer.observe(projectDiv);
  } else {
    // If screen width is > 640px, unobserve the project div and hide fixed div
    observer.unobserve(projectDiv);
    fixedDiv.style.display = 'none';
  }
}

// Add a listener to apply observer on resize
window.addEventListener('resize', applyObserver);

// Initial call to set observer based on current screen size
applyObserver();






