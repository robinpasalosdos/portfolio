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
var hamContainer = document.getElementById("hamburger_nav");
var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

function slideDown(){
  tabContainer.classList.add("slide-down");
  hamContainer.classList.add("slide-down");
  tabContainer.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.2)';
  hamContainer.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.2)';
  setTimeout(function() {
  tabContainer.classList.remove("slide-up");
  hamContainer.classList.remove("slide-up");
  },100);
}

function slideUp(){
  tabContainer.classList.add("slide-up");
  hamContainer.classList.add("slide-up");
  tabContainer.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.2)';
  hamContainer.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.2)';
    setTimeout(function() {
        tabContainer.classList.remove("slide-down");
        hamContainer.classList.remove("slide-down");
        },100);
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
      tabContainer.style.boxShadow = 'none';
      hamContainer.style.boxShadow = 'none';
    }
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
const htmlElement = document.documentElement;
const bodyElement = document.body;
function showDialog(dialogBox) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById(dialogBox).style.display = "block";
  htmlElement.style.overflow = "hidden";
  bodyElement.style.overflow = "hidden";
}

function hideDialog(dialogBox) {
  document.getElementById("overlay").style.display = "none";
  document.getElementById(dialogBox).style.display = "none";
  htmlElement.style.overflow = "auto";
  bodyElement.style.overflow = "auto";
}

document.addEventListener('click', function (event) {
  if (event.target === document.getElementById("overlay")) {
    hideDialog("dialog-box-1");
    hideDialog("dialog-box-2");
    hideDialog("dialog-box-3");
  }
});

const sections = document.querySelectorAll('.animated-section');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)*3/4
    );
}

function handleScroll() {
    sections.forEach((section) => {
        if (isElementInViewport(section)) {
            section.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();

